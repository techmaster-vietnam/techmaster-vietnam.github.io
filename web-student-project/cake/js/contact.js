$(document).ready(function () {
  let contactName = $(".contact__sent #fullname");
  let contactEmail = $(".contact__sent #email");
  let contactPhone = $(".contact__sent #numberphone");
  let contactNote = $(".contact__sent #contacnote");
  let contacSubmit = $(".contact__sent");
  let success = $(".success");

  let errcontactName = $(".contact__sent #fullname ~ .error");
  let errcontactEmail = $(".contact__sent #email ~ .error");
  let errcontactPhone = $(".contact__sent #numberphone ~ .error");
  let errcontactNote = $(".contact__sent #contacnote ~ .error");

  errcontactName.hide();
  errcontactEmail.hide();
  errcontactPhone.hide();
  errcontactNote.hide();
  success.hide();

  let errcontactNameBool = true;
  let errcontactEmailBool = true;
  let errcontactPhoneBool = true;
  let errcontactNoteBool = true;

  contactName.focusout(function () {
    let str = $(this).val().trim();
    if (str.length < 2) {
      errcontactName.show();
      return (errcontactNameBool = true);
    }

    errcontactName.hide();
    errcontactNameBool = false;
  });

  contactEmail.focusout(function () {
    let str = $(this).val().trim();
    if (str.length < 1) {
      errcontactEmail.show();
      return (errcontactEmailBool = true);
    }

    errcontactEmail.hide();
    errcontactEmailBool = false;
  });

  contactPhone.focusout(function () {
    let str = $(this).val().trim();
    if (str.length < 1) {
      errcontactPhone.show();
      return (errcontactPhoneBool = true);
    }

    errcontactPhone.hide();
    errcontactPhoneBool = false;
  });

  contactNote.focusout(function () {
    let str = $(this).val().trim();
    if (str.length < 1) {
      errcontactNote.show();
      return (errcontactNoteBool = true);
    }

    errcontactNote.hide();
    errcontactNoteBool = false;
  });

  contacSubmit.submit(function () {
    if (errcontactNameBool) {
      errcontactName.show();
    }
    if (errcontactEmailBool) {
      errcontactEmail.show();
    }
    if (errcontactPhoneBool) {
      errcontactPhone.show();
    }
    if (errcontactNoteBool) {
      errcontactNote.show();
    }

    if (
      !errcontactNameBool &&
      !errcontactEmailBool &&
      !errcontactPhoneBool &&
      !errcontactNoteBool
    ) {
      success.show();
      return false;
    } else {
      success.hide();
      return false;
    }
  });
});
