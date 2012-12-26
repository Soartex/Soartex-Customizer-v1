<?php
/**
 * Receives the [id], [title], [content] and [parentID] from $_GET and returns the HTML data of the accordion item.
 * The resulting HTML must be put inside the parent accordion to function.
 */

$id       = (string) $_GET['id'];
$parentID = (string) $_GET['parentID'];
$title    =          $_GET['title'];
$content  =          $_GET['content'];

assert(isset($id));
assert(isset($parentID));

echo "
<div class='accordion-group'>
	<div class='accordion-heading'>
		<a class='accordion-toggle' data-toggle='collapse' data-parent='accordion-$parentID' href='#collapse-$parentID-$id'>
			$title
		</a>
	</div>
	<div id='collapse-$parentID-$id' class='accordion-body collapse in'>
		<div class='accordion-inner'>
			$content
		</div>
	</div>
</div>
";