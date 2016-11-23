var carPage = {
    data: [],
    fields: {
        _id: undefined,
        type: "",
        plateno: "",
        color: "",
        mileage: "",
        model: "",
        brand: "",
        location: "",
        cordinates: "",
        rate: "",
        available: ""
    },
    newRec: function() {
        carPage.fields._id = undefined;
        carPage.fields.type = "";
        carPage.fields.plateno = "";
        carPage.fields.color = "";
        carPage.fields.mileage = "";
        carPage.fields.model = "";
        carPage.fields.brand = "";
        carPage.fields.location = "";
        carPage.fields.cordinates = "";
        carPage.fields.rate = "";
        carPage.fields.available = "";
        carPage.setFields();
    },
    setFields: function() {
        $("[name='type']").val(carPage.fields.type);
        $("[name='plateno']").val(carPage.fields.plateno);
        $("[name='color']").val(carPage.fields.color);
        $("[name='mileage']").val(carPage.fields.mileage);
        $("[name='model']").val(carPage.fields.model);
        $("[name='brand']").val(carPage.fields.brand);
        $("[name='location']").val(carPage.fields.location);
        $("[name='cordinates']").val(carPage.fields.cordinates);
        $("[name='rate']").val(carPage.fields.rate);
        $("[name='available']").val(carPage.fields.available);

    },
    getData: function() {
        $.ajax({
            url: '/api/cars',
            method: 'get',
            success: function(response) {
                // console.log(response);
                // response.forEach(function(item) {
                //     var row = "<tr><td>" + item.plateno + "</td></tr>";
                //     $("[name='tbl_cars']").append(row);
                // });
            },
            error: function(err) {
                console.log(err);
            }
        });
    },
    view: function(id) {
        $.ajax({
            url: '/api/cars/' + id,
            method: 'get',
            success: function(response) {
                carPage.fields._id = response._id;
                carPage.fields.type = response.type;
                carPage.fields.plateno = response.plateno;
                carPage.fields.color = response.color;
                carPage.fields.mileage = response.mileage;
                carPage.fields.model = response.model;
                carPage.fields.brand = response.brand;
                carPage.fields.location = response.location;
                carPage.fields.cordinates = response.cordinates;
                carPage.fields.rate = response.rate;
                carPage.fields.available = response.available;
                carPage.setFields();
            },
            error: function(err) {
                console.log(err);
            }
        });
    },
    save: function() {
        var method = "post";
        if (carPage.fields._id != undefined) {
            method = "put";
        }
        $.ajax({
            url: '/api/cars' + (carPage.fields._id != undefined ? "/" + carPage.fields._id : ""),
            method: method,
            data: carPage.fields,
            success: function(response) {
                alert(carPage.fields._id != "" ? "Updated" : "Saved");
                window.location.reload();
            },
            error: function(err) {
                console.log(err);
            }
        });
    },
    delete: function(id) {
        $.ajax({
            url: '/api/cars' + id,
            method: 'delete',
            success: function(response) {
                alert("deleted");
                window.location.reload();
            },
            error: function(err) {
                console.log(err);
            }
        });
    }
};

$(document).ready(function() {
    $("[name='btn_new']").on('click', function() {
        carPage.newRec();
    })
    $("[name='btn_save']").on('click', function() {
        carPage.fields = {
            _id: (carPage.fields._id != undefined ? carPage.fields._id : undefined),
            type: $("[name='type']").val(),
            plateno: $("[name='plateno']").val(),
            color: $("[name='color']").val(),
            mileage: $("[name='mileage']").val(),
            model: $("[name='model']").val(),
            brand: $("[name='brand']").val(),
            location: $("[name='location']").val(),
            cordinates: $("[name='cordinates']").val(),
            rate: $("[name='rate']").val(),
            available: $("[name='available']").val()
        };

        carPage.save();
    });

    $("[name='btn_edit']").on("click", function() {
        var id = $(this).data(id);
        carPage.view(id.id);
    });
    $("[name='btn_del']").on("click", function() {
        var id = $(this).data(id);
        carPage.delete(id.id);
    });


});