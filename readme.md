# Measure.js

Measure.js helps to make your web typography a more legible, and therefore more likely to be read.

### Huh, measure?

The measure is the length of a line of text, or more plainly the amount of characters per line.

Good measure is all about providing good rhythm to an article so when you read, you're not having to stop and start where you shouldn't be. You may have noticed bad measure where there was just way too many words on each line line, making you to search for each new line. 

### Why does this matter?

An often overlooked part of setting a block of type the measure is just as important to legibility as finding the right size, contrast and typeface.

### What is considered good measure

As a general rule of thumb a comfortable measure is 55-75 characters per line, with the perfect measure considered to be 65. Though unless you're using a monospaced font, the number will differ for each line. 

## Getting started with measure.js

Measure.js is intended for development use only. Of course, keep it around if you plan on updating the size or fonts later. They affect the measure (more than you would think).

To get up and running with Measure.js you must be using jQuery and be linking to the measure.js file. Then add the following block of code just below the closing body tag:

	<script>
		$('article').measure();
	</script>

As default it will highlight the first 3 paragraphs, allowing you to then update your css accordingly. The aim is to have each dark section flow from one line to another, effectively creating a dark column on the left and right sides of the text.

### Info and Options 

**perfectMeasure** *Default 65*

The perfect measure is considered to be 65 characters per line, though this can be adjusted to what you like. In addition a `.perfectMeasure` class is added to every character that is perfectly divisble by the perfect measure number. i.e. 65, 130, 195 etc.

**acceptableMeasure** *Default 10*

Most fonts have characters with variable widths meaning the perfect measure can't always be achieved. The acceptable measure gives it a bit of room to move. The default is 10, which highlights the characters that come 10 places before **and** after the perfect measure. A class of `.acceptableMeasure` is also added each character.

**paragraphCount** *Default 3*

Turns out it's a rather intensive process, I've found that limiting to 3 paragraphs works quick whilst providing a good indication of the overall measure. This can be adjusted accordingly depending on if speed or accuracy is more important. Make sure to disable the plugin before pushing these changes to live, so you don't pass on the peformance hit. 

To adjust these values replace the block of code above with the following:

	<script>
		$('article').measure({
			perfectMeasure: 70,
			paragraphCount: 4
		});
	</script>