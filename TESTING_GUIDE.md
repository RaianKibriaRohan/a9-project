# WarmPaws Manual Testing Guide

## Quick Start
1. Dev server running on: http://localhost:3001
2. All files are pure JavaScript (TypeScript removed)
3. Using Vite 6.3.5 for hot reload development
4. Firebase in demo mode (no credentials needed for basic testing)

## Testing User Flow

### Test Account (For Demo Mode)
In demo mode, all auth endpoints will show warnings but UI is fully functional for testing.
You can:
- See the login/register forms
- Test form validation
- Test protected route redirects
- View demo warnings on protected routes

### Complete User Journey Test

#### Step 1: Visit Home Page
```
URL: http://localhost:3001
Expected: 
- Hero carousel with Swiper autoplay
- Winter tips section with 4 tips
- Expert profiles carousel
- 8 service cards visible
- Navigation bar at top
- Footer at bottom
```

#### Step 2: Test Register Flow
```
URL: http://localhost:3001/register
Steps:
1. Try entering weak password (no uppercase):
   - Should show: "Password must contain at least one uppercase letter"
2. Try entering weak password (no lowercase):
   - Should show: "Password must contain at least one lowercase letter"
3. Try entering short password (< 6 chars):
   - Should show: "Password must be at least 6 characters long"
4. Fill in all fields with valid data:
   - Name: Any name
   - Email: Any email format
   - Password: Uppercase, lowercase, 6+ chars (e.g., "Password123")
   - Photo URL: (optional) Any image URL
5. Click Register
Expected in Demo Mode:
- Toast: "Please configure Firebase credentials to use authentication"
- Demo config fallback prevents actual account creation
```

#### Step 3: Test Login Flow
```
URL: http://localhost:3001/login
Steps:
1. See password toggle eye icon
2. Enter any email and password
3. Click "Login"
Expected in Demo Mode:
- Toast: "Please configure Firebase credentials to use authentication"
- Form remains on page
- Note: With real Firebase, would redirect to home
```

#### Step 4: Test Forgot Password
```
URL: http://localhost:3001/forgot-password
Steps:
1. Note email field (pre-fills if coming from login with ?email=)
2. Enter any email
3. Click "Reset Password"
Expected in Demo Mode:
- Toast: "Please configure Firebase credentials to use authentication"
- Back link navigates to login
```

#### Step 5: Test Protected Routes (Demo Mode)
```
URL: http://localhost:3001/my-profile
Expected:
- Warning box showing: "Firebase Configuration Required"
- Message: "This page requires authentication..."
- Options to configure Firebase
- No redirect (demo mode shows warning instead)

URL: http://localhost:3001/service/1
Expected:
- Warning box for unauthenticated access
```

#### Step 6: Test Service Details (No Auth Needed in UI)
```
URL: http://localhost:3001/service/1
Try different service IDs: /service/1 through /service/8
Expected:
- Service image displays
- Service name, provider, price, rating visible
- Description displays
- Booking form with name/email fields
- Submit button works (shows success toast)
```

#### Step 7: Test Navigation
```
Navbar Tests:
1. WarmPaws logo - should link to home
2. Home link - should navigate to /
3. When not logged in:
   - "Login" button visible
   - "Register" button visible
4. Mobile: Click hamburger icon
   - Menu opens/closes
   - All links work

Footer Tests:
1. Scroll to bottom
2. See:
   - Company name and description
   - Quick links (Home, Services)
   - Contact info (phone, email, address)
   - Social links (Facebook, Twitter, Instagram)
   - Copyright text
```

#### Step 8: Test Responsive Design
```
Chrome DevTools:
1. Press F12 to open DevTools
2. Click device toolbar icon (Ctrl+Shift+M)
3. Test breakpoints:

Mobile (375px):
- Hamburger menu should appear
- All text readable
- Forms accessible
- Images scale down
- No horizontal scroll

Tablet (768px):
- Menu might expand slightly
- Two-column layouts
- Service cards in 2-3 columns
- Forms wider

Desktop (1920px):
- Full horizontal navigation
- Multi-column layouts
- Service grid with 4 columns
- Maximum width containers centered
```

#### Step 9: Test Animations
```
AOS Animations:
1. Go to Home page
2. Scroll down slowly
3. Watch for fade-in effects on:
   - Winter tips section
   - Expert profiles
   - Service cards
4. Effects should trigger as they enter viewport

Carousel:
1. Home page hero carousel
2. Should auto-rotate every 4 seconds
3. Previous/Next arrows work
4. Pagination dots show current slide

Loading States:
1. Go to register/login
2. Click button
3. Should show loading spinner while processing
```

#### Step 10: Test Error Handling
```
Open Browser Console (F12 → Console tab):
1. Should show NO red error messages
2. Might see warnings about Firebase demo mode (expected)
3. Network requests should succeed
4. No "undefined" or "null" reference errors

Test Bad Service ID:
1. Navigate to: http://localhost:3001/service/999
2. Should show: "Service Not Found"
3. "Back to Services" button should work
```

## Features to Verify Checklist

- [x] All 8 services load from services.json
- [x] Carousel has autoplay and navigation
- [x] Forms have validation
- [x] Protected routes work
- [x] Demo mode warnings show
- [x] Navigation works on mobile/tablet/desktop
- [x] Responsive design adapts
- [x] AOS animations configured
- [x] Footer displays properly
- [x] Navbar shows avatar placeholder when not logged in
- [x] Toast notifications work
- [x] Loading states show

## Known Behaviors

1. **Demo Mode**: All authentication attempts fail gracefully with helpful messages
2. **Services**: All 8 services display regardless of auth status
3. **Booking**: Form accepts submissions in demo mode but doesn't save (no backend)
4. **Animations**: Require scrolling to see AOS effects
5. **Portfolio**: Photo URLs are examples - any valid image URL works

## Next Steps After Testing

1. If all tests pass:
   - Create meaningful git commits
   - Deploy to Netlify or Firebase Hosting
   - Update Firebase credentials when ready

2. For Production:
   - Replace demo Firebase credentials in .env.local
   - Test with real authentication
   - Setup backend for service bookings
   - Enable payment processing
   - Setup email notifications

## Troubleshooting

If you encounter issues:

1. **App won't load**: 
   - Check terminal: npm run dev should show "VITE ready"
   - Port 3001 in use? It will auto-increment to 3002, 3003, etc

2. **Images not loading**:
   - Check browser console for CORS errors
   - Valid image URLs required (http:// or https://)

3. **Animations not showing**:
   - Refresh page (hard refresh: Ctrl+Shift+R)
   - Scroll down to trigger AOS

4. **Forms not submitting**:
   - Check browser console for errors
   - In demo mode, should show Firebase warning toast

5. **Protected routes redirecting**:
   - Expected behavior when not authenticated
   - In demo mode, should show warning instead

## Performance Targets

- Page load: < 3 seconds
- First interaction: < 1 second
- Carousel transitions: < 300ms
- Form submissions: < 500ms response

## Browser Support

Tested on:
- Chrome 120+
- Firefox 121+
- Safari 17+
- Edge 120+
