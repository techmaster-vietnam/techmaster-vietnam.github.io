new Vue ({
    el: "#vue",
    data: {
        numberOfTicket: 1,
        isDisabled: false,
        price: "120.000"
    },
    methods: {
        decrease: function() {
            if (this.numberOfTicket == 0) {
                this.numberOfTicket == 0;
                return;
            }
            this.numberOfTicket--;
            this.price = (this.numberOfTicket * 120000).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        },
        increase: function() {
            this.numberOfTicket++;
            this.price = (this.numberOfTicket * 120000).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        }
    }
})