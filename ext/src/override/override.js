function cleartabs(){
    chrome.tabs.query({}, function (tabs) {
        
    var action_url = "http://shahjainam.com/#/";
    chrome.tabs.create({ url: action_url });
        
    for (var i = 0; i < tabs.length; i++) {
    chrome.tabs.remove(tabs[i].id);
    }
    });
}
                      
document.addEventListener('DOMContentLoaded', function () {
document.getElementById('buttonclose').addEventListener('click', cleartabs);
});