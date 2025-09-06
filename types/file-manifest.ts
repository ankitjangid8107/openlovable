export interface FileInfo {
  imports?: ImportInfo[];
  exports?: string[];
  componentInfo?: ComponentInfo;
  type?: FileType;
}

export interface ImportInfo {
  source: string;
  imports: string[];
  defaultImport?: string;
  isLocal: boolean;
}

export interface ComponentInfo {
  name?: string;
  isComponent: boolean;
  props?: string[];
  hooks?: string[];
  exports?: string[];
}

export enum FileType {
  COMPONENT = 'component',
  PAGE = 'page',
  UTILITY = 'utility',
  STYLE = 'style',
  CONFIG = 'config',
  UNKNOWN = 'unknown'
}

export interface FileManifest {
  files: FileInfo[];
  components: ComponentInfo[];
  dependencies: string[];
  structure: ProjectStructure;
}

export interface ProjectStructure {
  pages: string[];
  components: string[];
  utilities: string[];
  styles: string[];
}

export enum EditType {
  UPDATE_COMPONENT = 'update_component',
  ADD_FEATURE = 'add_feature',
  FIX_ISSUE = 'fix_issue',
  STYLE_CHANGE = 'style_change',
  REFACTOR = 'refactor',
  UNKNOWN = 'unknown'
}

export interface EditIntent {
  type: EditType;
  targetFiles: string[];
  confidence: number;
  description: string;
  patterns: string[];
}

export interface IntentPattern {
  patterns: RegExp[];
  type: EditType;
  fileResolver: (prompt: string, manifest: FileManifest) => string[];
}
