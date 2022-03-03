describe('Dynamic Loading Page', () => {
  it('waits for the hidden element to show', async () => {
    const btnStart = $('#start button');
    const textFinish = $('#finish h4');
    const elmLoading = $('#loading');

    await browser.url('/dynamic_loading/1');

    await btnStart.click();

    // await browser.pause(5000);

    await elmLoading.waitForDisplayed();
    await elmLoading.waitForDisplayed({reverse: true});
    
    await textFinish.waitForDisplayed();

    await expect(await textFinish.getText()).toEqual('Hello World!');
  });
});
