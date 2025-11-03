# MAMZ Google OAuth Integration Plan

## Phase 1: Dependencies
- [x] Update package.json: Add @react-oauth/google, jwt-decode; remove firebase dependency
- [x] Install new dependencies

## Phase 2: Auth Infrastructure
- [x] Create src/utils/auth.js: Helper functions for JWT decoding and auth management
- [x] Create src/contexts/AuthContext.jsx: React context for global auth state

## Phase 3: App Setup
- [x] Update src/main.jsx: Wrap app with GoogleOAuthProvider using client ID
- [x] Update src/App.jsx: Integrate AuthContext, remove currentUser state management

## Phase 4: Components Update
- [x] Rewrite src/components/LoginModal.jsx: Use Google OAuth popup, decode JWT, set user in context
- [x] Update src/components/Navbar.jsx: Add user avatar dropdown with logout option

## Phase 5: Documentation
- [x] Update README.md: Add Google OAuth setup instructions

## Phase 6: Testing
- [ ] Test login flow on localhost:5173
- [ ] Ensure logout clears localStorage
- [ ] Verify safe rendering for undefined user
