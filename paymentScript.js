var paymentPage = {
    fields: {
        Date = "", ReservationId = "",ClientId = "",
        CarId = "", Distance = "", Paid = "", Payment_type = "",
    },
    newRec: function () {
        this.fields.Date = "";
        this.fields.ReservationId = "";
        this.fields.ClientId = "";
        this.fields.CarId = "";
        this.fields.Distance = "";
        this.fields.Paid = "";
        this.fields.Payment_type = "";
    },
    setFields: function () {
        $("[name='Date']").val(this.fields.Date);
        $("[name='ReservationId']").val(this.fields.ReservationId);
        $("[name='ClientId']").val(this.fields.ClientId);
        $("[name='CarId']").val(this.fields.CarId);
        $("[name='Distance']").val(this.fields.Distance);
        $("[name='Paid']").val(this.fields.Paid);
        $("[name='Payment_type']").val(this.fields.Payment_type);
    },
    getData: function () {
        $.ajax({
            url: '',
            method: 'get',
            success: function (response) {

            },
            error: function (err) {

            }
        });
    },
    view: function (id) {
        $.ajax({
            url: '' + id,
            method: 'get',
            success: function (response) {
                this.fields.Date = response.Date;
                this.fields.ReservationId = response.ReservationId;
                this.fields.ClientId = response.ClientId;
                this.fields.CarId = response.CarId;
                this.fields.Distance = response.Distance;
                this.fields.Paid = response.Paid;
                this.fields.Payment_type = response.Payment_type;
                this.setFields();
            },
            error: function (err) {

            }
        });
    },
    save: function () {
        $.ajax({
            url: '',
            method: 'post',
            data: this.fields,
            success: function(response){

            },
            error: function(err){

            }
        });
    },
    delete: function (id) {
        $.ajax({
            url: '',
            method: 'delete',
            success: function(response){

            },
            error: function(err){

            }
        });
    }
}

$(document).ready(function () {

});