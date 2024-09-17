document.addEventListener('DOMContentLoaded', function() {
    var aboutDropdown = document.querySelector('.about-dropdown');
  
    // Show About Us submenu on hover
    aboutDropdown.addEventListener('mouseover', function() {
      var aboutSubmenu = this.querySelector('.about-submenu');
      if (aboutSubmenu) {
        aboutSubmenu.style.display = "block";
      }
    });
  
    // Hide About Us submenu on mouseout
    aboutDropdown.addEventListener('mouseout', function() {
      var aboutSubmenu = this.querySelector('.about-submenu');
      if (aboutSubmenu) {
        aboutSubmenu.style.display = "none";
      }
    });
  
    var divisionSubmenu = document.querySelector('.division-submenu');
  
    // Show Division submenu on hover
    divisionSubmenu.addEventListener('mouseover', function() {
      var divisionSubmenuContent = this.querySelector('.division-submenu-content');
      if (divisionSubmenuContent) {
        divisionSubmenuContent.style.display = "block";
      }
    });
  
    // Hide Division submenu on mouseout
    divisionSubmenu.addEventListener('mouseout', function() {
      var divisionSubmenuContent = this.querySelector('.division-submenu-content');
      if (divisionSubmenuContent) {
        divisionSubmenuContent.style.display = "none";
      }
    });
    
    
  });
  document.addEventListener('DOMContentLoaded', () => {
    const alerts = [
      "Alert 1: This is an important message!",
      "Alert 2: Please check your email for updates.",
      "Alert 3: New features have been added!"
    ];
  
    const alertContainer = document.querySelector('.alert-content');
  
    alerts.forEach(alert => {
      const alertElement = document.createElement('span');
      alertElement.className = 'alert';
      alertElement.textContent = alert;
      alertContainer.appendChild(alertElement);
    });
  });
 