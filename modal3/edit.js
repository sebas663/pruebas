   
	
	template:
           '<md-dialog aria-label="List dialog">' +
           '  <md-dialog-content>'+
		   '      <form name="contactForm" data-ng-submit="sendMail()">' +
		   '	        Name: <input type="text" data-ng-model="contactName">' +
		   '	        Email: <input type="email" data-ng-model="contactEmail">' +
		   '	        Message: <textarea ng-model="contactMsg" columns="1" required></textarea>' +
		   '	        <button type="submit">Send</button>' +
		   '      </form>' +
           '  </md-dialog-content>' +
           '  <md-dialog-actions>' +
           '    <md-button ng-click="closeDialog()" class="md-primary">' +
           '      Close Dialog' +
           '    </md-button>' +
           '  </md-dialog-actions>' +
           '</md-dialog>',