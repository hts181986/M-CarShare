var reservationPage = {
    fields: {
        ClientId = "", CarId = "", StartDate = "", EndDate = "", ReturnDate = "",
        Status = "", Distance = "", PickupLocation = "", DropLocation = "",
    },
    newRec: function () {
        this.fields.ClientId = "";
        this.fields.CarId = "";
        this.fields.StartDate = "";
        this.fields.EndDate = "";
        this.fields.ReturnDate = "";
        this.fields.Status = "";
        this.fields.Distance = "";
        this.fields.PickupLocation = "";
        this.fields.DropLocation = "";
    },
    setFields: function () {
        $("[name='ClientId']").val(this.fields.ClientId);
        $("[name='CarId']").val(this.fields.ClientId);
        $("[name='StartDate']").val(this.fields.ClientId);
        $("[name='EndDate']").val(this.fields.ClientId);
        $("[name='ReturnDate']").val(this.fields.ClientId);
        $("[name='Status']").val(this.fields.ClientId);
        $("[name='Distance']").val(this.fields.ClientId);
        $("[name='PickupLocation']").val(this.fields.ClientId);
        $("[name='DropLocation']").val(this.fields.ClientId);

    },
    getData: function () {
        $.ajax({
            url: '/api/cars',
            method: 'get',
            success: function (response) {

            },
            error: function (err) {
                console.log(err);
            }
        });
    },
    view: function (id) {
        $.ajax({
            url: '/api/reservations/' + id,
            method: 'get',
            success: function (response) {
                this.fields.ClientId = response.ClientId;
                this.fields.CarId = response.CarId;
                this.fields.StartDate = response.StartDate;
                this.fields.EndDate = response.EndDate;
                this.fields.ReturnDate = response.ReturnDate;
                this.fields.Status = response.Status;
                this.fields.Distance = response.Distance;
                this.fields.PickupLocation = response.PickupLocation;
                this.fields.DropLocation = response.DropLocation;
                this.setFields();
            },
            error: function (err) {

            }
        });
    },
    save: function () {
        $({
            url: '',
            method: 'post',
            data: this.fields,
            success: function (response) {

            },
            error: function (err) {

            }
        });
    },
    delete: function (id) {
        $.ajax({
            url: '',
            method: 'delete',
            success: function (response) {

            },
            error: function (err) {

            }
        });
    }
}

$(document).ready(function () {

});