function www() {
/*
概要：
１．全要素を選択し書き換えテキストを取得
２．ランダムな絵文字を取得
３．テキストの書き換え
*/

	const allElements = document.querySelectorAll('a, h1,h2,h3,h4,h5, p');

	
	for (let index = 0; index < allElements.length; index += 1) {
		const element = allElements[index];			
		const text = element.textContent;
		const hasNoSpecialSymbolsOrNewLines = !/[\s!@#$%^&*()_+={}\[\]:;"'<>,.?\\|`~]/.test(text);
		const hasNoVarOrConst = !/(var|const)/.test(text);
	
	
			const originalText = element.textContent;
			const chars = originalText.split("");	
	
			for (let i = 0; i < chars.length; i++) {
				
			  if (Math.random() < 0.3) {
			  	const randomString = getRandomString(myStrings);
			    chars[i] = randomString;
			  }
			}
	
			const newText = chars.join("");
			element.textContent = newText;		
	
	
		
	}
}



// ランダムな絵文字
const myStrings = ["☺️","👻","😻","👍","🐵","💦","‼️","💤","😂","🤬","🏃‍♂️"];

function getRandomString(stringsArray) {
  const randomIndex = Math.floor(Math.random() * stringsArray.length);
  return stringsArray[randomIndex];
}


// 実行
www();

