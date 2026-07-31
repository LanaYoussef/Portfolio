const { execSync } = require('child_process')

const env = {
  ...process.env,
  GIT_AUTHOR_NAME: 'Lana Youssef',
  GIT_AUTHOR_EMAIL: 'lanayusf12@gmail.com',
  GIT_COMMITTER_NAME: 'Lana Youssef',
  GIT_COMMITTER_EMAIL: 'lanayusf12@gmail.com',
}

execSync('git checkout --orphan solo-main', { stdio: 'inherit' })
execSync('git add -A', { stdio: 'inherit' })
const tree = execSync('git write-tree', { encoding: 'utf8' }).trim()
const sha = execSync('git commit-tree ' + tree + ' -m "Add portfolio site."', {
  encoding: 'utf8',
  env,
}).trim()
execSync('git reset --hard ' + sha, { stdio: 'inherit' })
try {
  execSync('git branch -D main', { stdio: 'inherit' })
} catch (_) {}
execSync('git branch -M main', { stdio: 'inherit' })
console.log(execSync('git log -1 --format=full', { encoding: 'utf8' }))
