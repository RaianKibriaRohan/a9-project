# WarmPaws Testing Plan

## 1. Home Page Tests
- [ ] Page loads without errors
- [ ] Swiper carousel displays with autoplay
- [ ] Navigation arrows work on carousel
- [ ] Winter tips section displays 4 tips with icons
- [ ] Expert profiles display with images
- [ ] Service cards show all 8 services
- [ ] "View Details" buttons are clickable
- [ ] AOS animations trigger on scroll

## 2. Authentication Tests
### Register Page
- [ ] Email field accepts valid email format
- [ ] Password shows toggle eye icon
- [ ] Password validation message shows:
  - [ ] Uppercase letter required
  - [ ] Lowercase letter required
  - [ ] 6+ characters required
- [ ] Photo URL field is optional
- [ ] Register button disabled while loading
- [ ] Success toast shows after registration
- [ ] User redirected to login after signup
- [ ] Can see "Already have an account? Login" link

### Login Page
- [ ] Email and password fields work
- [ ] Password toggle eye icon works
- [ ] "Forgot password?" link navigates correctly
- [ ] Google OAuth button appears
- [ ] Login button disabled while loading
- [ ] Success toast shows after login
- [ ] User redirected to Home page after login
- [ ] User avatar appears in navbar after login

### Forgot Password Page
- [ ] Email field pre-fills if coming from login
- [ ] Reset button sends email
- [ ] Success message shows
- [ ] "Back to Login" link works
- [ ] Redirects to login after 2 seconds

## 3. Protected Routes Tests
- [ ] Cannot access /my-profile without login (redirected to login)
- [ ] Cannot access /update-profile without login (redirected to login)
- [ ] Cannot access /service/:id without login (redirected to login)
- [ ] Can access protected routes when logged in
- [ ] Demo mode shows warning instead of redirecting

## 4. User Profile Tests
### My Profile Page
- [ ] User avatar displays
- [ ] User name shows (from profile)
- [ ] User email shows
- [ ] Join date displays correctly
- [ ] Account information section visible
- [ ] "Update Profile" button navigates to update page

### Update Profile Page
- [ ] Current name pre-fills
- [ ] Current photo URL pre-fills
- [ ] Name can be edited
- [ ] Photo URL can be updated
- [ ] Submit button disabled while loading
- [ ] Success message shows
- [ ] Redirects back to profile after update
- [ ] Updated info appears on My Profile page

## 5. Service Details Tests
- [ ] Service image displays
- [ ] Service name shows
- [ ] Category badge displays
- [ ] Rating with stars shows
- [ ] Provider name and email show
- [ ] Price displays correctly
- [ ] Available slots show
- [ ] Service description displays
- [ ] Booking form has name and email fields
- [ ] Name and email pre-fill from user context
- [ ] Booking submit shows success toast
- [ ] All service IDs (1-8) work correctly

## 6. Navigation Tests
### Navbar
- [ ] WarmPaws logo displays
- [ ] Logo links to home
- [ ] Home link in navbar
- [ ] When logged out:
  - [ ] "Login" button shows
  - [ ] "Register" button shows
- [ ] When logged in:
  - [ ] User avatar shows with border
  - [ ] Avatar tooltip shows on hover
  - [ ] "My Profile" link shows
  - [ ] "Logout" button shows
- [ ] Logout clears user and shows toast
- [ ] Mobile hamburger menu opens/closes
- [ ] Mobile menu has all navigation items

### Footer
- [ ] WarmPaws logo displays
- [ ] Quick links section visible
- [ ] Contact information shows:
  - [ ] Phone number
  - [ ] Email
  - [ ] Address
- [ ] Social media links show:
  - [ ] Facebook
  - [ ] Twitter
  - [ ] Instagram
- [ ] Copyright text displays
- [ ] Privacy Policy and Terms links present

## 7. Responsive Design Tests
### Mobile (375px)
- [ ] All text readable without horizontal scroll
- [ ] Hamburger menu appears
- [ ] Touch targets are adequately sized
- [ ] Form inputs are accessible
- [ ] Images scale properly

### Tablet (768px)
- [ ] Two-column layouts appear where appropriate
- [ ] Navigation expands
- [ ] Service cards arrange in 2-3 columns
- [ ] Forms scale appropriately

### Desktop (1920px)
- [ ] Full navigation visible
- [ ] Multi-column layouts display
- [ ] Service cards in grid
- [ ] No excessive empty space
- [ ] Hover effects on interactive elements

## 8. Animations Tests
- [ ] AOS animations trigger when scrolling
- [ ] Carousel autoplay works (4 second interval)
- [ ] Loading spinner shows during auth operations
- [ ] Toast notifications animate in/out
- [ ] Button hover states work
- [ ] Gradient backgrounds render properly

## 9. Error Handling Tests
- [ ] Invalid email shows error
- [ ] Weak password shows validation errors
- [ ] Login with wrong credentials shows error toast
- [ ] Register with duplicate email shows error
- [ ] Logout errors show error toast
- [ ] Service not found shows appropriate message
- [ ] Console shows no JavaScript errors

## 10. Browser Compatibility
- [ ] Chrome: All features work
- [ ] Firefox: All features work
- [ ] Safari: All features work
- [ ] Edge: All features work

## 11. Performance Tests
- [ ] Page loads in under 3 seconds
- [ ] Carousel transitions smoothly
- [ ] No lag on animations
- [ ] Form submissions respond quickly
- [ ] Images load without stretching layout

## 12. Data Persistence Tests
- [ ] User stays logged in after page refresh
- [ ] Profile updates persist across sessions
- [ ] Services data loads from services.json
- [ ] All 8 services have complete data

## Test Execution Log
- Started: [Date]
- Completed: [Date]
- Issues Found: [Number]
- Status: [PASSED/FAILED]
