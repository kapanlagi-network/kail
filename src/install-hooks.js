/**
 *
 */
import assert from 'assert'
import path from 'path'
import fs from 'fs'
import findUp from 'find-up'
import template from './template'


/**
 *
 */
export const hooks = [
  'applypatch-msg',
  'pre-applypatch',
  'post-applypatch',
  'pre-commit',
  'prepare-commit-msg',
  'commit-msg',
  'post-commit',
  'pre-rebase',
  'post-checkout',
  'post-merge',
  'pre-push',
  'pre-receive',
  'update',
  'post-receive',
  'post-update',
  'pre-auto-gc',
  'post-rewrite',
]


/**
 *
 */
export function getGitPath() {
  const gitPath = findUp.sync('.git')

  assert(gitPath, 'Invalid git project. Try to run "git init".')

  return gitPath
}


/**
 *
 */
export function getHooksPath(gitPath) {
  const hooksPath = path.resolve(gitPath, './hooks')

  if (!fs.existsSync(hooksPath)) {
    fs.mkdirSync(hooksPath)
  }

  return hooksPath
}


/**
 *
 */
export function backupHook(hookPath, message) {
  if (fs.existsSync(hookPath) && !fs.readFileSync(hookPath, 'UTF-8').match(message)) {
    fs.renameSync(hookPath, `${hookPath}.bak`)
  }
}


/**
 *
 */
export function installHook(hookPath, content) {
  fs.writeFileSync(hookPath, content)
  fs.chmodSync(hookPath, '755')
}


/**
 *
 */
export default function installHooks() {
  const gitPath = getGitPath()
  const hooksPath = getHooksPath(gitPath)

  hooks.forEach(hook => {
    const hookPath = path.resolve(hooksPath, hook)

    backupHook(hookPath, template.message)
    installHook(hookPath, template.content)
  })
}
