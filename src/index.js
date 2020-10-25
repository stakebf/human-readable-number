module.exports = function toReadable (number) {
    if (number === 0) {
        return 'zero';
    }
  
    let lower20 = ['one', 'two', 'three', 'four', 'five', 'six', 'seven',
        'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen',
        'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen',
        'nineteen'
    ];
  
    if (number < 20) {
        return lower20[number - 1];
    }
  
    let tens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  
    if (number < 100) {
        return number % 10 === 0 ? tens[(number - (number % 10)) / 10 - 2] : `${tens[(number - (number % 10)) / 10 - 2]} ${lower20[number % 10 - 1]}`;
    }
  
    if (number < 1000) {
        return number % 100 === 0 ? `${toReadable(Math.floor(number / 100))} hundred` : `${toReadable(Math.floor(number / 100))} hundred ${toReadable(number % 100)}`;
    }
}
