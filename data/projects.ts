export const projects = [
  {
    id: 'crdw-teradata',
    title: 'Credit Risk Data Warehouse — Teradata Exit',
    summary: 'Modernised the credit risk warehouse from Teradata to AWS with DBT on ECS and Step Functions.',
    description:
      'Modernised the credit risk warehouse from Teradata to AWS. DBT runs in Docker on ECS with Step Functions orchestrating S3 extract/load across accounts.',
    features: [
      'End-to-end delivery of multiple critical pipelines including Loans, Customer, Current Accounts, and Recovery datasets',
      'Reduced batch processing of a pipeline runtime by ~55% (45 mins → 20 mins), improving SLA compliance.',
      'Established a Golden Source data layer for risk models using DBT transformations',
      'Processed 100M+ rows per run with scalable, cloud-native architecture',
      'Implemented GitLab CI/CD enabling one-click deployments to S3 & EC2',
      'Built AWS Glue & Lambda components for business date logic, data cleansing, and static loads',
    ],
    tags: ['AWS', 'dbt', 'ECS', 'Step Functions', 'S3', 'Glue', 'Lambda', 'GitLab CI/CD'],
  },
  {
    id: 'ai-abinitio-migration',
    title: 'Ab Initio to SQL & PySpark — AI Migration (Using AWS Bedrock)',
    summary: 'Migration tool that converts Ab Initio graphs to SQL and PySpark using AWS Bedrock.',
    description:
      'Built a migration tool that takes Ab Initio graphs as input and produces equivalent ETL in SQL and PySpark, using AWS Bedrock to map graph semantics to code patterns and accelerate legacy modernisation.',
    features: [
      'High accuracy on Ab Initio graphs with validated SQL/PySpark output',
      'Semantic mapping of graph logic to SQL and PySpark pipelines',
      'Speeds up migration while maintaining quality and consistency',
      'Reduces manual rewriting effort and errors across the pipeline',
    ],
    tags: ['AI/ML', 'AWS Bedrock', 'Python', 'SQL', 'PySpark', 'ETL', 'Ab Initio'],
  },
];
