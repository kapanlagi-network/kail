/**
 *
 */
import setPath from 'manage-path'
import spawn from 'spawn-command'
import findUp from 'find-up'


/**
 *
 */
export function getConfig() {
  let config = {}
  const pkgPath = findUp.sync('package.json')

  if (pkgPath) {
    config = require(pkgPath).hooks || {}
  }

  return config
}


/**
 *
 */
export function getCommand(config, hook, args) {
  let command = config[hook]

  if (command) {
    // Replace $1, $2,... with arguments
    command = command.replace(/\$(\d)/g, (match, number) => args[number])
  }

  return command
}


/**
 *
 */
export default function runHook(hook, args) {
  const config = getConfig()
  const command = getCommand(config, hook, args)

  if (command) {
    // Add package binaries to PATH
    setPath(process.env).unshift(findUp.sync('node_modules/.bin'))

    // Execute command
    spawn(command, { stdio: 'inherit' }).on('exit', process.exit)
  }
}
