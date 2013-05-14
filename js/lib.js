		/**
		 * clearForm() 
		 */
		function clearForm() {
			$('input[type=text]').val("");
			$('input:checked').attr('checked', false);
		}
		/**
		 * displayData()
		 */
		function displayData(dataIn) {
			$.each(props, function(i, item) {
				if (dataIn[i] != null) {
					var data = dataIn[i];
					if (item == "boolean")
						data = (data) ? "Yes" : "No";
					$("#view_"+i).html(data);
				} else
					$("#view_"+i).html("Not set");
			});
			$('#json_output').html(JSON.stringify(dataIn));
		}
		/**
		 * handleForm() 
		 */
		function handleForm() {
			if ($("#emp_form").valid()) {
				var dataObj = {};
				$.each(props, function(i, item) {
					var data = "";
					if (item == "boolean") {
						data = ($('input[name='+i+']:checked', '#emp_form').val() == "Y");
					} else {
						data = $("#"+i).val();
						if (item == "number")
							data = parseInt(data);
					}
					dataObj[i] = data;
				});
				displayData(dataObj);
			} else {
				form_val.showErrors();
			}
		}