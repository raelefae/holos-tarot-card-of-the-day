function pickCard() { 
	var tarotCards = [
		["00-Fool.jpg","The Fool"],
		["01-Magician.jpg","The Magician"],
		["02-Priestess.jpg","The Priestess"],
		["03-Empress.jpg","The Empress"],
		["04-Emperor.jpg","The Emperor"],
		["05-Hierophant.jpg","The Hierophant"],
		["06-Lovers.jpg","The Lovers"],
		["07-Chariot.jpg","The Chariot"],
		["08-Strength.jpg","Strength"],
		["09-Hermit.jpg","The Hermit"],
		["10-Fortune.jpg","Fortune"],
		["11-Justice.jpg","Justice"],
		["12-Hanged.jpg","The Hanged Man"],
		["13-Death.jpg","Death"],
		["14-Temperance.jpg","Temperance"],
		["15-Devil.jpg","The Devil"],
		["16-Tower.jpg","The Tower"],
		["17-Star.jpg","Star"],
		["18-Moon.jpg","The Moon"],
		["19-Sun.jpg","The Sun"],
		["20-Judgement.jpg","Judgement"],
		["21-World.jpg","The World"],
		["Cups-01.jpg","Ace of Cups"],
		["Cups-02.jpg","Two of Cups"],
		["Cups-03.jpg","Three of Cups"],
		["Cups-04.jpg","Four of Cups"],
		["Cups-05.jpg","Five of Cups"],
		["Cups-06.jpg","Six of Cups"],
		["Cups-07.jpg","Seven of Cups"],
		["Cups-08.jpg","Eight of Cups"],
		["Cups-09.jpg","Nine of Cups"],
		["Cups-10.jpg","Ten of Cups"],
		["Cups-11.jpg","Page of Cups"],
		["Cups-12.jpg","Knight of Cups"],
		["Cups-13.jpg","Queen of Cups"],
		["Cups-14.jpg","King of Cups"],
		["Pentacles-01.jpg","Ace of Pentacles"],
		["Pentacles-02.jpg","Two of Pentacles"],
		["Pentacles-03.jpg","Three of Pentacles"],
		["Pentacles-04.jpg","Four of Pentacles"],
		["Pentacles-05.jpg","Five of Pentacles"],
		["Pentacles-06.jpg","Six of Pentacles"],
		["Pentacles-07.jpg","Seven of Pentacles"],
		["Pentacles-08.jpg","Eight of Pentacles"],
		["Pentacles-09.jpg","Nine of Pentacles"],
		["Pentacles-10.jpg","Ten of Pentacles"],
		["Pentacles-11.jpg","Page of Pentacles"],
		["Pentacles-12.jpg","Knight of Pentacles"],
		["Pentacles-13.jpg","Queen of Pentacles"],
		["Pentacles-14.jpg","King of Pentacles"],
		["Swords-01.jpg","Ace of Swords"],
		["Swords-02.jpg","Two of Swords"],
		["Swords-03.jpg","Three of Swords"],
		["Swords-04.jpg","Four of Swords"],
		["Swords-05.jpg","Five of Swords"],
		["Swords-06.jpg","Six of Swords"],
		["Swords-07.jpg","Seven of Swords"],
		["Swords-08.jpg","Eight of Swords"],
		["Swords-09.jpg","Nine of Swords"],
		["Swords-10.jpg","Ten of Swords"],
		["Swords-11.jpg","Page of Swords"],
		["Swords-12.jpg","Knight of Swords"],
		["Swords-13.jpg","Queen of Swords"],
		["Swords-14.jpg","King of Swords"],
		["Wands-01.jpg","Ace of Wands"],
		["Wands-02.jpg","Two of Wands"],
		["Wands-03.jpg","Three of Wands"],
		["Wands-04.jpg","Four of Wands"],
		["Wands-05.jpg","Five of Wands"],
		["Wands-06.jpg","Six of Wands"],
		["Wands-07.jpg","Seven of Wands"],
		["Wands-08.jpg","Eight of Wands"],
		["Wands-09.jpg","Nine of Wands"],
		["Wands-10.jpg","Ten of Wands"],
		["Wands-11.jpg","Page of Wands"],
		["Wands-12.jpg","Knight of Wands"],
		["Wands-13.jpg","Queen of Wands"],
		["Wands-14.jpg","King of Wands"]
		];
	var todaysCard = tarotCards[Math.floor(Math.random()*tarotCards.length)];
	var card = document.getElementById('pick-card');
//	var cardLabel = document.getElementById('card-label');
	card.setAttribute('src', 'images/' + todaysCard[0]);
//	cardLabel.innerHTML = todaysCard[1];
}