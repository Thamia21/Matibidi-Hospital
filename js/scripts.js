// Department Search Functionality
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('departmentSearch');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            const departments = document.querySelectorAll('.department-card');
            
            departments.forEach(dept => {
                const title = dept.querySelector('.card-title').textContent.toLowerCase();
                const description = dept.querySelector('.card-text').textContent.toLowerCase();
                
                if (title.includes(searchTerm) || description.includes(searchTerm)) {
                    dept.style.display = 'block';
                } else {
                    dept.style.display = 'none';
                }
            });
        });
    }

    // Appointment Form Handling
    const appointmentForm = document.getElementById('appointmentForm');
    if (appointmentForm) {
        // Set minimum date to today
        const dateInput = document.getElementById('date');
        const today = new Date().toISOString().split('T')[0];
        dateInput.min = today;

        // Show/hide medical conditions details
        const medicalConditionsYes = document.getElementById('medicalConditionsYes');
        const medicalConditionsNo = document.getElementById('medicalConditionsNo');
        const medicalConditionsDetails = document.getElementById('medicalConditionsDetails');

        medicalConditionsYes.addEventListener('change', function() {
            medicalConditionsDetails.style.display = 'block';
        });

        medicalConditionsNo.addEventListener('change', function() {
            medicalConditionsDetails.style.display = 'none';
        });

        // Department and Doctor selection
        const departmentSelect = document.getElementById('department');
        const doctorSelect = document.getElementById('doctor');

        const doctors = {
            emergency: ['Dr. John Smith', 'Dr. Sarah Johnson'],
            maternity: ['Dr. Emily Brown', 'Dr. Michael Davis'],
            pediatric: ['Dr. Lisa Wilson', 'Dr. Robert Taylor'],
            general: ['Dr. James Anderson', 'Dr. Maria Garcia']
        };

        departmentSelect.addEventListener('change', function() {
            const selectedDepartment = this.value;
            doctorSelect.innerHTML = '<option value="">Select Doctor (Optional)</option>';
            
            if (selectedDepartment && doctors[selectedDepartment]) {
                doctors[selectedDepartment].forEach(doctor => {
                    const option = document.createElement('option');
                    option.value = doctor.toLowerCase().replace(/\s+/g, '-');
                    option.textContent = doctor;
                    doctorSelect.appendChild(option);
                });
            }
        });

        // Form validation and submission
        appointmentForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            if (!this.checkValidity()) {
                event.stopPropagation();
            } else {
                // Collect form data
                const formData = {
                    firstName: document.getElementById('firstName').value,
                    lastName: document.getElementById('lastName').value,
                    email: document.getElementById('email').value,
                    phone: document.getElementById('phone').value,
                    department: document.getElementById('department').value,
                    doctor: document.getElementById('doctor').value,
                    date: document.getElementById('date').value,
                    time: document.getElementById('time').value,
                    reason: document.getElementById('reason').value,
                    medicalConditions: document.querySelector('input[name="medicalConditions"]:checked')?.value,
                    conditions: document.getElementById('conditions').value,
                    medications: document.getElementById('medications').value,
                    allergies: document.getElementById('allergies').value
                };

                // Here you would typically send this data to a server
                // For now, we'll just show a success message
                alert('Appointment booked successfully! We will contact you shortly to confirm your appointment.');
                this.reset();
            }

            this.classList.add('was-validated');
        });
    }
});
