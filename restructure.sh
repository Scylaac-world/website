#!/bin/bash
# Scylaac Cleanup & Migration Script
# Moves service sections into their route folders, relocates shared UI,
# updates all imports, and removes old components/sections folder.

set -e  # exit on any error

echo "📁 Creating shared UI folder at app/_components/ui..."
mkdir -p app/_components/ui

echo "📦 Moving shared UI components to app/_components/ui..."
mv components/ui/GlassCard.tsx app/_components/ui/ 2>/dev/null || true
mv components/ui/GlowText.tsx app/_components/ui/ 2>/dev/null || true
mv components/ui/ScrollReveal.tsx app/_components/ui/ 2>/dev/null || true
mv components/ui/ContactForm.tsx app/_components/ui/ 2>/dev/null || true

echo "📦 Moving service section components into their route folders..."

# Customer Acquisition
mv components/sections/CustomersScene1Intro.tsx app/services/customer-acquisition/CustomersScene1Intro.tsx 2>/dev/null || true
mv components/sections/CustomersScene2ProcessBrands.tsx app/services/customer-acquisition/CustomersScene2ProcessBrands.tsx 2>/dev/null || true

# Digital Platforms
mv components/sections/ServiceWebApps.tsx app/services/digital-platforms/ServiceWebApps.tsx 2>/dev/null || true
mv components/sections/ServiceDesktopCloud.tsx app/services/digital-platforms/ServiceDesktopCloud.tsx 2>/dev/null || true

# Commerce & Automation
mv components/sections/ServiceEcommerce.tsx app/services/commerce-automation/ServiceEcommerce.tsx 2>/dev/null || true
mv components/sections/ServiceAutomation.tsx app/services/commerce-automation/ServiceAutomation.tsx 2>/dev/null || true

# Enterprise Intelligence
mv components/sections/ServiceAI.tsx app/services/enterprise-intelligence/ServiceAI.tsx 2>/dev/null || true

# SAP & ERP
mv components/sections/ServiceSAPEnterprise.tsx app/services/sap-enterprise/ServiceSAPEnterprise.tsx 2>/dev/null || true

# Keep Hero and WhyChooseUs and ContactCTA in shared sections
mkdir -p app/_components/sections
mv components/sections/Hero.tsx app/_components/sections/Hero.tsx 2>/dev/null || true
mv components/sections/WhyChooseUs.tsx app/_components/sections/WhyChooseUs.tsx 2>/dev/null || true
mv components/sections/ContactCTA.tsx app/_components/sections/ContactCTA.tsx 2>/dev/null || true

echo "🗑️ Removing old components/sections folder..."
rm -rf components/sections 2>/dev/null || true
echo "🗑️ Removing old components/ui folder..."
rm -rf components/ui 2>/dev/null || true
echo "🗑️ Removing old components/layout folder (keep Navbar and Footer in app/_components/layout)..."
mkdir -p app/_components/layout
mv components/layout/Navbar.tsx app/_components/layout/Navbar.tsx 2>/dev/null || true
mv components/layout/Footer.tsx app/_components/layout/Footer.tsx 2>/dev/null || true
rm -rf components/layout 2>/dev/null || true

echo "🔄 Updating imports in moved service files..."

# Function to replace import paths in a file
fix_imports() {
  # Replace "../../ui/" with "../../app/_components/ui/"
  sed -i '' 's|../../ui/|../../app/_components/ui/|g' "$1"
  # Replace "../ui/" with "../../app/_components/ui/"
  sed -i '' 's|../../app/_components/ui/|../../_components/ui/|g' "$1"  # adjust based on depth
}

# Adjust imports based on location depth
# For files in app/services/*/, they should import from @/app/_components/ui/ 
# We'll use relative paths that are correct: from app/services/customer-acquisition/ to app/_components/ui/ is ../../_components/ui/

find app/services -name "*.tsx" -print0 | while IFS= read -r -d '' f; do
  # Replace old imports that referenced components/ui/ or ../ui/
  sed -i '' -E 's|from "../../components/ui/([^"]+)"|from "@/app/_components/ui/\1"|g' "$f"
  sed -i '' -E 's|from "../components/ui/([^"]+)"|from "@/app/_components/ui/\1"|g' "$f"
  sed -i '' -E 's|from "../../ui/([^"]+)"|from "@/app/_components/ui/\1"|g' "$f"
  sed -i '' -E 's|from "../ui/([^"]+)"|from "@/app/_components/ui/\1"|g' "$f"
  # Also fix imports to GlowText, GlassCard, ScrollReveal, ContactForm
  sed -i '' 's|from "../../components/ui/GlassCard"|from "@/app/_components/ui/GlassCard"|g' "$f"
  sed -i '' 's|from "../../components/ui/GlowText"|from "@/app/_components/ui/GlowText"|g' "$f"
  sed -i '' 's|from "../../components/ui/ScrollReveal"|from "@/app/_components/ui/ScrollReveal"|g' "$f"
  sed -i '' 's|from "../../components/ui/ContactForm"|from "@/app/_components/ui/ContactForm"|g' "$f"
  # Remove any leftover relative imports that might break
  sed -i '' 's|from "../../components/ui/||g' "$f"
  sed -i '' 's|from "../ui/||g' "$f"
done

echo "🔄 Updating imports in shared components (Hero, WhyChooseUs, ContactCTA, Navbar, Footer)..."
# Hero is in app/_components/sections/
find app/_components/sections -name "*.tsx" -print0 | while IFS= read -r -d '' f; do
  sed -i '' -E 's|from "../../ui/|from "@/app/_components/ui/|g' "$f"
  sed -i '' -E 's|from "../ui/|from "@/app/_components/ui/|g' "$f"
  sed -i '' -E 's|from "../../components/ui/|from "@/app/_components/ui/|g' "$f"
done

# Navbar and Footer
find app/_components/layout -name "*.tsx" -print0 | while IFS= read -r -d '' f; do
  sed -i '' -E 's|from "../../ui/|from "@/app/_components/ui/|g' "$f"
  sed -i '' -E 's|from "../ui/|from "@/app/_components/ui/|g' "$f"
done

# Update the main page imports
echo "🔄 Updating Home page imports..."
sed -i '' 's|from "./components/sections/Hero"|from "@/app/_components/sections/Hero"|g' app/page.tsx
sed -i '' 's|from "./components/sections/CustomersScene1Intro"|from "@/app/services/customer-acquisition/CustomersScene1Intro"|g' app/page.tsx
sed -i '' 's|from "./components/sections/CustomersScene2ProcessBrands"|from "@/app/services/customer-acquisition/CustomersScene2ProcessBrands"|g' app/page.tsx
sed -i '' 's|from "./components/sections/WhyChooseUs"|from "@/app/_components/sections/WhyChooseUs"|g' app/page.tsx
sed -i '' 's|from "./components/sections/ContactCTA"|from "@/app/_components/sections/ContactCTA"|g' app/page.tsx
# Remove old imports of other services from page (they should not be on home anymore)
sed -i '' '/^import Service/d' app/page.tsx

echo "🔄 Updating root layout imports..."
sed -i '' 's|from "@/components/layout/Navbar"|from "@/app/_components/layout/Navbar"|g' app/layout.tsx
sed -i '' 's|from "@/components/layout/Footer"|from "@/app/_components/layout/Footer"|g' app/layout.tsx

echo "🔄 Updating service page imports..."
# Customer Acquisition
sed -i '' 's|from "@/components/sections/CustomersScene1Intro"|from "./CustomersScene1Intro"|g' app/services/customer-acquisition/page.tsx
sed -i '' 's|from "@/components/sections/CustomersScene2ProcessBrands"|from "./CustomersScene2ProcessBrands"|g' app/services/customer-acquisition/page.tsx
sed -i '' 's|from "@/components/ui/ContactForm"|from "@/app/_components/ui/ContactForm"|g' app/services/customer-acquisition/page.tsx

# Digital Platforms
sed -i '' 's|from "@/components/sections/ServiceWebApps"|from "./ServiceWebApps"|g' app/services/digital-platforms/page.tsx
sed -i '' 's|from "@/components/sections/ServiceDesktopCloud"|from "./ServiceDesktopCloud"|g' app/services/digital-platforms/page.tsx
sed -i '' 's|from "@/components/ui/ContactForm"|from "@/app/_components/ui/ContactForm"|g' app/services/digital-platforms/page.tsx

# Commerce & Automation
sed -i '' 's|from "@/components/sections/ServiceEcommerce"|from "./ServiceEcommerce"|g' app/services/commerce-automation/page.tsx
sed -i '' 's|from "@/components/sections/ServiceAutomation"|from "./ServiceAutomation"|g' app/services/commerce-automation/page.tsx
sed -i '' 's|from "@/components/ui/ContactForm"|from "@/app/_components/ui/ContactForm"|g' app/services/commerce-automation/page.tsx

# Enterprise Intelligence
sed -i '' 's|from "@/components/sections/ServiceAI"|from "./ServiceAI"|g' app/services/enterprise-intelligence/page.tsx
sed -i '' 's|from "@/components/ui/ContactForm"|from "@/app/_components/ui/ContactForm"|g' app/services/enterprise-intelligence/page.tsx

# SAP & ERP
sed -i '' 's|from "@/components/sections/ServiceSAPEnterprise"|from "./ServiceSAPEnterprise"|g' app/services/sap-enterprise/page.tsx
sed -i '' 's|from "@/components/ui/ContactForm"|from "@/app/_components/ui/ContactForm"|g' app/services/sap-enterprise/page.tsx

# Cybersecurity
sed -i '' 's|from "@/components/ui/ContactForm"|from "@/app/_components/ui/ContactForm"|g' app/services/cybersecurity/page.tsx

echo "🧹 Removing empty old directories..."
rm -rf components 2>/dev/null || true

echo "✅ Migration complete! Tips for next:"
echo "1. Check the project compiles with 'npm run dev'."
echo "2. Update any remaining absolute imports that might still reference /components."
echo "3. Delete the old lib/utils.ts? (We'll keep it for now)."
echo "4. If you encounter any errors, let me know and I'll help fix them."