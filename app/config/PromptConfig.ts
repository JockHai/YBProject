export default class PromptConfig {
    // toast show text config
    static EMAIL_INVALID_MESSAGE = "Invalid email";
    static SHOW_NAME_TEXT_VALID = "Name required";
    static SHOW_NAME_LIMIT_VALID = "Name should at least have 4 characters.";
    static SHOW_PHONE_TEXT_VALID = "Invalid phone number";
    static SHOW_PASSWORD_TEXT_VALID = "Your password must be 8 to 25 characters. ";
    static SHOW_PASSWORD_RULE_VALID = "Password must include both numbers and letters";
    static SHOW_PASSWORD_DIFFERENT = "Passwords don't match";
    static SHOW_PASSWORD_SAME = "Please choose a password that is different than your last one. ";
    static SHOW_DATE_VALID = "Incorrect date format";
    static SHOW_VERIFICATION_CODE_VALID = "Invalid verification code";
    static SHOW_VERIFICATION_CODE_ERROR = "Incorrect or expired verification code";
    static CVC_VALID = "Incomplete CVC";
    static BILLING_ZIP_CODE_VALID = "Incomplete zip";
    static CARD_NUMBER_CODE_VALID = "Incomplete card number";
    static SHOW_ENTER_AMOUNT = "Please enter valid amount";
    static SHOW_RETRY_TOO_FREQUENTLY = "Retried too frequently";
    static SEND_SMS_VERIFICATION_CODE_TOO_FREQUENTLY = "Please wait a moment to send code again.";
    static VERIFICATION_CODE_NOT_MATCH = "Code doesn't match";
    static SHOW_TIP_YOUR_CHEF = "What’s a chef tip?\n" + "100% of your tip goes to our team of chefs on the road. You may tip now and have the option to modify your tip after delivery.";

    static UNKNOWN_ERROR = "Unknown error, please try again later";
    static NETWORK_ERROR = "Network error, please try again later";
    static INTERNAL_ERROR = "Server is busy, please try again later";
    static MAPBOX_API_ERROR = "Mapbox service is busy, please try again later";
    static NO_ADDRESS_SELECTED = "Missing address";

    static OFFLINE_MEAL = "The meal is temporarily unavailable. Come back later or search our other meals.";
    static NOT_FOUND_ITEM = "Item not available.";

    static TIP_ADDED = "Your tip has been added";
    static TIP_UPDATED = "Your tip has been updated";
    static TIP_DUPLICATED = "Tip is duplicated.";

    static CHECKOUT_ID_EXPIRED = 'Time Out for place order, please go back to click "Reorder" again.';
    static INVALID_CHECKOUT_ID = "Error occurs while processing your request.";
    static ORDER_ALREADY_REVIEWED = "Review has been done.No need to review again.";
    static CREDIT_NOT_ENOUGH = "The credit amount has been changed, please review and place order again.";
    static CREDIT_CHANGED = "The credit has been changed, please review and place order again.";
    static INELIGIBLE_PROMOTION = "The promotion has been changed, please review and place order again.";
    static CHECKOUT_INVENTORY_CHANGED_TITLE = "Unfortunately, some of the dishes in your order have been sold out.";
    static CHECKOUT_INVENTORY_CHANGED_DESC = "Please review and modify your order.";

    static PRICE_CHANGED_TITLE = "Oops! This price of this item changed.";
    static PRICE_CHANGED_DESC = "Please note the adjustment in your order summary.";
    static PRICE_CHANGED_BUTTON_TITLE = "OKAY";

    static DUPLICATED_CREDIT_CARD = "This card has already been added to your account.";

    static INVALID_PASSWORD = "Current password provided is incorrect";

    static DELETE_ADDRESS_MESSAGE = "Are you sure you want to delete this address?";

    static DELETE_PAYMENT_MESSAGE = "Are you sure you want to delete this payment method?";

    static VERSION_UPDATE_TITLE = "Time for an upgrade.";
    static VERSION_UPDATE_REQUIRE_MESSAGE = "You need to upgrade the version to get a better experience.";
    static VERSION_UPDATE_OPTIONAL_MESSAGE = "You can upgrade the version to get a better experience.";

    static LOGOUT_MESSAGE = "Are you sure you want to sign out?";

    static NOTIFY_BY_EMAIL_TITLE = "All Set!";
    static NOTIFY_BY_EMAIL_DESCRIPTION = "We’ll let you know when Wonder starts serving this area.";

    static SHOW_RESTAURANT_CLOSE_DESCRIPTION = "Come by later or browse our other restaurants.";
    static SHOW_RESTAURANT_CLOSE_PRIMARY_TEXT = "GOT IT";

    static INVALID_PASSWORD_TITLE_BY_PHONE = "Incorrect password.";
    static INVALID_PASSWORD_DESCRIPTION = "If you don't remember your password, you can reset it now.";
    static INVALID_PASSWORD_PRIMARY_TEXT = "TRY AGAIN";
    static INVALID_PASSWORD_SECONDARY_TEXT = "RESET PASSWORD";
    static INVALID_PASSWORD_TITLE = "Incorrect email or password.";

    static EMAIL_NOT_REGISTERED_TITLE = "An account does not exist with that email.";
    static EMAIL_NOT_REGISTERED_DESCRIPTION = "If you don't have an account, you can create one now.";
    static EMAIL_NOT_REGISTERED_PRIMARY_TEXT = "TRY AGAIN";
    static EMAIL_NOT_REGISTERED_SECONDARY_TEXT = "CREATE AN ACCOUNT";

    static EXPIRED_VERIFICATION_CODE_TITLE = "Code is expired";
    static EXPIRED_VERIFICATION_PRIMARY_TEXT = "RESEND CODE";

    static OUT_OF_SERVICE_AREA_TITLE = "We don’t serve this address yet.";
    static OUT_OF_SERVICE_AREA_DESCRIPTION = "Please try a new address.";
    static OUT_OF_SERVICE_AREA_PRIMARY_TEXT = "TRY ANOTHER ADDRESS";

    static OUT_OF_SERVICE_AREA_LOGIN_TITLE = "We don’t serve this address.";
    static OUT_OF_SERVICE_AREA_LOGIN_DESCRIPTION = "Try another address or sign up for updates about our service in this area.";
    static OUT_OF_SERVICE_AREA_LOGIN_PRIMARY_TEXT = "TRY ANOTHER ADDRESS";
    static OUT_OF_SERVICE_AREA_LOGIN_SECONDARY_TEXT = "NOTIFY ME";

    static USER_ALREADY_EXISTED_TITLE = "An account already exists for that email.";
    static USER_ALREADY_EXISTED_PRIMARY_TEXT = "GO TO LOGIN";

    static EMAIL_NOT_EXISTS_IN_WHITE_LIST_TITLE = "There was an issue creating your account.";
    static EMAIL_NOT_EXISTS_IN_WHITE_LIST_DESCRIPTION = "The email provided does not match a registered beta email. Check to make sure you're using the correct email.";
    static EMAIL_NOT_EXISTS_IN_WHITE_LIST_PRIMARY_TEXT = "TRY A DIFFERENT EMAIL";

    static USER_PHONE_ALREADY_EXISTED_TITLE = "An account already exists for that phone number.";
    static USER_PHONE_ALREADY_EXISTED_PRIMARY_TEXT = "GO TO LOGIN";
    static CHANGE_PHONE_ALREADY_EXISTED_PRIMARY_TEXT = "TRY AGAIN";

    static USER_PHONE_NOT_EXISTED_PRIMARY_TEXT = "This phone number is not recognized";
    static USER_PHONE_NOT_EXISTED_SECONDARY_TEXT = "Please enter the phone number associated with your account.";

    static USER_PHONE_NOT_EXISTED_PRIMARY_BY_LOGIN = "An account with that phone number does not exist.";
    static USER_PHONE_NOT_EXISTED_SECONDARY_BY_LOGIN = "If you don’t have an account, you can create one now.";

    static INVALID_EXPIRY_CARD_TITLE = "There was an issue saving your payment method.";
    static INVALID_EXPIRY_CARD_PRIMARY_TEXT = "EDIT PAYMENT METHOD";

    static PAY_FAILED_CARD_CHECKING_TITLE = "There was an issue with your card.";
    static PAY_FAILED_CARD_CHECKING_DESC = "Please double check your payment information.";
    static PAY_FAILED_CARD_CHECKING_BTN_TITLE = "CHANGE PAYMENT METHOD";

    static PAY_FAILED_TITLE = "There was an issue processing your card.";
    static PAY_FAILED_DESCRIPTION = "Contact your bank or change your payment method.";
    static PAY_FAILED_PRIMARY_TEXT = "CHANGE PAYMENT METHOD";

    static REORDER_CHECK_SORRY_TITLE = "Sorry you do not have enough credit for this order.";
    static REORDER_CHECK_SORRY_DESCRIPTION = "Reduce the number of items in your cart to pay with credit.";
    static REORDER_CHECK_SORRY_PRIMARY_TEXT = "OK GOT IT";

    static REORDER_CHECK_DELETE_PAYMENT_TITLE = "The payment method is deleted. Please add payment before place order.";
    static REORDER_CHECK_DELETE_PAYMENT_PRIMARY_TEXT = "ADD PAYMENT";

    static ESTIMATED_TIME_INCREASED_DESCRIPTION = 'Tap "continue with order" if you would like to proceed. If not, please tap "clear cart" and explore more options.';
    static ESTIMATED_TIME_INCREASED_PRIMARY_TEXT = "CONTINUE WITH ORDER";
    static ESTIMATED_TIME_INCREASED_SECONDARY_TEXT = "EXPLORE OTHER OPTIONS";

    static UNAVAILABLE_RESTAURANT_REORDER_PRIMARY_TEXT = "BROWSE OTHER RESTAURANTS";

    static CART_NO_LONGER_AVAILABLE_PRIMARY_TEXT = "CHOOSE SOMETHING ELSE";
    static CART_NO_LONGER_AVAILABLE_SECONDARY_TEXT = "RETURN TO CART";

    static ORDER_ADD_ADDRESS_TITLE = "Please enter an address to place your order.";
    static ORDER_ADD_ADDRESS_BUTTON_TITLE = "ADD ADDRESS";

    static RESTAURANT_ADD_ADDRESS_TITLE = "Please enter an address.";
    static RESTAURANT_ADD_ADDRESS_BUTTON_TITLE = "ADD ADDRESS";

    static REORDER_PAYMENT_INVALID_TITLE = "Please add a payment method to place your order.";
    static REORDER_PAYMENT_INVALID_PRIMARY_TEXT = "ADD PAYMENT METHOD";

    static SHOP_CART_SUBTOTAL_NO_VALID_TITLE = "Add more item to meet minimum order size";

    static ORDER_DETAIL_UNAVAILABLE_TITLE = "Sorry you do not have enough credit for this tip. Reduce the tip to pay with credit.";

    static ORDER_STATUS_CANCEL_TITLE = "Are you sure you want to cancel?";
    static ORDER_STATUS_CANCEL_PRIMARY_TEXT = "YES, PLEASE CANCEL";
    static ORDER_STATUS_CANCEL_SECONDARY_TEXT = "NO, NEVERMIND";

    static AMOUNT_TIP_MODAL_TITLE = "DELIVERY FEE";
    static AMOUNT_TIP_MODAL_DESCRIPTION = "What's a delivery fee?\nIt helps us give you the most magical meal experience possible with the speed and ease you love.";

    static TRY_ANOTHER_ADDRESS_DESCRIPTION = "Please try another address";
    static TRY_ANOTHER_ADDRESS = "TRY ANOTHER ADDRESS";

    static CLEAR_EXPLORE_DESCRIPTION = "Please try another address or clear cart and explore more.";
    static EXPLORE_MORE = "EXPLORE MORE";

    static RESTAURANT_UNAVAILABLE_NEW_ADDRESS_DESCRIPTION = "Please try a new address.";

    static RESTAURANT_OUT_OF_SERVICE_AREA_DESCRIPTION = "You can try another address or explore more restaurants.";

    static JOIN_WAIT_LIST_DESCRIPTION = "Join the waitlist for updates or try another address.";
    static JOIN_THE_WAITLIST = "JOIN THE WAITLIST";

    static SHOW_NOTIFY_OUT_OF_SERVICE_TITLE = "Looks like this address is outside of our beta service area.";

    static CHANGE_TIP_DESCRIPTION = "If this was a mistake, you can still make any adjustments.";

    static UPDATE_MARKETING_TITLE = "Enroll in discounts & news texts?";
    static UPDATE_MARKETING_DESCRIPTION = "Receive special offers, recommendations, and product announcements from Wonder via text. Standard carrier rates may apply.";

    static UPDATE_NOTIFICATION_TITLE = "Switch to text message updates?";
    static UPDATE_NOTIFICATION_DESCRIPTION = "Standard carrier rates may apply.";

    static NO_SELECT_PAYMENT_TITLE = "Select a payment method to place your order.";
    static NO_SELECT_PAYMENT_BUTTON_TITLE = "ADD PAYMENT METHOD";

    static ORDER_HAS_CANCEL_DESCRIPTION = "Your order has been canceled.";
    static ORDER_HAS_CANCEL_PRIMARY_TEXT = "VIEW RESTAURANTS";
    static INVALID_ORDER_STATUS_DESCRIPTION = "There was an error processing your request.";

    static UPDATE_TIP_FAILED = "There was an issue processing your payment and your tip was not added.";

    static PROMO_INELIGIBLE = "CONDITIONS TO MAKE ELIGIBLE";

    static SUGGESTED_TIP_DESCRIPTION = "If this was a mistake, you can still make any adjustments.";

    static LEAVE_A_MESSAGE_SUCCESS_TITLE = "Thank you for your message!";
    static LEAVE_A_MESSAGE_SUCCESS_DESC = "We'll get back to you as soon as we can.";
    static LEAVE_MESSAGE_REQUIRED = "Message required";

    static EMAIL_CHECK_NO_FOUND_TITLE = "This email is not recognized.";
    static EMAIL_CHECK_NO_FOUND_DESC = "Please enter the email associated with your account.";
    static EMAIL_CHECK_NO_FOUND_BUTTON_TITLE = "TRY AGAIN";

    static PRICE_CHANGE_TITLE = "Oops! The price of this item changed.";
    static PRICE_CHANGE_DESC = "Please note the adjustment in your order summary.";
    static PRICE_CHANGE_BUTTON_TITLE = "OKAY";

    static CART_CLEAR_TITLE = "Start new order?";
    static CART_CLEAR_DESC = "You can only order from one restaurant at a time. Are you sure you want to clear your order and start a new one?";
    static CART_CLEAR_PRIMARY_TEXT = "RETURN TO ORDER";
    static CART_CLEAR_SECONDARY_TEXT = "START NEW ORDER";
    static CART_ITEM_REMOVED = "Removed from order";

    static RESERVE_CHANGE_ADDRESS_TITLE = "Are you sure?";
    static RESERVE_CHANGE_ADDRESS_DESC = "Changing your address will also change your arrival time. Are you sure you want to continue?";
    static RESERVE_CHANGE_ADDRESS_PRIMARY_TEXT = "CHANGE ADDRESS";
    static RESERVE_CHANGE_ADDRESS_SECONDARY_TEXT = "CANCEL";

    static CART_DELETED_BY_SERVER_DESC = "We're sorry, but this restaurant is now closed. Try another option or check back later.";

    static ADD_TO_CART_INVENTORY_CHANGED_ERROR = "Some ingredients are now sold out or are running low. Please modify your dish.";

    static CART_OPTION_UNAVAILABLE_TITLE = "We’ve made changes to some dishes in your order. Please confirm your selection.";

    static ADDRESS_DISMISS_STREET_NUMBER_TITLE = "We noticed you’re missing a house number";
    static ADDRESS_DISMISS_STREET_NUMBER_DESC = "To ensure your food gets to you please provide additional delivery instructions.";
    static ADDRESS_DISMISS_STREET_NUMBER_CTA_TITLE = "ADD INSTRUCTIONS";
    static ADDRESS_DISMISS_STREET_NUMBER_SEC_CTA_TITLE = "UPDATE ADDRESS";
    static CHECKOUT_DISMISS_STREET_NUMBER_TITLE = "We still need more location information to make sure your food gets to you";
    static CHECKOUT_DISMISS_STREET_NUMBER_DESC = "Add delivery instructions or add a house number to your address.";

    static LOCATION_ACCURACY_TITLE = "Unable to find your location";
    static LOCATION_ACCURACY_DESC = "Share your exact location to ensure that your food gets to you.";
    static LOCATION_ACCURACY_PRIMARY_TEXT = "TURN ON PRECISE LOCATION";
    static LOCATION_ACCURACY_SECONDARY_TEXT = "ENTER YOUR ADDRESS";

    static SUGGESTION_RECEIVED = "Thank you for your feedback.";

    static MARKETPLACE_LEARN_MORE = [
        {
            type: "topContent",
            text: "Wonder is partnering with restaurants in the community to offer you a wider choice of options.\n",
        },
        {
            type: "title",
            text: "HOW IT WORKS",
        },
        {
            type: "content",
            text: "Order our parner restaurants directly through Wonder app. A courier will pick up the meal from the restaurant and deliver it straight to your home.\n",
        },
        {
            type: "title",
            text: "BENEFITS TO YOU",
        },
        {
            type: "content",
            text: "No delivery fees.\nSupport from our Wonder customer team\n",
        },
        {
            type: "title",
            text: "WHY WE’RE DOING IT?",
        },
        {
            type: "content",
            text: "Wonder believes in building and supporting the communities that we serve. There is a better and sustainable way to offer you more delivery options.\n",
        },
    ];
}
