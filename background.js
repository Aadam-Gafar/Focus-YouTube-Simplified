const extensionApi = typeof browser !== "undefined" ? browser : chrome;

extensionApi.action.onClicked.addListener(() => {
  extensionApi.tabs.create({ url: "https://monoapp.uk/" });
});
