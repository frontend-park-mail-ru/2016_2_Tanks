
function hiddenAll(allPages) {
    'use strict';

    allPages.logoutDiv.hidden = true;
    allPages.delUserDiv.hidden = true;
    allPages.signUpDiv.hidden = true;
    allPages.signInDiv.hidden = true;

    allPages.buttonPlayDiv.hidden = true;
    allPages.buttonSignInDiv.hidden = true;
    allPages.buttonSignUpDiv.hidden = true;
    allPages.buttonBackDiv.hidden = true;
    allPages.buttonJoinDiv.hidden = true;
    allPages.buttonWithFriendsDiv.hidden = true;
    allPages.buttonSignOutDiv.hidden = true;
}



function startPage (user, allPages) {
  'use strict';

  hiddenAll(allPages);

  allPages.buttonPlayDiv.hidden = false;
  allPages.buttonSignInDiv.hidden = false;
  allPages.buttonSignUpDiv.hidden = false;
}



function signUpPage(user, allPages){
  'use strict';

  hiddenAll(allPages);

  allPages.signUpDiv.hidden = false;
  allPages.buttonBackDiv.hidden = false;

  console.log("sign up page");
}



function signInPage(user, allPages){
  'use strict';

  hiddenAll(allPages);

  allPages.buttonBackDiv.hidden = false;
  allPages.signInDiv.hidden = false;

  console.log("sign in page");
}



function mainPage (user, allPages) {
  'use strict';

  hiddenAll(allPages);

  allPages.buttonJoinDiv.hidden = false;
  allPages.buttonWithFriendsDiv.hidden = false;
  allPages.buttonSignOutDiv.hidden = false;
}
