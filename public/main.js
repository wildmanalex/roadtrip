var app = new Vue ({
  el: '#app',
  data: {
	coffee:0,
    peanuts:0,
    books:0,
	isValid:false,
    cds:0,
	totalcost:0,
	totalweight:0
  },
  methods: {

	  request: function () {
		  $.post('/cargo-validator',{cost : this.totalcost, weight : this.totalweight}, function(response, request){
		  console.log(response);
	  	  })
	  }
  },
  computed: {
	cost: function () {
		 var cost = ((this.coffee * 100)+(this.peanuts * 10)+(this.books * 12.55)+(this.cds * 8.99))
		 this.totalcost = cost
		 return cost;
	},
	weight: function () {
		var weight = ((this.coffee * 1)+(this.peanuts * 3)+(this.books * 10)+(this.cds * .5))
		this.totalweight = weight
		return weight;
	},
	validate: function () {
  		if(this.cost > 200){
			this.isValid = true
  			return ('Your cargo is too expensive')
  		}
		else if (this.weight > 200) {
			this.isValid = true
  			return ('Your cargo is too heavy')
  		}
  		else {
  			return ('You are good to go!')
  		}
  	}
  }
});
