/**
 * Schémas de validation Zod pour les compétences
 * À installer : npm install zod
 */

// Note: Si Zod n'est pas installé, voici une validation TypeScript alternative

export interface Skill {
  name: string;
  level: number; // 0-100
  description: string;
  projects: string[];
  proofUrl?: string;
}

export interface SkillCategory {
  category: string;
  items: Skill[];
}

// Fonction de validation TypeScript (sans Zod)
export function validateSkill(skill: any): skill is Skill {
  return (
    typeof skill.name === 'string' &&
    typeof skill.level === 'number' &&
    skill.level >= 0 &&
    skill.level <= 100 &&
    typeof skill.description === 'string' &&
    Array.isArray(skill.projects) &&
    skill.projects.every((p: any) => typeof p === 'string') &&
    (skill.proofUrl === undefined || typeof skill.proofUrl === 'string')
  );
}

export function validateSkillCategory(category: any): category is SkillCategory {
  return (
    typeof category.category === 'string' &&
    Array.isArray(category.items) &&
    category.items.every((item: any) => validateSkill(item))
  );
}