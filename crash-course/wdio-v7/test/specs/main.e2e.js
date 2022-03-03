describe('Main Page', () => {
  it('Verifies list items', async () => {
    await browser.url('/');
    const listExamples = await $$('ul li');
    await expect(listExamples).toBeElementsArrayOfSize({ gte: 1 });
  });
});
