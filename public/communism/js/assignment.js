const averageWPM = 200;

function countWords() {

    // Select all the p elements in the page.
    var paragraphs = document.getElementsByTagName("p");

    // The counter.
    var count = 0;
    
    for (var i = 0; i < paragraphs.length; i++) {
        // Get text contained in paragraph, sanitizing whitespace.
        var containingText = data_of(paragraphs[i]);

        // Don't count single words. (This is to exclude empty paragraphs.)
        if (containingText.split(/\s/).length <= 1)
            continue;
        // Split the containingText of the current paragraph to count the words.
        count += containingText.split(/\s/).length;
    }
    
    return count;
}

function updateReadTimeHeader() {
    // Get word count.
    var wordCount = countWords();

    // Calculate read time.
    var minutesToRead = Math.round(wordCount / averageWPM);

    // Get read time header.
    var readTimeHeader = document.getElementById("readtime");
    // Update header content.
    readTimeHeader.innerHTML = `${wordCount} ord, tar ${minutesToRead} min att läsa`;
}

function updateLastEditedHeader() {
    // Get lastModified date string.
    var lastEdited = document.lastModified;

    // Turn lastEdited date string into date object.
    var lastEditedDate = new Date(lastEdited);

    // Create date options.
    var dateOptions = {
        day: 'numeric',
        year: 'numeric',
        month: 'short'
    };

    // Get last edited header.
    var lastEditedHeader = document.getElementById("lastedited");
    // Update last edited header content.
    lastEditedHeader.innerHTML = `Senast redigerad ${lastEditedDate.toLocaleDateString("sv-SE", dateOptions)}`;
}

function updateDynamicHeaders() {
    // Update read time header.
    updateReadTimeHeader();
    // Update last edited header.
    updateLastEditedHeader();
}

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("topButton").style.display = "block";
  } else {
    document.getElementById("topButton").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}