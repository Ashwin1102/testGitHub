import { Selector } from 'testcafe';

fixture`GitHub Login Process`
    .page`https://github.com/login`;


// Successful login testcase
test('Successful GitHub Login', async t => {
    const usernameInput = Selector('#login_field');
    const passwordInput = Selector('#password');
    const signInButton = Selector('input[type="submit"][name="commit"]');
    const userAvatar = Selector('img[alt=""][size="32"][height="32"][width="32"][data-view-component="true"].avatar.circle');

    await t
        .typeText(usernameInput, 'your-username') //Put your correct login credentails to test. 
        .typeText(passwordInput, 'your-password')
        .click(signInButton)
        .expect(userAvatar.exists).ok();
});

// Forget Password testcase
test('Forgot Password Link', async t => {
    const forgotPasswordLink = Selector('a[href="/password_reset"]');
    const forgotPasswordTitle = Selector('h1').withText('Reset your password');

    await t
        .click(forgotPasswordLink)
        .expect(forgotPasswordTitle.exists).ok();
});

// Invalid attempt testcase
test('Invalid Login Attempt', async t => {
    const usernameInput = Selector('#login_field');
    const passwordInput = Selector('#password');
    const signInButton = Selector('input[type="submit"][name="commit"]');
    const errorMessage = Selector('.flash-error');

    await t
        .typeText(usernameInput, 'invalid-username')
        .typeText(passwordInput, 'invalid-password')
        .click(signInButton)
        .expect(errorMessage.exists).ok();
});



