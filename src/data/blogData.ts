export interface BlogArticleSection {
  heading: string;
  paragraphs: string[];
  keyPoints?: string[];
}

export interface BlogArticleFAQ {
  question: string;
  answer: string;
}

export interface BlogArticle {
  id: string;
  slug: string;
  title: string;
  category: string;
  topic: string;
  description: string;
  contentSnippet?: string;
  date: string;
  readingTime: string;
  image: string;
  featured?: boolean;
  author: string;
  authorRole: string;
  clinicalTip?: string;
  sections: BlogArticleSection[];
  faqs?: BlogArticleFAQ[];
}

export const BLOG_TOPICS = [
  'All',
  'Physiotherapy',
  'Pain Management',
  'Sports Rehabilitation',
  'Posture',
  'Mobility',
  'Injury Prevention',
] as const;

export type BlogTopic = typeof BLOG_TOPICS[number];

export const FEATURED_ARTICLE: BlogArticle = {
  id: 'feat-1',
  slug: 'understanding-back-pain-modern-physiotherapy',
  title: 'Understanding Back Pain & Modern Physiotherapy Approaches',
  category: 'Spine Care',
  topic: 'Pain Management',
  description:
    'Discover how targeted movement therapy treats lower back distress at its mechanical root rather than temporarily masking symptoms.',
  contentSnippet:
    'Lower back discomfort is among the most frequent reasons people seek physical therapy. Understanding spinal kinematics, core stabilization, and gradual loading helps restore functional mobility and lasting confidence.',
  date: 'September 2026',
  readingTime: '4 min read',
  image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80',
  featured: true,
  author: 'Dr. K. Bhavendra PT',
  authorRole: 'Lead Physiotherapist • MPT (Sports Medicine)',
  clinicalTip:
    'The spine thrives on graded motion rather than absolute bed rest. Avoiding all movement creates protective muscle guarding that stiffens tissues and increases pain sensitivity over time.',
  sections: [
    {
      heading: '1. The Biomechanical Roots of Lower Back Pain',
      paragraphs: [
        'Low back pain is rarely caused by an isolated disc or bone issue in isolation. In the vast majority of clinical presentations, it stems from a combination of mechanical overload, facet joint stiffness, poor neuromuscular coordination of the deep trunk stabilizers, and prolonged static posture.',
        'When the deep core stabilizers (the transversus abdominis, multifidus, and pelvic floor) fail to fire synchronously, the superficial spinal extensors are forced to overwork, resulting in acute muscular spasms and intense localized tightness.'
      ],
      keyPoints: [
        'Prolonged seated postures generate up to 40% higher intradiscal pressure than upright standing.',
        'Micro-instability in lumbar segments often manifests as protective muscular guarding.',
        'Addressing movement mechanics relieves strain on the lumbar ligaments and discs.'
      ]
    },
    {
      heading: '2. Why Prolonged Bed Rest Delays Recovery',
      paragraphs: [
        'Historical guidance often advised days of strict bed rest for back discomfort. Modern evidence-based musculoskeletal research has conclusively demonstrated that prolonged immobility leads to rapid deconditioning, decreased spinal fluid exchange, and heightened nervous system sensitivity.',
        'Active recovery, structured in progressive phases under the supervision of a licensed physiotherapist, restores blood circulation to strained lumbar tissues and helps the nervous system recognize that normal movement is safe.'
      ]
    },
    {
      heading: '3. The 3-Phase Clinical Rehabilitation Pathway',
      paragraphs: [
        'At Global Physiotherapy Anantapur, our clinical protocol for spinal care follows an objective pathway designed for lasting durability:',
        'Phase 1 focuses on symptomatic relief and decompression using gentle manual therapy, electro-thermal modalities, and direction-specific lumbar positioning. Phase 2 introduces segmental motor control exercises to reactivate dormant stabilizing muscles. Phase 3 advances into progressive resistance, hip hinge biomechanics, and functional lifting drills.'
      ],
      keyPoints: [
        'Targeted spinal decompression relieves compression on irritated nerve roots.',
        'Motor control training teaches the body to brace unconsciously during everyday activities.',
        'Progressive hip and gluteal strengthening offloads repetitive lumbar flexion strain.'
      ]
    },
    {
      heading: '4. Everyday Spine Preservation Strategies',
      paragraphs: [
        'Maintaining spinal health requires consistent daily micro-habits rather than occasional intensive workouts. Integrate dynamic micro-breaks every 45 minutes of desk work, optimize your chair ergonomics to maintain lumbar lordosis, and engage in daily walking to promote disc hydration and metabolic exchange.'
      ]
    }
  ],
  faqs: [
    {
      question: 'Is an MRI or X-ray necessary before starting physiotherapy?',
      answer:
        'In the absence of red-flag symptoms (such as progressive leg weakness or bowel/bladder changes), clinical practice guidelines recommend beginning conservative physiotherapy immediately without routine imaging, as mechanical assessments pinpoint functional dysfunctions accurately.'
    },
    {
      question: 'How long does a course of spine physiotherapy typically take?',
      answer:
        'Most acute mechanical back pain episodes experience significant relief within 2 to 4 weeks of tailored care. Rebuilding long-term core stability and tissue resilience to prevent recurrence generally involves a 6-to-8 week progressive plan.'
    }
  ]
};

export const BLOG_ARTICLES: BlogArticle[] = [
  {
    id: 'art-1',
    slug: 'understanding-common-causes-back-pain',
    title: 'Understanding Common Causes of Back Pain',
    category: 'Spine Health',
    topic: 'Pain Management',
    description:
      'A practical breakdown of postural strain, disc mechanics, and how guided physical rehabilitation addresses root spinal imbalances.',
    date: 'Sep 2026',
    readingTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80',
    author: 'Dr. K. Bhavendra PT',
    authorRole: 'Lead Physiotherapist • MPT (Sports Medicine)',
    clinicalTip:
      'Change your seated posture every 35 to 45 minutes. Periodic 60-second micro-breaks restore intradiscal hydration much more effectively than long weekend recovery sessions.',
    sections: [
      {
        heading: '1. Identifying the Root Contributors to Back Discomfort',
        paragraphs: [
          'Back pain is one of the most widespread musculoskeletal conditions worldwide. While symptoms frequently feel localized to the lower back, the true mechanical catalyst often originates elsewhere in the kinetic chain—such as restricted thoracic spine mobility or underactive gluteal muscles.',
          'Common contributors include sustained postural loading (slouching at a desk), disc micro-strain from repetitive bending and lifting with rounded lumbar mechanics, and sacroiliac joint asymmetry.'
        ],
        keyPoints: [
          'Postural fatigue leads to ligamentous creep and passive tissue strain.',
          'Underactive gluteal muscles force lumbar extensor muscles to overcompensate.',
          'Thoracic stiffness transfers compensatory rotational stress to the lower lumbar spine.'
        ]
      },
      {
        heading: '2. The Role of Disc Mechanics & Axial Decompression',
        paragraphs: [
          'Intervertebral discs act as hydraulic shock absorbers between spinal vertebrae. Unlike muscles, discs have limited direct blood supply and rely on alternating compression and decompression cycles for nutrient exchange.',
          'Targeted clinical traction, gentle extension directional preferences (McKenzie approach), and pelvic stabilization techniques help alleviate pressure on sensitive nerve roots and promote natural healing.'
        ]
      },
      {
        heading: '3. Clinical Physical Therapy Solutions',
        paragraphs: [
          'Rather than relying solely on temporary pain-relief medications, physiotherapy aims to identify and fix biomechanical flaws. Through hands-on manual therapy, spinal mobilization, core endurance conditioning, and functional movement retraining, patients regain pain-free spinal function and durability.'
        ]
      }
    ],
    faqs: [
      {
        question: 'What is the difference between a muscle spasm and nerve compression?',
        answer:
          'A muscle spasm is localized, achy, and worsens with movement or direct palpation. Nerve compression (like sciatica) typically causes sharp, shooting, or electric pain traveling down the buttocks, thigh, or calf, occasionally accompanied by pins and needles.'
      },
      {
        question: 'Should I apply ice or heat for back pain?',
        answer:
          'For acute flare-ups occurring within the first 48-72 hours, cold therapy helps minimize acute inflammation. For chronic tightness or muscle guarding lasting weeks, warm therapy improves local blood circulation and eases muscular stiffness.'
      }
    ]
  },
  {
    id: 'art-2',
    slug: 'when-should-you-consider-physiotherapy',
    title: 'When Should You Consider Physiotherapy?',
    category: 'Clinical Guidance',
    topic: 'Physiotherapy',
    description:
      'Key signs that indicate persistent joint stiffness, recurring aches, or movement limitations will benefit from clinical assessment.',
    date: 'Aug 2026',
    readingTime: '3 min read',
    image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80',
    author: 'Dr. K. Bhavendra PT',
    authorRole: 'Lead Physiotherapist • MPT (Sports Medicine)',
    clinicalTip:
      'Waiting until pain is unbearable often turns a straightforward 2-week biomechanical reset into a 2-month tissue rehabilitation program. Early intervention prevents compensatory movement patterns from solidifying.',
    sections: [
      {
        heading: '1. Beyond Acute Injuries: Recognizing Early Warning Signals',
        paragraphs: [
          'Many people believe physiotherapy is exclusively intended for post-surgical patients or high-performance athletes with sports trauma. In reality, physical therapy is one of the most effective non-surgical disciplines for everyday movement limitations, postural imbalances, and recurring musculoskeletal aches.',
          'If you find yourself constantly altering how you sit, walk, or reach for overhead objects due to discomfort, your body is using compensation strategies that place abnormal stress on secondary joints.'
        ],
        keyPoints: [
          'Morning joint stiffness lasting longer than 20-30 minutes.',
          'Aches that recur repeatedly in the same anatomical area every few weeks.',
          'Noticeable reduction in joint mobility or difficulty climbing stairs smoothly.'
        ]
      },
      {
        heading: '2. Five Key Scenarios Calling for Clinical Assessment',
        paragraphs: [
          'You should consider scheduling an evaluation with a physiotherapist if: (1) pain lingers beyond 7 to 10 days without clear improvement; (2) you experience recurrent tension headaches originating from neck stiffness; (3) you are planning to return to sports after a prolonged hiatus; (4) you have post-injury joint swelling; or (5) you want an objective ergonomic and posture audit.'
        ]
      },
      {
        heading: '3. What Happens During an Initial Evaluation?',
        paragraphs: [
          'An initial consultation involves a thorough physical assessment. Your physiotherapist evaluates joint active and passive range of motion, muscle strength, postural balance, gait kinetics, and neural tension to determine the root mechanical cause of your distress and design a customized care plan.'
        ]
      }
    ],
    faqs: [
      {
        question: 'Do I need a physician referral before visiting Global Physiotherapy?',
        answer:
          'In modern physical therapy practice, direct access allows patients to consult directly with licensed physiotherapists without waiting for a referral. If your condition requires cross-specialty medical or radiological review, Dr. Bhavendra will advise you promptly.'
      },
      {
        question: 'Will physiotherapy treatment be painful?',
        answer:
          'Therapeutic interventions are conducted within your personal comfort threshold. While certain deep tissue mobilizations or tight muscle stretches may produce mild therapeutic discomfort, our focus is always gentle, restorative, and progressive.'
      }
    ]
  },
  {
    id: 'art-3',
    slug: 'simple-ways-to-improve-daily-posture',
    title: 'Simple Ways to Improve Daily Posture',
    category: 'Ergonomics',
    topic: 'Posture',
    description:
      'Actionable micro-adjustments for desk workers to minimize cervical strain, shoulder fatigue, and lumbar compression throughout the day.',
    date: 'Aug 2026',
    readingTime: '3 min read',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80',
    author: 'Dr. K. Bhavendra PT',
    authorRole: 'Lead Physiotherapist • MPT (Sports Medicine)',
    clinicalTip:
      'Your best posture is your next posture. Human anatomy is designed for continuous dynamic variability rather than remaining frozen in one rigid, unnatural military stance for 8 hours.',
    sections: [
      {
        heading: '1. The Real Definition of Healthy Posture',
        paragraphs: [
          'Contrary to popular belief, good posture does not mean sitting stiffly at attention with your shoulders pulled rigidly back. Functional posture is simply the biomechanical alignment that places the least amount of passive strain on your supporting muscles and ligaments.',
          'When we slouch over laptops or smartphones for hours, the cervical spine tilts forward. For every inch your head moves forward, the apparent load on your neck muscles increases by roughly 4.5 kilograms.'
        ],
        keyPoints: [
          'Forward head posture dramatically increases tension on the upper trapezius and levator scapulae.',
          'Rounded shoulders shorten pectoral tissues and inhibit the mid-back stabilizing musculature.',
          'Pelvic tilting alters lumbar curvature and increases anterior disc compression.'
        ]
      },
      {
        heading: '2. Essential Workspace Ergonomic Adjustments',
        paragraphs: [
          'Ensure your monitor display is positioned directly at eye level so your cervical spine remains neutral. Keep your elbows supported at a comfortable 90-to-100 degree angle, position both feet flat on the floor, and use a small lumbar support roll behind your lower spine to encourage natural lordosis.'
        ]
      },
      {
        heading: '3. The 2-Minute Hourly Micro-Reset Routine',
        paragraphs: [
          'Perform these three simple resets every 60 minutes: (1) Chin Tucks: Gently glide your head backwards without tilting your chin, holding for 3 seconds; (2) Scapular Retractions: Squeeze your shoulder blades down and back gently; (3) Seated Thoracic Extensions: Place your hands behind your head and gently arch your upper back over your chair rest.'
        ]
      }
    ],
    faqs: [
      {
        question: 'Do posture corrector braces work long-term?',
        answer:
          'Posture braces can provide temporary proprioceptive reminders, but relying on them long-term actually weakens your postural muscles, as your body becomes dependent on external support rather than building active muscular endurance.'
      },
      {
        question: 'How can I prevent neck stiffness while using my smartphone?',
        answer:
          'Elevate your smartphone towards eye level with your elbows resting against your torso rather than bending your neck downwards towards your lap.'
      }
    ]
  },
  {
    id: 'art-4',
    slug: 'understanding-knee-rehabilitation',
    title: 'Understanding Knee Rehabilitation',
    category: 'Joint Health',
    topic: 'Mobility',
    description:
      'How muscular balance, patellofemoral tracking, and progressive joint offloading restore confidence and stability in the knee joint.',
    date: 'Jul 2026',
    readingTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
    author: 'Dr. K. Bhavendra PT',
    authorRole: 'Lead Physiotherapist • MPT (Sports Medicine)',
    clinicalTip:
      'A painful knee is frequently an innocent victim caught between a stiff ankle joint below and a weak hip complex above. We always evaluate the full lower extremity kinetic chain.',
    sections: [
      {
        heading: '1. The Biomechanics of the Knee Joint',
        paragraphs: [
          'The knee is a modified hinge joint that functions as a bridge between the hip and the foot. Because it possesses limited inherent rotational freedom, it is vulnerable to torsional stress whenever there are imbalances in ankle dorsiflexion or hip abductor strength.',
          'Common knee complaints—such as patellofemoral pain syndrome, runner’s knee, meniscal irritation, and ligamentous strain—frequently trace back to improper tracking of the patella in the femoral groove.'
        ],
        keyPoints: [
          'Weakness in the gluteus medius causes the femur to collapse inward (dynamic knee valgus).',
          'Tight calf muscles or restricted ankle mobility force excessive pronation and knee torsion.',
          'Quadriceps-to-hamstring strength balance is vital for joint stabilization.'
        ]
      },
      {
        heading: '2. Phases of Structured Knee Physical Therapy',
        paragraphs: [
          'Rehabilitation begins with reducing acute swelling, restoring full passive extension (crucial for a normal gait cycle), and reactivating the vastus medialis obliquus (VMO).',
          'Once baseline activation is established, treatment advances to closed-kinetic-chain loading, such as controlled step-downs, Romanian deadlifts, and single-leg balance drills that rebuild joint proprioception.'
        ]
      },
      {
        heading: '3. Protecting Your Knees for Life',
        paragraphs: [
          'Weight management, progressive resistance training for the quadriceps and hamstrings, and proper footwear are the cornerstones of long-term knee preservation, whether recovering from an injury or managing mild degenerative changes.'
        ]
      }
    ],
    faqs: [
      {
        question: 'Is clicking or popping in the knee dangerous if there is no pain?',
        answer:
          'Painless joint sounds (crepitus) are typically harmless and caused by gas bubbles bursting in synovial fluid or normal tendon gliding. If clicking is accompanied by swelling, pain, or catching/locking, a clinical assessment is recommended.'
      },
      {
        question: 'Can physical therapy help manage knee osteoarthritis?',
        answer:
          'Yes, clinical evidence confirms that structured strengthening of the surrounding quadriceps and hip musculature significantly reduces joint contact stress, relieves chronic pain, and delays or avoids the need for surgical replacement.'
      }
    ]
  },
  {
    id: 'art-5',
    slug: 'returning-to-activity-after-injury',
    title: 'Returning to Activity After an Injury',
    category: 'Athletic Care',
    topic: 'Sports Rehabilitation',
    description:
      'Why structured rehabilitation milestones and progressive load management are essential for a safe, sustainable return to sports.',
    date: 'Jul 2026',
    readingTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80',
    author: 'Dr. K. Bhavendra PT',
    authorRole: 'Lead Physiotherapist • MPT (Sports Medicine)',
    clinicalTip:
      'Returning to sport should be a progressive milestone bridge, never an on-off switch based simply on the absence of pain. Tissue tolerance must match peak athletic demands.',
    sections: [
      {
        heading: '1. The Pitfall of the "No Pain" Fallacy',
        paragraphs: [
          'One of the most frequent mistakes active individuals and athletes make is assuming that the moment resting pain disappears, their injured tissue has fully recovered. In reality, pain reduction happens far earlier than complete structural tissue remodeling and neuromuscular recovery.',
          'Returning to high-impact sprinting, jumping, or cutting before restoring neuromuscular reactivity and eccentric strength leads to high rates of re-injury.'
        ],
        keyPoints: [
          'Pain subsides before muscular strength, power symmetry, and tendon stiffness are restored.',
          'Compensatory movement patterns often linger unconsciously after acute pain resolves.',
          'Objective functional milestone testing protects against premature return to play.'
        ]
      },
      {
        heading: '2. The 4 Key Return-to-Sport Milestones',
        paragraphs: [
          'A reliable return-to-sport protocol requires passing 4 milestone criteria: (1) Full symmetrical joint range of motion with zero post-exercise effusion; (2) Limb Symmetry Index (LSI) of at least 90% on isometric and dynamic strength testing; (3) Satisfactory multi-directional hopping and deceleration control; and (4) High psychological readiness and athletic confidence.'
        ]
      },
      {
        heading: '3. Understanding Load Management',
        paragraphs: [
          'Sudden spikes in physical training load (acute-to-chronic workload ratio exceeding 1.5) correlate directly with soft-tissue injury risk. A structured return incorporates gradual volume and intensity ramp-ups over several weeks.'
        ]
      }
    ],
    faqs: [
      {
        question: 'How do I know if I am pushing too hard during rehabilitation?',
        answer:
          'A safe rule of thumb: mild discomfort during exercise (up to 3/10) is acceptable provided it settles completely within 24 hours without residual joint swelling or morning stiffness.'
      },
      {
        question: 'What is neuromuscular re-education?',
        answer:
          'It is training that re-establishes fast, automatic reflexes between the brain, nerves, and muscles so your body stabilizes joints instinctively when making rapid athletic cuts or landing on uneven surfaces.'
      }
    ]
  },
  {
    id: 'art-6',
    slug: 'why-strength-matters-in-rehabilitation',
    title: 'Why Strength Matters in Rehabilitation',
    category: 'Movement Science',
    topic: 'Injury Prevention',
    description:
      'Exploring how targeted muscle strengthening protects recovering joints, enhances tendon resiliency, and prevents re-injury.',
    date: 'Jun 2026',
    readingTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80',
    author: 'Dr. K. Bhavendra PT',
    authorRole: 'Lead Physiotherapist • MPT (Sports Medicine)',
    clinicalTip:
      'Mobility gives you access to a joint range of motion, but muscular strength is what allows you to control, own, and protect that range when facing external loads.',
    sections: [
      {
        heading: '1. Muscular Strength as Biological Armor',
        paragraphs: [
          'Muscles are not just for lifting weights—they are our body’s primary shock absorbers. When you walk, run, or jump, muscles actively contract to dissipate ground reaction forces. When muscles are weak or fatigued, those mechanical impact loads transfer directly into passive cartilages, ligaments, and bones.',
          'Targeted strengthening increases collagen density in tendons, enhances bone mineral density, and reinforces joint stability.'
        ],
        keyPoints: [
          'Strong muscles absorb kinetic shock, protecting articular cartilage.',
          'Eccentric strengthening stimulates tendon collagen synthesis and remodeling.',
          'Resistance training builds confidence and reduces kinesiophobia (fear of movement).'
        ]
      },
      {
        heading: '2. Neuromuscular Reconditioning Across Ages',
        paragraphs: [
          'Progressive resistance exercise is safely applied across all demographics—from pediatric sports development to geriatric fall-prevention programs. In older adults, maintaining quadriceps and hip strength is the single most predictive factor for retaining lifelong functional independence.'
        ]
      },
      {
        heading: '3. The Concept of Progressive Overload in Physical Therapy',
        paragraphs: [
          'Rehabilitation must move past light elastic bands once basic activation is restored. Gradually challenging tissues with controlled resistance stimulates real biological adaptation, ensuring long-term resilience and preventing chronic recurrence.'
        ]
      }
    ],
    faqs: [
      {
        question: 'Will lifting weights worsen my arthritic joints?',
        answer:
          'No. Supervised, progressive resistance training actually strengthens the musculature offloading the joint, promotes joint fluid circulation, and significantly reduces arthritic joint pain.'
      },
      {
        question: 'How frequently should strength rehabilitation exercises be completed?',
        answer:
          'Typically, 2 to 3 dedicated strength sessions per week provide the optimal stimulus for muscular hypertrophy and neural adaptation, allowing 48 hours for tissue recovery between sessions.'
      }
    ]
  }
];
