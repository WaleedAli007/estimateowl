$(document).ready(function() {

  $('#newEstimateModal').on('shown.bs.modal', function () {
    $('#inputTitle').trigger('focus')
  });

  $('#forgotPasswordModal').on('shown.bs.modal', function () {
    $('#fpEmail').trigger('focus')
  });

  jQuery.each(jQuery('textarea[data-autoresize]'), function() {
    let offset = this.offsetHeight - this.clientHeight;
    let resizeTextarea = function(el) {
      jQuery(el).css('height', 'auto').css('height', el.scrollHeight + offset + 2);
    };
    jQuery(this).on('keyup input', function() { resizeTextarea(this); }).removeAttr('data-autoresize');
    jQuery(this).trigger('keyup');
  });
});

let confirmDeleteEstimate = function() {
  bootbox.confirm({
    title: "Confirm delete estimate?",
    closeButton: false,
    message: "This operation cannot be undone.",
    buttons: {
      cancel: {
        label: 'Cancel',
        className: 'btn-default btn-lg'
      },
      confirm: {
        label: 'Confirm',
        className: 'btn-success btn-lg'
      }
    },
    callback: function (result) {
      console.log('This was logged in the callback: ' + result);
    }
  });
};
