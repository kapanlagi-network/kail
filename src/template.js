/**
 *
 */
import { readFileSync } from 'fs'
import { join } from 'path'
import findUp from 'find-up'


/**
 *
 */
const MODULE_NAME = 'kail'
const MESSAGE = 'Generated by {{MODULE_NAME}}. Do not edit this file.'


/**
 *
 */
export function isItself() {
  const gitPath = findUp.sync('.git')

  if (gitPath) {
    return gitPath.match(new RegExp(`${MODULE_NAME}/.git$`))
  }

  return false
}


/**
 *
 */
export function getContent() {
  const templatePath = join(__dirname, 'template.raw')

  return readFileSync(templatePath, 'UTF-8')
    .replace('{{MESSAGE}}', MESSAGE)
    .replace(/{{MODULE_NAME}}/g, MODULE_NAME)
    .replace('{{HOOK_RUNNER}}', isItself() ? './lib/index.js' : MODULE_NAME)
}


/**
 *
 */
export default {
  content: getContent(),
  message: MESSAGE,
}
