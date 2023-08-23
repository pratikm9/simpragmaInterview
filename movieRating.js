function movieRating(marks, lowCount, highCount) {
	marks.sort((a, b) => a - b);

	const ratings = marks.slice(lowCount, marks.length - highCount);

	const sum = ratings.reduce((acc, rating) => acc + rating, 0);

	const average = sum / ratings.length;
	return average;
}
const ratingOne = movieRating([70, 99, 96, 0, 30], 0, 0);
console.log('ratingOne', ratingOne);
const ratingTwo = movieRating([91, 90, 50], 1, 1);
console.log('ratingTwo', ratingTwo);
const ratingThree = movieRating([23, 23, 23, 23, 23, 23, 23, 23], 2, 3);
console.log('ratingThree', ratingThree);
const ratingFour = movieRating([31, 52, 20, 86, 47, 76, 82, 27, 42, 29], 1, 4);
console.log('ratingFour', ratingFour);
const ratingFive = movieRating([1, 1, 0, 0, 1, 1, 0, 1, 0, 2], 2, 2);
console.log('ratingFour', ratingFive);
