$(document).ready(function () {
    // Close Ads Functionality
    $('.close-ad').on('click', function () {
        $(this).parent().hide();
    });

    // Area Codes
    const areaCodes = [
        "+90 212",
        "+90 216", 
        "+90 232", 
        "+90 312", 
        "+90 252", 
        "+90 262", 
        "+90 272", 
        "+90 332", 
        "+90 362", 
        "+90 422"  
    ];

    areaCodes.forEach(code => {
        $('#areaCode').append(new Option(code, code));
    });

    // Companies Dropdown
    $.ajax({
        url: 'https://run.mocky.io/v3/65a76dcf-721b-4d99-9294-bbb53af13077', 
        method: 'GET',
        success: function (data) {
            data.companies.forEach(company => {
                $('#company').append(new Option(company, company));
            });
        },
        error: function () {
            alert('Failed to load company data.');
        }
    });

    // Subject Dropdown
    $.ajax({
        url: 'https://run.mocky.io/v3/ba9e1a29-373e-46c9-b492-9475cf43d424', 
        method: 'GET',
        success: function (data) {
            data.subjects.forEach(subject => {
                $('#subject').append(new Option(subject, subject));
            });
        },
        error: function () {
            alert('Failed to load subject data.');
        }
    });

    // Allow only digits and limit to 7 digits
    $('#phone').on('input', function () {
        this.value = this.value.replace(/\D/g, '');
        if (this.value.length > 7) {
            this.value = this.value.slice(0, 7);
        }
    });

    // Form Validation on Submit
    $('#registrationForm').on('submit', function (e) {
        e.preventDefault();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phonePattern = /^[0-9]{7}$/;
        if (!emailPattern.test($('#email').val())) {
            alert("Invalid email address. Please enter a valid email.");
            return;
        }

        if (!phonePattern.test($('#phone').val())) {
            alert("Phone number must be exactly 7 digits.");
            return;
        }
  
        alert("Form successfully submitted!");
        window.location.href = "form-submit.html";
    });
});
