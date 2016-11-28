var locationPage = {
    data: [],
    fields: {
        _id: undefined,
        location: ""
    },
    newRec: function () {
        locationPage.fields = {
            _id: undefined,
            location: ""
        };
    },
    setFields: function () {
        $("[name='txt_id']").val(locationPage.fields._id);
        $("[name='txt_location']").val(locationPage.fields.location);
    },
    getData: function () {
        $.ajax({
            url: '/api/location',
            method: 'get',
            success: function (response) {
                console.log(response);
            },
            error: function (errResponse) {

            }
        });
    },
    view: function (id) {
        $.ajax({
            url: '/api/location/' + id,
            method: 'get',
            success: function (response) {
                console.log(response);
                locationPage.fields = {
                    _id: response._id,
                    location: response.location
                };
                locationPage.setFields();
            },
            error: function (errResponse) {

            }
        });
    },
    save: function () {
        var method = "post";
        if (locationPage.fields._id != undefined) {
            method = "put";
        } else {
            method = "post";
        }
        $.ajax({
            url: '/api/location' + (locationPage.fields._id != undefined ? "/" + locationPage.fields._id : ""),
            method: method,
            data: locationPage.fields,
            success: function (response) {
                alert(locationPage.fields._id != "" ? "Updated" : "Saved");
                window.location.reload();
            },
            error: function (errResponse) {

            }
        });
    },
    delete: function (id) {
        $.ajax({
            url: '/api/location/' + id,
            method: 'delete',
            success: function (response) {
                alert("deleted");
                window.location.reload();
            },
            error: function (err) {
                console.log(err);
            }
        });
    }
};

$(document).ready(function () {
    $("[name='btn_save']").on('click', function () {
        locationPage.fields = {
            _id: (locationPage.fields._id != undefined ? locationPage.fields._id : undefined),
            location: $("[name='txt_location']").val()
        };
        locationPage.save();
    });

    $("[name='btn_edit']").on("click", function () {
        var id = $(this).data(id);
        locationPage.view(id.id);
    });

    $("[name='btn_new']").on('click', function () {
        locationPage.newRec();
    });

    $("[name='btn_del']").on("click", function () {
        var id = $(this).data(id);
        locationPage.delete(id.id);
    });
});