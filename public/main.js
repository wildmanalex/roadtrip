var app = new Vue ({
  el: '#app',
  data: {
    coffee:0,
    peanuts:0,
    books:0,
    cds:0
  },
  computed: {
	cost: function () {
		 return  ((this.coffee * 3.75)+(this.peanuts * 10)+(this.books * 12.55)+(this.cds * 8.99))
	},
	weight: function () {
		return ((this.coffee * 1)+(this.peanuts * 2)+(this.books * 4)+(this.cds * .5))
	},
	validate: function () {
		if(this.cost > 200){
			return ('Your cargo is too expensive')
		}
		else if (this.weight > 200) {
			return ('Your cargo is too heavy')
		}
		else {
			return ('You are good to go!')
		}
	}
  }
});
