const softwareTerms = [
    'linting',
    'code coverage',
    'dependency management',
    'package managers',
    'npm',
    'yarn',
    'pip',
    'rubygems',
    'build tools',
    'webpack',
    'babel',
    'grunt',
    'gulp',
    'containerization',
    'docker',
    'kubernetes',
    'orchestration',
    'configuration management',
    'ansible',
    'chef',
    'puppet',
    'monitoring',
    'logging',
    'metrics',
    'alerting',
    'observability',
    'log management',
    'elastic stack',
    'splunk',
    'new relic',
    'application performance monitoring',
    'apm',
    'version control',
    'git',
    'svn',
    'mercurial',
    'continuous integration',
    'jenkins',
    'travis ci',
    'circleci',
    'gitlab ci',
    'deployment',
    'docker',
    'kubernetes',
    'ansible',
    'terraform',
    'cloud platforms',
    'aws',
    'azure',
    'google cloud',
    'database management',
    'sql',
    'mysql',
    'postgresql',
    'mongodb',
    'nosql',
    'restful api',
    'soap',
    'graphql',
    'microservices',
    'serverless architecture',
    'agile methodologies',
    'scrum',
    'kanban',
    'lean',
    'devops',
    'continuous delivery',
    'continuous deployment',
    'site reliability engineering',
    'security',
    'encryption',
    'firewall',
    'penetration testing',
    'authentication',
    'authorization',
    'identity management',
    'cryptography',
    'blockchain',
    'smart contracts',
    'distributed ledger',
    'consensus algorithms',
    'hyperledger',
    'ethereum',
    'web development',
    'html',
    'css',
    'javascript',
    'react',
    'angular',
    'vue.js',
    'node.js',
    'express.js',
    'django',
    'flask',
    'frontend',
    'backend',
    'full stack',
    'responsive design',
    'progressive web apps',
    'mobile app development',
    'ios',
    'android',
    'react native',
    'flutter',
    'xamarin',
    'testing',
    'unit testing',
    'integration testing',
    'end-to-end testing',
    'automated testing',
    'selenium',
    'jest',
    'mocha',
    'chai',
    'testing frameworks',
    'agile testing',
    'continuous testing',
    'code quality',
    'code review',
    'static analysis',
    'code refactoring',
    'design patterns',
    'software architecture',
    'microservices architecture',
    'serverless architecture',
    'scalability',
    'reliability',
    'performance optimization',
    'code profiling',
    'debugging',
    'troubleshooting',
    'incident response',
    'root cause analysis',
    'patch management',
    'agile methodologies',
    'scrum',
    'kanban',
    'lean',
    'devops',
    'continuous delivery',
    'continuous deployment',
    'site reliability engineering',
    'security',
    'encryption',
    'firewall',
    'penetration testing',
    'authentication',
    'authorization',
    'identity management',
    'cryptography',
    'blockchain',
    'smart contracts',
    'distributed ledger',
    'consensus algorithms',
    'hyperledger',
    'ethereum',
    'web development',
    'html',
    'css',
    'javascript',
    'react',
    'angular',
    'vue.js',
    'node.js',
    'express.js',
    'django',
    'flask',
    'frontend',
    'backend',
    'full stack',
    'responsive design',
    'progressive web apps',
    'mobile app development',
    'ios',
    'android',
    'react native',
    'flutter',
    'xamarin',
    'testing',
    'unit testing',
    'integration testing',
    'end-to-end testing',
    'automated testing',
    'selenium',
    'jest',
    'mocha',
    'chai',
    'testing frameworks',
    'agile testing',
    'continuous testing',
    'code quality',
    'code review',
    'static analysis',
    'code refactoring',
    'design patterns',
    'software architecture',
    'microservices architecture',
    'serverless architecture',
    'scalability',
    'reliability',
    'performance optimization',
    'code profiling',
    'debugging',
    'troubleshooting',
    'incident response',
    'root cause analysis',
    'patch management',
    'deployment automation',
    'release management',
    'service level agreements',
    'uptime',
    'downtime',
    'change management',
    'versioning',
    'semver',
    'semantic versioning',
    'code branching',
    'feature branching',
    'git flow',
    'code collaboration',
    'pair programming',
    'code reviews',
    'pull requests',
    'merge conflict',
    'agile ceremonies',
    'stand-up meetings',
    'sprint planning',
    'retrospectives',
    'agile coaching',
    'technical debt',
    'code documentation',
    'api documentation',
    'swagger',
    'openapi',
    'restful api design',
    'graphql',
    'software testing',
    'manual testing',
    'automated testing',
    'regression testing',
    'load testing',
    'performance testing',
    'security testing',
    'usability testing',
    'user acceptance testing',
    'test-driven development',
    'behavior-driven development',
    'continuous integration',
    'continuous deployment',
    'continuous delivery',
    'continuous testing',
    'continuous monitoring',
    'infrastructure as code',
    'gitops',
    'chatops',
    'event-driven architecture',
    'event sourcing',
    'cqrs',
    'data consistency',
    'event stream',
    'message queue',
    'publish-subscribe',
    'design patterns',
    'singleton',
    'factory method',
    'abstract factory',
    'builder',
    'prototype',
    'adapter',
    'bridge',
    'composite',
    'decorator',
    'facade',
    'flyweight',
    'proxy',
    'command',
    'interpreter',
    'iterator',
    'mediator',
    'memento',
    'observer',
    'state',
    'strategy',
    'template method',
    'visitor',
    'mvc',
    'mvvm',
    'mvp',
    'database design',
    'normalization',
    'denormalization',
    'relational database',
    'nosql database',
    'data modeling',
    'entity-relationship diagram',
    'database schema',
    'indexing',
    'query optimization',
    'stored procedures',
    'triggers',
    'data migration',
    'data warehousing',
    'business intelligence',
    'etl',
    'data integration',
    'data analytics',
    'data visualization',
    'data science',
    'machine learning',
    'artificial intelligence',
    'natural language processing',
    'computer vision',
    'deep learning',
    'neural networks',
    'reinforcement learning',
    'supervised learning',
    'unsupervised learning',
    'ensemble learning',
    'classification',
    'regression',
    'clustering',
    'dimensionality reduction',
    'feature engineering',
    'model evaluation',
    'precision',
    'recall',
    'f1 score',
    'roc curve',
    'cross-validation',
    'bias-variance tradeoff',
    'overfitting',
    'underfitting',
    'hyperparameter tuning',
    'grid search',
    'random search',
    'optimization algorithms',
    'gradient descent',
    'stochastic gradient descent',
    'mini-batch gradient descent',
    'adam',
    'rmsprop',
    'cross-entropy loss',
    'mean squared error',
    'activation functions',
    'relu',
    'sigmoid',
    'tanh',
    'softmax',
    'dropout',
    'batch normalization',
    'transfer learning',
    'pre-trained models',
    'feature extraction',
    'fine-tuning',
    'recommender systems',
    'collaborative filtering',
    'content-based filtering',
    'hybrid recommender systems',
    'cold start problem',
    'matrix factorization',
    'latent factor',
    'precision at k',
    'recall at k',
    'map',
    'ndcg',
    'evaluation metrics',
    'a/b testing',
    'hypothesis testing',
    'statistical significance',
    'p-value',
    'confidence interval',
    'correlation',
    'regression analysis',
    't-test',
    'anova',
    'chi-square test',
    'feature selection',
    'feature importance',
    'model interpretation',
    'lime',
    'shap',
    'model deployment',
    'containerized deployment',
    'serverless deployment',
    'cloud deployment',
    'deployment pipelines',
    'continuous delivery',
    'continuous deployment',
    'blue-green deployment',
    'canary deployment',
    'rollback',
    'monitoring and observability',
    'metrics',
    'logs',
    'traces',
    'distributed tracing',
    'application performance monitoring',
    'log management',
    'log aggregation',
    'elk stack',
    'elastic search',
    'logstash',
    'kibana',
    'splunk',
    'new relic',
    'apm',
    'distributed systems',
    'microservices',
    'service-oriented architecture',
    'monolithic architecture',
    'event-driven architecture',
    'api gateway',
    'message queue',
    'service discovery',
    'load balancing',
    'caching',
    'database sharding',
    'fault tolerance',
    'resilience',
    'high availability',
    'redundancy',
    'disaster recovery',
    'chaos engineering',
    'security best practices',
    'owasp',
    'cve',
    'secure coding',
    'penetration testing',
    'vulnerability scanning',
    'firewall',
    'intrusion detection',
    'encryption',
    'ssl/tls',
    'oauth',
    'openid connect',
    'jwt',
    'identity and access management',
    'single sign-on',
    'multi-factor authentication',
    'zero trust security',
    'cryptography',
    'public key infrastructure',
    'blockchain',
    'smart contracts',
    'distributed ledger',
    'consensus algorithms',
    'hyperledger',
    'ethereum',
    'web development',
    'html',
    'css',
    'javascript',
    'react',
    'angular',
    'vue.js',
    'node.js',
    'express.js',
    'django',
    'flask',
    'frontend',
    'backend',
    'full stack',
    'responsive design',
    'progressive web apps',
    'mobile app development',
    'ios',
    'android',
    'react native',
    'flutter',
    'xamarin',
    'testing',
    'unit testing',
    'integration testing',
    'end-to-end testing',
    'automated testing',
    'selenium',
    'jest',
    'mocha',
    'chai',
    'testing frameworks',
    'agile testing',
    'continuous testing',
    'code quality',
    'code review',
    'static analysis',
    'code refactoring',
    'design patterns',
    'software architecture',
    'microservices architecture',
    'serverless architecture',
    'scalability',
    'reliability',
    'performance optimization',
    'code profiling',
    'debugging',
    'troubleshooting',
    'incident response',
    'root cause analysis',
    'patch management',
    'deployment automation',
    'release management',
    'service level agreements',
    'uptime',
    'downtime',
    'change management',
    'versioning',
    'semver',
    'semantic versioning',
    'code branching',
    'feature branching',
    'git flow',
    'code collaboration',
    'pair programming',
    'code reviews',
    'pull requests',
    'merge conflict',
    'agile ceremonies',
    'stand-up meetings',
    'sprint planning',
    'retrospectives',
    'agile coaching',
    'technical debt',
    'code documentation',
    'api documentation',
    'swagger',
    'openapi',
    'restful api design',
    'graphql',
    'software testing',
    'manual testing',
    'automated testing',
    'regression testing',
    'load testing',
    'performance testing',
    'security testing',
    'usability testing',
    'user acceptance testing',
    'test-driven development',
    'behavior-driven development',
    'continuous integration',
    'continuous deployment',
    'continuous delivery',
    'continuous testing',
    'continuous monitoring',
    'infrastructure as code',
    'gitops',
    'chatops',
    'event-driven architecture',
    'event sourcing',
    'cqrs',
    'data consistency',
    'event stream',
    'message queue',
    'publish-subscribe',
    'design patterns',
    'singleton',
    'factory method',
    'abstract factory',
    'builder',
    'prototype',
    'adapter',
    'bridge',
    'composite',
    'decorator',
    'facade',
    'flyweight',
    'proxy',
    'command',
    'interpreter',
    'iterator',
    'mediator',
    'memento',
    'observer',
    'state',
    'strategy',
    'template method',
    'visitor',
    'mvc',
    'mvvm',
    'mvp',
    'database design',
    'normalization',
    'denormalization',
    'relational database',
    'nosql database',
    'data modeling',
    'entity-relationship diagram',
    'database schema',
    'indexing',
    'query optimization',
    'stored procedures',
    'triggers',
    'data migration',
    'data warehousing',
    'business intelligence',
    'etl',
    'data integration',
    'data analytics',
    'data visualization'
];
module.exports = softwareTerms;