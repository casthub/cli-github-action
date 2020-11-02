const core = require('@actions/core');
const { exec } = require('@actions/exec');

(async () => {
    await exec('npm', ['install', '-g', 'casthub-cli']);

    core.info('casthub-cli installed successfully');

    const token = core.getInput('token', {
        required: true,
    });

    await exec('casthub-cli', ['token', token]);

    core.info('casthub-cli token set successfully');
})();
