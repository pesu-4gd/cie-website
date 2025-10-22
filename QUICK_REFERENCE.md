# 🎯 CIE Website Restructure - Quick Reference Card

## 📋 TL;DR - The Problem & Solution

### Current Problem
```
- Hard to find code (5-10 min searching)
- Hard to add features (4-8 hours)
- Code duplication everywhere
- Weak TypeScript coverage
- Confusing for new developers
```

### Solution
```
✅ Feature-based architecture
✅ Clear separation of concerns
✅ Strong TypeScript throughout
✅ Reusable patterns
✅ Easy to scale
```

---

## 🗂️ New Folder Structure (Quick View)

```
src/
├── app/                    # Routes only
├── features/               # Self-contained features
│   ├── programs/
│   ├── events/
│   ├── jobs/
│   ├── alumni/
│   └── auth/
├── shared/                 # Shared code
│   ├── components/
│   ├── hooks/
│   └── utils/
└── config/                 # Configuration
```

---

## 📦 Feature Module Template

```
features/[feature-name]/
├── components/         # UI components
├── hooks/             # Custom hooks
├── services/          # API calls
├── types/             # TypeScript types
├── utils/             # Helpers
├── data/              # Static data
└── index.ts           # Public exports
```

---

## 🔑 Key Patterns

### 1. Service Pattern
```typescript
// features/programs/services/programsService.ts
export const programsService = {
  async getAll() { },
  async getById(id) { },
  async create(data) { }
}
```

### 2. Hook Pattern
```typescript
// features/programs/hooks/usePrograms.ts
export function usePrograms(filters?) {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  // ... fetch logic
  return { data, loading, error }
}
```

### 3. Component Pattern
```typescript
// features/programs/components/ProgramCard/ProgramCard.tsx
export interface ProgramCardProps { ... }

export function ProgramCard({ program }: ProgramCardProps) {
  return <Card>...</Card>
}
```

### 4. Export Pattern
```typescript
// features/programs/index.ts
export { ProgramCard } from './components/ProgramCard'
export { usePrograms } from './hooks/usePrograms'
export { programsService } from './services/programsService'
export type { Program } from './types/program.types'
```

---

## 💡 Usage Examples

### Import Pattern
```typescript
// OLD (messy)
import { Card } from '../../../components/ui/card'
import data from '../../../data/programs.json'

// NEW (clean)
import { Card } from '@/shared/components/ui'
import { usePrograms } from '@/features/programs'
```

### Page Pattern
```typescript
'use client'

import { ProgramCard, usePrograms } from '@/features/programs'

export default function ProgramsPage() {
  const { programs, loading } = usePrograms()
  
  if (loading) return <Loading />
  
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {programs.map(p => <ProgramCard key={p.id} program={p} />)}
    </div>
  )
}
```

---

## 🚀 Adding New Feature (5 Steps)

```bash
# 1. Create structure
mkdir -p src/features/new-feature/{components,hooks,services,types}

# 2. Add types (types/index.ts)
export interface NewThing { ... }

# 3. Add service (services/newService.ts)
export const newService = { async getAll() { } }

# 4. Add hook (hooks/useNew.ts)
export function useNew() { }

# 5. Add component (components/NewCard/NewCard.tsx)
export function NewCard() { }

# 6. Export (index.ts)
export { NewCard, useNew, newService }

# 7. Use in page
import { NewCard, useNew } from '@/features/new-feature'
```

---

## 📊 Before vs After

| Task | Before | After |
|------|--------|-------|
| Find code | 5-10 min | 10 sec |
| Add feature | 4-8 hrs | 30-60 min |
| Onboard dev | 1-2 weeks | 1-2 days |
| Type coverage | 60% | 95% |
| Code reuse | Low | High |

---

## 🗺️ Migration Roadmap

### Week 1: Setup
- [ ] Create `src/` structure
- [ ] Move `app/` to `src/app/`
- [ ] Update configs

### Week 2: Shared Components
- [ ] Move UI components
- [ ] Move layout components
- [ ] Add TypeScript types

### Week 3: First Feature
- [ ] Migrate Programs feature
- [ ] Test thoroughly

### Week 4-5: Remaining Features
- [ ] Events
- [ ] Jobs
- [ ] Alumni
- [ ] Auth

### Week 6: Cleanup
- [ ] Remove old code
- [ ] Update docs
- [ ] Final testing

---

## ✅ Checklist for Each Feature

Creating new feature? Check these:

```
features/my-feature/
├── [ ] components/        (UI components)
├── [ ] hooks/            (Custom hooks)
├── [ ] services/         (API calls)
├── [ ] types/            (TypeScript interfaces)
├── [ ] utils/            (Helper functions)
├── [ ] data/             (Static data)
└── [ ] index.ts          (Public exports)
```

---

## 🎯 Quick Wins

### Win 1: Find Code Fast
```
Question: "Where's event registration?"
Answer: features/events/hooks/useEventRegistration.ts
Time: 10 seconds ✅
```

### Win 2: Add Feature Fast
```
Task: Add resource library
Steps: 7 files in features/resources/
Time: 30-60 minutes ✅
```

### Win 3: Zero Duplication
```
Before: 5 places with similar logic
After: 1 hook, reused everywhere ✅
```

---

## 🔧 TypeScript Config

```json
// tsconfig.json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"],
      "@/features/*": ["./src/features/*"],
      "@/shared/*": ["./src/shared/*"]
    }
  }
}
```

---

## 📚 File Naming Conventions

### Components
```
PascalCase + folder
components/ProgramCard/ProgramCard.tsx
```

### Hooks
```
camelCase + use prefix
hooks/usePrograms.ts
```

### Services
```
camelCase + Service suffix
services/programsService.ts
```

### Types
```
PascalCase + .types suffix
types/program.types.ts
```

### Utils
```
camelCase
utils/formatDate.ts
```

---

## 🎨 Import Order Convention

```typescript
// 1. React/Next
import { useState } from 'react'
import Image from 'next/image'

// 2. Features
import { usePrograms } from '@/features/programs'

// 3. Shared
import { Button } from '@/shared/components/ui'

// 4. Utils
import { cn } from '@/shared/utils'

// 5. Types
import type { Program } from '@/features/programs'

// 6. Styles (if any)
import styles from './styles.module.css'
```

---

## 🧪 Testing Pattern

```typescript
// features/programs/hooks/usePrograms.test.ts
import { renderHook } from '@testing-library/react'
import { usePrograms } from './usePrograms'
import { programsService } from '../services/programsService'

// Mock the service
jest.mock('../services/programsService')

describe('usePrograms', () => {
  it('fetches programs', async () => {
    // Test implementation
  })
})
```

---

## 🚦 When to Create a New Feature

Create feature when:
- ✅ It has its own data model
- ✅ It has unique UI components
- ✅ It has specific business logic
- ✅ It's used across multiple pages

Don't create feature when:
- ❌ It's just a shared UI component → put in `shared/components`
- ❌ It's just a utility → put in `shared/utils`
- ❌ It's page-specific → keep in page component

---

## 📞 Quick Help

### "Where do I put X?"

| What | Where |
|------|-------|
| Program logic | `features/programs/` |
| Event logic | `features/events/` |
| Shared button | `shared/components/ui/` |
| Header/Footer | `shared/components/layout/` |
| Date formatter | `shared/utils/` |
| API client | `shared/services/api/` |
| Route | `app/` |

### "How do I X?"

| Task | Command |
|------|---------|
| Create feature | Copy template from docs |
| Add component | Create in feature/components/ |
| Add hook | Create in feature/hooks/ |
| Add API call | Add to feature/services/ |
| Add type | Add to feature/types/ |

---

## 🎓 Learning Resources

### Must Read
1. RESTRUCTURE_PROPOSAL.md - Full details
2. RESTRUCTURE_SUMMARY.md - Executive summary
3. RESTRUCTURE_VISUAL_GUIDE.md - Visual examples

### Reference
- Next.js App Router docs
- TypeScript handbook
- React hooks guide

---

## 💪 Best Practices

### DO ✅
- Keep features self-contained
- Use TypeScript everywhere
- Export through index.ts
- Write tests for hooks/services
- Use consistent naming
- Document complex logic

### DON'T ❌
- Mix features together
- Skip TypeScript types
- Export from deep paths
- Skip error handling
- Use magic numbers
- Leave TODO comments

---

## 🎯 Success Metrics

After restructure, you should:
- [ ] Find any code in < 30 seconds
- [ ] Add feature in < 1 hour
- [ ] Onboard developer in < 1 day
- [ ] Have 95%+ type coverage
- [ ] Zero code duplication
- [ ] Clear dependency graph

---

## 🆘 Troubleshooting

### Import not found?
```bash
# Check tsconfig.json paths
# Restart TypeScript server
# Check index.ts exports
```

### Feature too large?
```bash
# Split into sub-features
# Extract shared logic to shared/
# Consider domain boundaries
```

### Circular dependency?
```bash
# Check import chain
# Extract to shared/
# Use dependency injection
```

---

## 📋 Daily Workflow

### Adding a Component
```bash
1. Identify feature (programs/events/etc)
2. Create in features/[feature]/components/
3. Export from features/[feature]/index.ts
4. Import in page: import { X } from '@/features/[feature]'
```

### Adding Business Logic
```bash
1. Add to features/[feature]/services/
2. Call from hook in features/[feature]/hooks/
3. Use hook in component
```

### Adding a Type
```bash
1. Add to features/[feature]/types/
2. Export from features/[feature]/index.ts
3. Import: import type { X } from '@/features/[feature]'
```

---

## 🎉 Benefits Recap

- ⚡ **10x faster** to find code
- 🚀 **5x faster** to add features
- 🛡️ **Type-safe** throughout
- 🎯 **Zero duplication**
- 📚 **Easy to learn**
- 🔧 **Easy to maintain**
- 📈 **Scales beautifully**
- 🧪 **Easy to test**

---

## 🚀 Get Started

```bash
# 1. Read the docs
cat RESTRUCTURE_PROPOSAL.md

# 2. Create structure
mkdir -p src/{app,features,shared,config}

# 3. Start migration
# Begin with shared components

# 4. Migrate one feature
# Start with programs

# 5. Repeat for other features
```

---

**Questions? Check the full docs or ask the team!**

📖 **Full Documentation:**
- RESTRUCTURE_PROPOSAL.md
- RESTRUCTURE_SUMMARY.md  
- RESTRUCTURE_VISUAL_GUIDE.md

🎯 **This Reference Card**
- Keep handy while coding
- Share with team members
- Update as patterns evolve
