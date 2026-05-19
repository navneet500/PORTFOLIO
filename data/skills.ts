import type { IconType } from 'react-icons';
import {
  SiPython,
  SiCplusplus,
  SiPostgresql,
  SiGnubash,
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiFlask,
  SiDjango,
  SiStreamlit,
  SiDbt,
  SiApacheairflow,
  SiDatabricks,
  SiSnowflake,
  SiApachehadoop,
  SiTeradata,
  SiGitlab,
  SiBitbucket,
  SiJenkins,
  SiDocker,
  SiGithub,
  SiFastapi,
  SiClaude,
  SiDeepmind,
  SiGithubcopilot,
} from 'react-icons/si';
import {
  FaDatabase,
  FaServer,
  FaChartBar,
  FaCloudUploadAlt,
  FaTerminal,
  FaShieldAlt,
} from 'react-icons/fa';

export type SkillItem = {
  name: string;
  icon?: IconType;
  iconPath?: string;
};

/** Brand colors for skill icons (dark-mode friendly). */
export const skillIconColors: Record<string, string> = {
  Python: '#3776ab',
  'C++': '#00599c',
  SQL: '#336791',
  'Shell Scripting': '#89e051',
  HTML: '#e34c26',
  CSS: '#1572b6',
  JavaScript: '#f7df1e',
  React: '#61dafb',
  Flask: '#000000',
  Django: '#092e20',
  Streamlit: '#ff4b4b',
  FastAPI: '#009688',
  dbt: '#ff6949',
  Airflow: '#017cee',
  TWS: '#60a5fa',
  Databricks: '#ff3621',
  Snowflake: '#29b5e8',
  Hadoop: '#ffcc00',
  Teradata: '#f37440',
  Iceberg: '#60a5fa',
  GitLab: '#fc6d26',
  Bitbucket: '#0052cc',
  Jenkins: '#d24939',
  Docker: '#2496ed',
  GitHub: '#4078c0',
  'Data Modeling': '#60a5fa',
  'Data Governance': '#60a5fa',
  'Cloud Migration': '#60a5fa',
  'Analytics & Reporting': '#60a5fa',
  Cursor: '#FFFFFF',
  Claude: '#D97757',
  'GitLab Duo': '#fc6d26',
  Antigravity: '#4285F4',
  'AI Development': '#60a5fa',
};

export type SkillGroup = {
  label: string;
  items: SkillItem[];
};

export const skillGroups: SkillGroup[] = [
  {
    label: 'Languages and Frameworks',
    items: [
      { name: 'Python', icon: SiPython },
      { name: 'C++', icon: SiCplusplus },
      { name: 'SQL', icon: SiPostgresql },
      { name: 'Shell Scripting', icon: SiGnubash },
      { name: 'HTML', icon: SiHtml5 },
      { name: 'CSS', icon: SiCss },
      { name: 'JavaScript', icon: SiJavascript },
      { name: 'React', icon: SiReact },
      { name: 'Flask', icon: SiFlask },
      { name: 'Django', icon: SiDjango },
      { name: 'Streamlit', icon: SiStreamlit },
      { name: 'FastAPI', icon: SiFastapi },
    ],
  },
  {
    label: 'AI & Developer Productivity',
    items: [
      { name: 'Cursor', iconPath: '/ai-icons/cursor.svg' },
      { name: 'Claude', icon: SiClaude },
      { name: 'GitLab Duo', icon: SiGitlab },
      { name: 'Antigravity', icon: SiDeepmind },
      { name: 'Prompt Engineering', icon: FaTerminal },
      { name: 'AI Development', icon: SiGithubcopilot },
    ],
  },
  {
    label: 'AWS Services',
    items: [
      { name: 'AWS Bedrock', iconPath: '/aws-icons/Amazon-Bedrock.svg' },
      { name: 'SageMaker', iconPath: '/aws-icons/Amazon-SageMaker.svg' },
      { name: 'S3', iconPath: '/aws-icons/Amazon-S3.svg' },
      { name: 'EC2', iconPath: '/aws-icons/Amazon-EC2.svg' },
      { name: 'ECS', iconPath: '/aws-icons/Amazon-ECS.svg' },
      { name: 'Redshift', iconPath: '/aws-icons/Amazon-Redshift.svg' },
      { name: 'Step Functions', iconPath: '/aws-icons/AWS-Step-Functions.svg' },
      { name: 'Athena', iconPath: '/aws-icons/Amazon-Athena.svg' },
      { name: 'Glue', iconPath: '/aws-icons/Amazon-Glue.svg' },
      { name: 'Amazon RDS', iconPath: '/aws-icons/Amazon-RDS.svg' },
      { name: 'Lambda', iconPath: '/aws-icons/AWS-Lambda.svg' },
      { name: 'VPC', iconPath: '/aws-icons/Amazon-VPC.svg' },
      { name: 'CloudFront', iconPath: '/aws-icons/Amazon-CloudFront.svg' },
      { name: 'DynamoDB', iconPath: '/aws-icons/Amazon-DynamoDB.svg' },
      { name: 'IAM', iconPath: '/aws-icons/IAM.svg' },
    ],
  },
  {
    label: 'Data Engineering',
    items: [
      { name: 'dbt', icon: SiDbt },
      { name: 'Airflow', icon: SiApacheairflow },
      { name: 'TWS', icon: FaServer },
      { name: 'Databricks', icon: SiDatabricks },
      { name: 'Snowflake', icon: SiSnowflake },
      { name: 'Hadoop', icon: SiApachehadoop },
      { name: 'Teradata', icon: SiTeradata },
      { name: 'Iceberg', icon: FaDatabase },
    ],
  },
  {
    label: 'DevOps and CI/CD',
    items: [
      { name: 'GitLab', icon: SiGitlab },
      { name: 'Bitbucket', icon: SiBitbucket },
      { name: 'Jenkins', icon: SiJenkins },
      { name: 'Docker', icon: SiDocker },
      { name: 'GitHub', icon: SiGithub },
    ],
  },
  {
    label: 'Domain',
    items: [
      { name: 'Cloud Migration', icon: FaCloudUploadAlt },
      { name: 'Data Modeling', icon: FaDatabase },
      { name: 'Analytics & Reporting', icon: FaChartBar },
      { name: 'Data Governance', icon: FaShieldAlt },
    ],
  },
];
