"use client";

import React, { useState } from "react";
import { BlogsPageMobile, BlogsPageDesktop } from "@/components/pages/blogs";
import ConsultationModal from "@/components/features/ConsultationModal";

// Blog articles data structure with unique IDs
export const blogArticles = [
  {
    id: "house-construction-cost-sri-lanka-2025",
    title: "Complete Guide to House Construction Cost in Sri Lanka 2025 – Part 1",
    excerpt:
       "Full breakdown of Sri Lanka’s 2025 house construction costs—cost per square foot, material and labor prices, plus budget tips from Janco Homes’ experts.",
    image: "/blogs/blog1.png",
    date: "December 9, 2025",
    author: {
      name: "Mr. Premlal Kariyawasam",
      role: "Managing Director",
      avatar: "/viraj perera.png",
    },
    content: {
      intro: `Building your dream home in Sri Lanka is an exciting journey, but understanding the financial investment required is crucial for successful planning. Whether you're constructing a modest family residence or a luxury villa, knowing the current construction costs helps you budget accurately and avoid unexpected expenses.

At Janco Homes and Construction, with over 20 years of experience as ICTAD-registered contractors, we've helped hundreds of families across Sri Lanka build their dream homes. This comprehensive guide breaks down everything you need to know about house construction costs in 2025, from per-square-foot rates to hidden expenses many first-time builders overlook.`,
      sections: [
        {
          title: "House Construction Cost Per Square Foot in Sri Lanka 2025",
          content: `The most common question we receive at Janco Homes is: "How much does it cost to build a house in Sri Lanka?" The answer depends on several factors, but here's a realistic breakdown based on current market rates:`,
          subsections: [
            {
              title: "Basic Construction: Rs. 18,000 - 25,000 per square foot",
              content: `What You Get:
• Standard cement block or brick construction
• Basic finishing materials (ceramic tiles, standard paint)
• Simple electrical and plumbing fixtures
• Standard doors and windows (aluminum or basic wood)
• Cement plastered walls with emulsion paint
• Basic bathroom and kitchen fittings
• Straightforward architectural design

Best For: Budget-conscious families, first-time homeowners, rental properties

Sample Cost Example:
• 1,500 sq.ft house = Rs. 27,000,000 - 37,500,000
• 2,000 sq.ft house = Rs. 36,000,000 - 50,000,000
• 2,500 sq.ft house = Rs. 45,000,000 - 62,500,000`
            },
            {
              title: "Mid-Range Construction: Rs. 25,000 - 35,000 per square foot",
              content: `What You Get:
• Quality brick or cement block construction
• Better finishing materials (granite tiles, quality paint)
• Modern electrical and plumbing systems
• Aluminum sliding windows with tinted glass
• Decorative ceiling work
• Contemporary bathroom and kitchen fixtures
• Attractive facade with architectural features
• Some landscaping included

Best For: Middle-income families seeking quality and aesthetics

Sample Cost Example:
• 1,500 sq.ft house = Rs. 37,500,000 - 52,500,000
• 2,000 sq.ft house = Rs. 50,000,000 - 70,000,000
• 2,500 sq.ft house = Rs. 62,500,000 - 87,500,000`
            },
            {
              title: "Premium/Luxury Construction: Rs. 35,000 - 60,000+ per square foot",
              content: `What You Get:
• Premium construction with designer finishes
• Italian or Spanish tiles, imported sanitary ware
• Smart home features and automation
• Extensive use of glass, wood, and premium materials
• Designer lighting and fixtures
• Luxury kitchen with modular cabinets
• Multiple bathrooms with premium fittings
• Swimming pool, landscaping, outdoor entertaining areas
• Advanced security systems
• Custom architectural design

Best For: High-end residential projects, luxury villas, executive homes

Sample Cost Example:
• 2,500 sq.ft villa = Rs. 87,500,000 - 150,000,000+
• 3,500 sq.ft luxury home = Rs. 122,500,000 - 210,000,000+
• 5,000 sq.ft executive residence = Rs. 175,000,000 - 300,000,000+`
            }
          ]
        },
        {
          title: "Detailed Cost Breakdown: What Goes Into House Construction?",
          content: `Understanding where your money goes helps you make informed decisions and identify areas where you can optimize costs.`,
          subsections: [
            {
              title: "1. Foundation and Structural Work (35-40% of Total Cost)",
              content: `The foundation is literally the base of your home and should never be compromised. Costs include:

Site Preparation:
• Land clearing and leveling: Rs. 50,000 - 200,000
• Soil testing and analysis: Rs. 25,000 - 75,000
• Survey and marking: Rs. 30,000 - 80,000

Foundation Work:
• Excavation for foundations
• Reinforcement steel (TMT bars)
• Concrete for footings and foundation
• Foundation waterproofing

Structural Construction:
• Columns and beams (reinforced concrete)
• Floor slabs
• Load-bearing walls
• Roof structure

Material Costs (2025 Rates):
• Cement (50kg bag): Rs. 1,900 - 2,300
• Reinforcement steel (per kg): Rs. 250 - 300
• Bricks (per unit): Rs. 30 - 40
• Cement blocks (per unit): Rs. 70 - 90
• River sand (cube): Rs. 8,000 - 12,000
• Metal (cube): Rs. 6,000 - 9,000`
            },
            {
              title: "2. Walling and Masonry (15-20% of Total Cost)",
              content: `Walls define your living spaces and provide structural integrity, insulation, and privacy.

Wall Construction Options:
• Standard Brick Walls: Rs. 900 - 1,200 per sq.ft (including plastering)
• Cement Block Walls: Rs. 800 - 1,100 per sq.ft
• Combination (brick exterior, block interior)

What's Included:
• Bricks or cement blocks
• Mortar (cement and sand mix)
• Plastering both sides
• Waterproofing treatment
• Corner protection and reinforcement`
            },
            {
              title: "3. Roofing (12-15% of Total Cost)",
              content: `Roof Tile Options:
• Clay Roof Tiles: Rs. 70 - 100 per tile (traditional, heat insulation, long lifespan)
• Concrete Roof Tiles: Rs. 60 - 90 per tile (modern, durable)
• Asbestos-Free Sheets: Rs. 800 - 1,500 per sheet (budget-friendly)

Complete Roofing Cost:
• Roof structure (timber/steel trusses): Rs. 300 - 600 per sq.ft
• Roof tiles & installation: Rs. 400 - 800 per sq.ft
• Ceiling work: Rs. 250 - 500 per sq.ft
• Insulation: Rs. 150 - 300 per sq.ft
• Guttering & downpipes: Rs. 50,000 - 150,000 total`
            },
            {
              title: "4. Doors and Windows (8-12% of Total Cost)",
              content: `Door Costs:
• Teak/Mahogany solid wood doors: Rs. 35,000 - 80,000
• UPVC doors: Rs. 25,000 - 50,000
• Aluminum frame glass doors: Rs. 15,000 - 45,000
• Wooden panel doors: Rs. 8,000 - 25,000

Window Costs:
• Aluminum sliding windows: Rs. 8,000 - 15,000 per unit
• UPVC windows: Rs. 12,000 - 25,000 per unit
• Wooden windows: Rs. 10,000 - 30,000 per unit
• Glass only windows: Rs. 400 - 800 per sq.ft

Average for 2,000 sq.ft House:
• Doors: Rs. 250,000 - 450,000
• Windows: Rs. 180,000 - 375,000`
            },
            {
              title: "5. Electrical Work (6-8% of Total Cost)",
              content: `Components:
• Main electrical board and distribution
• Internal wiring (copper cables)
• Light fixtures and fittings
• Switches and sockets
• Ceiling fans
• AC wiring and provisions
• External lighting

Average Costs:
• 1,500 sq.ft house: Rs. 250,000 - 400,000
• 2,000 sq.ft house: Rs. 350,000 - 550,000
• 2,500 sq.ft house: Rs. 450,000 - 700,000
• 3,000+ sq.ft house: Rs. 600,000 - 950,000`
            },
            {
              title: "6. Plumbing and Sanitary Work (6-8% of Total Cost)",
              content: `What's Included:
• Water supply piping (CPVC/PPR pipes)
• Drainage and sewage lines
• Water tanks (overhead and underground)
• Septic tank system
• Water pumps and pressure systems

Bathroom Fixtures Per Bathroom:
• Basic: Rs. 50,000 - 120,000 (local brands, standard fittings)
• Mid-Range: Rs. 120,000 - 250,000 (quality brands, modern designs)
• Luxury: Rs. 250,000 - 500,000+ (imported, premium finishes)`
            },
            {
              title: "7. Flooring (8-10% of Total Cost)",
              content: `Flooring Options:
• Ceramic tiles: Rs. 150 - 400 per sq.ft
• Granite/Marble: Rs. 600 - 2,000 per sq.ft
• Porcelain tiles: Rs. 300 - 800 per sq.ft
• Wooden flooring: Rs. 1,500 - 4,000 per sq.ft

Average Total Cost:
• 2,000 sq.ft with ceramic: Rs. 300,000 - 800,000
• 2,000 sq.ft with granite: Rs. 1,200,000 - 4,000,000`
            },
            {
              title: "8. Painting and Finishing (5-8% of Total Cost)",
              content: `Exterior Painting:
• Weatherproof paint: Rs. 90 - 150 per sq.ft
• Textured finishes: Rs. 120 - 200 per sq.ft

Interior Painting:
• Standard emulsion: Rs. 40 - 80 per sq.ft
• Premium brands: Rs. 80 - 150 per sq.ft
• Wood staining/polishing: Rs. 150 - 300 per sq.ft

Total for 2,000 sq.ft House:
• Basic painting: Rs. 250,000 - 400,000
• Premium painting: Rs. 520,000 - 920,000`
            },
            {
              title: "9. Kitchen (5-8% of Total Cost)",
              content: `Basic Kitchen: Rs. 200,000 - 400,000
• Granite or tiled counter
• Basic cabinets (laminate finish)
• Standard sink and fixtures
• Simple tile backsplash

Mid-Range Kitchen: Rs. 400,000 - 800,000
• Granite countertop
• Quality modular cabinets
• Good sink and fixtures
• Designer tiles and lighting

Luxury Kitchen: Rs. 800,000 - 2,500,000+
• Imported stone countertop
• Premium modular cabinets
• High-end fixtures and appliances
• Designer lighting and accessories`
            },
            {
              title: "10. Professional Fees (6-10% of Total Cost)",
              content: `Architect Fees:
• Basic design: Rs. 50,000 - 150,000
• Complete architectural services: Rs. 200,000 - 800,000
• Luxury custom design: Rs. 500,000 - 2,000,000+

Engineer Fees:
• Structural engineering: Rs. 100,000 - 300,000
• MEP engineering: Rs. 50,000 - 200,000

Other Professional Services:
• Quantity surveyor: Rs. 75,000 - 250,000
• Interior designer: Rs. 100,000 - 500,000
• Landscape architect: Rs. 50,000 - 300,000`
            }
          ]
        }
      ],
      conclusion: `Understanding these cost breakdowns helps you plan your budget effectively and make informed decisions about where to invest in quality and where you can optimize costs. At Janco Homes, we provide transparent quotations and work with you to achieve the best value for your investment.

Contact us today for a detailed, customized quotation for your dream home project. Our ICTAD-registered team is ready to guide you through every step of your construction journey.`
    },
  },
  {
    id: "house-construction-cost-sri-lanka-2025-part-2",
    title: "Complete Guide to House Construction Cost in Sri Lanka 2025 – Part 2",
    excerpt:
      "Dive into the 2nd part of the hidden costs, factors affecting construction prices, and expert cost-saving tips for building your dream home in Sri Lanka.",
    date: "December 9, 2025",
    image: "/blogs/blog2.png",
    author: {
      name: "Mr. Premlal Kariyawasam",
      role: "Managing Director",
      avatar: "/viraj perera.png",
    },
    content: {
      intro: `Even after understanding the core construction costs, many first-time builders are surprised by additional expenses. At Janco Homes, we've seen how hidden costs can impact the total budget. Here's everything you need to know to avoid surprises and optimize your home construction investment.`,
      sections: [
        {
          title: "Hidden Costs Many First-Time Builders Forget",
          content: "",
          subsections: [
            {
              title: "1. Approvals and Permits (Rs. 150,000 - 500,000)",
              content: `• Urban Development Authority (UDA) approval
• Municipal Council building permits
• Environmental clearances (if applicable)
• Fire safety clearances (for multi-storey buildings)
• Utility connection fees (electricity, water, telephone)`
            },
            {
              title: "2. Land Preparation (Rs. 100,000 - 1,000,000+)",
              content: `Varies greatly depending on site condition:
• Leveling and grading
• Soil removal or fill
• Retaining walls (if on sloped land)
• Existing structure demolition
• Tree removal`
            },
            {
              title: "3. Temporary Site Facilities (Rs. 100,000 - 300,000)",
              content: `• Temporary electricity connection
• Water supply during construction
• Site security and fencing
• Worker facilities
• Material storage sheds`
            },
            {
              title: "4. Utility Connections (Rs. 200,000 - 600,000)",
              content: `• Electricity connection (CEB): Rs. 100,000 - 300,000
• Water connection: Rs. 50,000 - 150,000
• Telephone/internet: Rs. 20,000 - 50,000
• Sewage connection (if municipal): Rs. 50,000 - 150,000`
            },
            {
              title: "5. Landscaping and External Works (Rs. 300,000 - 2,000,000+)",
              content: `• Driveway and parking area
• Boundary wall and gate
• Garden landscaping and lawn
• Outdoor lighting
• Drainage around house`
            },
            {
              title: "6. Furniture and Fixtures (Rs. 500,000 - 5,000,000+)",
              content: `Basic Furniture Package:
• Beds, dining table, sofa set, wardrobes

Total: Rs. 630,000 - 1,250,000`
            },
            {
              title: "7. Safety and Security (Rs. 150,000 - 800,000)",
              content: `• Burglar bars for windows
• Main gate and grills
• CCTV system
• Alarm system`
            },
            {
              title: "8. Contingency Fund (10-15% of Total Budget)",
              content: `Always set aside funds for:
• Material price fluctuations
• Design changes during construction
• Unexpected site conditions
• Weather-related delays
• Mid-project upgrades`
            }
          ]
        },
        {
          title: "Factors That Affect House Construction Cost in Sri Lanka",
          content: "",
          subsections: [
            {
              title: "1. Location",
              content: `Colombo and Suburbs:
• Highest construction costs
• Premium labor rates
• High land costs
• 15-30% higher than baseline

Major Cities (Kandy, Galle, Negombo, Gampaha):
• Moderate construction costs
• Good labor availability

Rural Areas:
• Lower labor costs
• Limited skilled labor availability
• Higher material transport costs`
            },
            {
              title: "2. House Design Complexity",
              content: `Simple Box Design:
• Straightforward rectangular shape
• Minimal architectural features
• Lowest per sq.ft rates

Moderate Complexity:
• Bay windows, varied ceiling heights
• 10-15% higher cost

High Complexity:
• Multiple levels, extensive glass use
• Premium materials integration
• 25-40% higher cost

Ultra-Modern/Contemporary:
• Avant-garde architectural designs
• Complex engineering requirements
• 40-80% higher due to specialized materials and expertise`
            },
            {
              title: "3. Material Quality",
              content: `Standard:
• Locally sourced materials
• Basic functionality
• Regular maintenance required

Premium:
• Mix of local and imported materials
• Enhanced durability
• Better aesthetics

Luxury:
• High-end imported materials
• Exceptional quality and finish
• Minimal maintenance required`
            },
            {
              title: "4. Size of Construction",
              content: `Economy of scale: Larger houses can have lower per-square-foot cost

Examples:
• 1,000 sq.ft = Rs. 28,000/sq.ft
• 2,000 sq.ft = Rs. 24,000/sq.ft
• 3,500 sq.ft = Rs. 22,000/sq.ft

Larger projects benefit from:
• Bulk material discounts
• Better labor utilization
• Lower overhead percentage`
            },
            {
              title: "5. Timeline and Project Duration",
              content: `Fast-Track (6-10 months):
• More workers deployed
• Overtime costs
• Expedited material delivery
• 10-20% higher cost

Standard Timeline (12-18 months):
• Optimal resource utilization
• Normal labor rates
• Most cost-effective

Extended Timeline (18+ months):
• Material price inflation impact
• Weather-related delays
• 5-15% cost increase potential`
            }
          ]
        },
        {
          title: "Cost-Saving Tips from Janco Homes Experts",
          content: "",
          subsections: [
            {
              title: "1. Plan Thoroughly Before Starting",
              content: `• Complete all designs and approvals before breaking ground
• Changes mid-construction increase costs by 15-30%
• Clear specifications prevent misunderstandings and rework
• Comprehensive planning saves time and money

Potential Savings: 10-20% of total budget`
            },
            {
              title: "2. Choose the Right Construction Season",
              content: `• Avoid monsoon months (May-June, October-November)
• Dry season allows faster progress
• Less material damage from weather
• Fewer delays and disruptions

Potential Savings: 5-10% through efficiency gains`
            },
            {
              title: "3. Optimize Your Design",
              content: `• Simple, efficient layouts cost less to build
• Minimize complex angles and curves
• Maintain standard ceiling heights (9-10 feet)
• Rectangular shapes are most economical

Potential Savings: 15-25% compared to complex designs`
            },
            {
              title: "4. Select Materials Strategically",
              content: `• Use premium materials in high-visibility areas
• Cost-effective materials in less visible spaces
• Prioritize local materials where possible
• Balance quality with budget constraints

Potential Savings: 10-15% without compromising quality`
            },
            {
              title: "5. Focus on What Matters",
              content: `Invest Heavily In:
• Foundation and structural work
• Waterproofing systems
• Electrical and plumbing
• Quality roofing

Save on These:
• Paint colors (can be changed later)
• Light fixtures (easily upgraded)
• Landscaping (can be phased)
• Furniture (independent of construction)

Result: Better long-term value, prevents expensive future repairs`
            },
            {
              title: "6. Phase Your Project",
              content: `• Build core house structure first
• Add features and upgrades later
• Spread financial burden over time
• Avoid excessive interest on construction loans

Benefits: Better cash flow management, flexibility`
            },
            {
              title: "7. Hire ICTAD-Registered Contractors",
              content: `Advantages:
• Experienced professional teams
• Established supplier relationships
• Better project management
• Quality guarantees and warranties
• Industry standard practices

Potential Savings: 15-25% through efficiency and expertise`
            },
            {
              title: "8. Bundle Services",
              content: `Turn-key contractors handle:
• Architectural design
• Construction execution
• Interior finishing
• Project management

Benefits:
• Bulk pricing on materials
• Single point of accountability
• Streamlined communication
• Better coordination

Potential Savings: 10-20% compared to managing separately`
            }
          ]
        },
        {
          title: "Construction Cost Comparison by Location",
          content: `Here's a detailed breakdown of construction costs across different regions in Sri Lanka (2025 rates):`,
          subsections: [
            {
              title: "Colombo District (Colombo 1-15)",
              content: `• Basic: Rs. 25,000 - 32,000 per sq.ft
• Mid-Range: Rs. 32,000 - 42,000 per sq.ft
• Premium: Rs. 42,000 - 70,000+ per sq.ft`
            },
            {
              title: "Colombo Suburbs (Dehiwala, Pannipitiya, Maharagama, Kottawa)",
              content: `• Basic: Rs. 22,000 - 28,000 per sq.ft
• Mid-Range: Rs. 28,000 - 38,000 per sq.ft
• Premium: Rs. 38,000 - 60,000 per sq.ft`
            },
            {
              title: "Gampaha District",
              content: `• Basic: Rs. 20,000 - 26,000 per sq.ft
• Mid-Range: Rs. 26,000 - 35,000 per sq.ft
• Premium: Rs. 35,000 - 55,000 per sq.ft`
            },
            {
              title: "Kalutara/Panadura Area",
              content: `• Basic: Rs. 18,000 - 24,000 per sq.ft
• Mid-Range: Rs. 24,000 - 33,000 per sq.ft
• Premium: Rs. 33,000 - 50,000 per sq.ft`
            },
            {
              title: "Kandy District",
              content: `• Basic: Rs. 18,000 - 25,000 per sq.ft
• Mid-Range: Rs. 25,000 - 34,000 per sq.ft
• Premium: Rs. 34,000 - 52,000 per sq.ft`
            },
            {
              title: "Galle/Southern Province",
              content: `• Basic: Rs. 19,000 - 25,000 per sq.ft
• Mid-Range: Rs. 25,000 - 34,000 per sq.ft
• Premium: Rs. 34,000 - 55,000 per sq.ft`
            }
          ]
        },
        {
          title: "Sample House Construction Budgets",
          content: `Here are three realistic budget examples for different types of homes:`,
          subsections: [
            {
              title: "Example 1: Budget Family Home – 1,500 sq.ft",
              content: `Location: Panadura
Construction Type: Basic with some quality upgrades
Timeline: 12-14 months

Cost Breakdown:
• Construction @ Rs. 22,000/sq.ft: Rs. 33,000,000
• Architect fees (3%): Rs. 990,000
• Approvals and permits: Rs. 200,000
• Utility connections: Rs. 250,000
• Landscaping (basic): Rs. 300,000
• Contingency (10%): Rs. 3,474,000

Total Estimated Cost: Rs. 38,214,000

Features:
• 3 bedrooms, 2 bathrooms
• Living/dining area
• Modern kitchen
• Tiled roof
• Ceramic flooring
• Standard aluminum windows
• Basic landscaping and parking`
            },
            {
              title: "Example 2: Mid-Range Family Home – 2,500 sq.ft",
              content: `Location: Pannipitiya (Polawatta)
Construction Type: Mid-range with quality materials
Timeline: 14-16 months

Cost Breakdown:
• Construction @ Rs. 30,000/sq.ft: Rs. 75,000,000
• Architect & engineer fees (4%): Rs. 3,000,000
• Approvals and permits: Rs. 350,000
• Utility connections: Rs. 400,000
• Landscaping (moderate): Rs. 800,000
• Furniture (basic): Rs. 1,500,000
• Contingency (12%): Rs. 9,726,000

Total Estimated Cost: Rs. 90,776,000

Features:
• 4 bedrooms, 3 bathrooms
• Spacious living/dining areas
• Modern kitchen with granite countertops
• Mixed flooring (granite + tiles)
• UPVC windows
• Quality bathroom and kitchen fixtures
• Garden and dedicated parking area`
            },
            {
              title: "Example 3: Luxury Villa – 3,500 sq.ft",
              content: `Location: Malabe
Construction Type: Premium/Luxury
Timeline: 16-20 months

Cost Breakdown:
• Construction @ Rs. 42,000/sq.ft: Rs. 147,000,000
• Premium architect fees (5%): Rs. 7,350,000
• Approvals and permits: Rs. 500,000
• Utility connections: Rs. 600,000
• Swimming pool: Rs. 3,500,000
• Advanced landscaping: Rs. 2,500,000
• Premium furniture: Rs. 5,000,000
• Smart home system: Rs. 1,500,000
• Contingency (15%): Rs. 25,192,500

Total Estimated Cost: Rs. 193,142,500

Features:
• 5 bedrooms, 4 bathrooms
• Open-plan living with double-height ceiling
• Designer kitchen with imported fittings
• Granite/marble flooring throughout
• Extensive wooden and glass features
• Swimming pool with deck
• Premium landscaping
• Smart home automation
• Advanced security system`
            }
          ]
        }
      ],
      conclusion: `Building a house in Sri Lanka requires careful planning and budgeting. By understanding hidden costs, choosing the right contractor, and making strategic decisions, you can build your dream home within budget.

At Janco Homes and Construction, our ICTAD-registered team provides transparent quotations and expert guidance throughout your construction journey. With over 20 years of experience, we help you achieve the best value for your investment.

Contact us today for a detailed, customized quotation tailored to your specific needs and budget. Let's build your dream home together.`
    },
  },
  {
    id: "modern-house-design-trends-sri-lanka-2025-part-1",
    title: "10 Modern House Design Trends in Sri Lanka for 2025 (Part 1)",
    excerpt:
      "Discover the latest architectural trends transforming Sri Lankan homes—from minimalist design to smart home technology and sustainable living.",
    date: "December 9, 2025",
    image: "/blogs/blog3.png",
    author: {
      name: "Mr. Premlal Kariyawasam",
      role: "Managing Director",
      avatar: "/viraj perera.png",
    },
    content: {
      intro: `Modern architecture in Sri Lanka has entered a new era—one defined by minimalism, sustainability, natural light, and smart living. With homeowners now prioritizing comfort, tropical suitability, and long-term value, design trends in 2025 showcase a perfect blend of global elegance and Sri Lankan practicality.

At Janco Homes & Construction, with over 20 years of experience and leading chartered architects, we've witnessed firsthand how Sri Lankan house design has evolved. This two-part guide explores the 10 biggest modern design trends transforming homes across the island.`,
      sections: [
        {
          title: "1. Minimalist Contemporary Design",
          content: "The Essence of Less Is More\n\nMinimalism has become the most popular architectural trend in Sri Lanka. Homeowners are moving away from ornamental styles and embracing clean lines, uncluttered forms, and functional elegance.",
          subsections: [
            {
              title: "Exterior Characteristics",
              content: `• Simple geometric shapes (rectangular/cubic)
• Flat or low-pitched roofs
• Minimal decorative elements
• Large uninterrupted walls
• Neutral color palette (white, beige, grey)
• Soft textures with natural materials`
            },
            {
              title: "Interior Characteristics",
              content: `• Open layouts with fewer internal walls
• Built-in storage solutions
• Neutral tones throughout
• Multi-use furniture
• Hidden lighting and ceiling features`
            },
            {
              title: "Why Minimalism Works in Sri Lanka",
              content: `Climate Advantages:
• Large overhangs for shade
• Strategic window placement for cross-ventilation
• Light-colored exteriors reduce heat absorption
• Simple rooflines prevent water leakage during monsoon seasons

Maintenance Advantages:
• Fewer decorative elements = less upkeep
• Cleanable surfaces
• Modern materials resist humidity`
            },
            {
              title: "Case Study — Dehiwala Modern Residence (1,750 sq.ft)",
              content: `• Cubic design with decorative screening
• White & wood tone palette
• Built at Rs. 16 million
• Completed in 14 months`
            },
            {
              title: "Cost Guide",
              content: `• Minimalist homes can reduce construction cost by 10–15%
• Budget range: Rs. 20,000–35,000 per sq.ft`
            }
          ]
        },
        {
          title: "2. Indoor–Outdoor Living Integration",
          content: "Blurring the Boundaries Between Home and Nature\n\nThanks to Sri Lanka's warm climate, indoor-outdoor integration is now essential in modern house design.",
          subsections: [
            {
              title: "Popular Features",
              content: `Large Opening Systems:
• 10–20 ft sliding glass panels
• Bi-fold doors
• Pivot doors
• Cost: Rs. 80,000–200,000 per opening

Transitional Spaces:
• Verandas & terraces
• Private balconies
• Internal courtyards
• Loggias

Architectural Elements:
• Seamless floor levels
• Continuous indoor-outdoor tile lines
• Ceiling extensions
• Integrated ambient lighting`
            },
            {
              title: "Sri Lankan Climate Benefits",
              content: `• Natural ventilation reduces AC usage
• Deep overhangs protect from sun and rain
• Landscaped outdoor zones encourage tropical living`
            },
            {
              title: "Popular Layouts",
              content: `• Living room → garden connection
• Kitchen → outdoor dining veranda
• Bedroom → private terrace`
            },
            {
              title: "Case Study — Athurugiriya Contemporary Villa (3,134 sq.ft)",
              content: `• 20 ft bi-fold glass doors
• Central courtyard design
• Multi-level terraces
• Total Cost: Rs. 26.9 million`
            }
          ]
        },
        {
          title: "3. Sustainable & Eco-Friendly Features",
          content: "Environmental responsibility and long-term savings make sustainability one of the biggest trends of 2025.",
          subsections: [
            {
              title: "Solar Power Systems",
              content: `• 3–5 kW solar panels: Rs. 450,000–900,000
• Saves 60–80% on electricity bills
• Payback period: 4–6 years`
            },
            {
              title: "Rainwater Harvesting",
              content: `• Full system cost: Rs. 150,000–400,000
• Saves 30–50% on water costs
• Essential for sustainable living`
            },
            {
              title: "Energy-Efficient Design",
              content: `• Optimized building orientation
• Roof and wall insulation
• LED lighting throughout
• Smart cooling systems`
            },
            {
              title: "Natural Materials",
              content: `• Rubble stone walls
• Coconut timber
• Bamboo elements
• Recycled bricks
• Low-VOC paint`
            },
            {
              title: "Cost-Benefit Summary",
              content: `Initial Investment: Rs. 1.1M–2.4M
Annual Savings: Rs. 150,000–300,000
Payback Period: 4–8 years`
            }
          ]
        },
        {
          title: "4. Open-Plan Living Spaces",
          content: "Open-plan layouts are replacing compartmentalized rooms across Sri Lanka.",
          subsections: [
            {
              title: "Benefits",
              content: `• Better natural ventilation
• More natural light penetration
• Increased usable space
• 5%–10% construction cost savings
• Ideal for entertaining and family living`
            },
            {
              title: "Design Strategies",
              content: `• Furniture for zone separation
• Sliding partitions for privacy when needed
• Semi-open kitchens for Sri Lankan cooking
• Continuous flooring throughout`
            },
            {
              title: "Case Study — Kirulapana Modern Villa (3,310 sq.ft)",
              content: `• 1,200 sq.ft fully open-plan ground floor
• 12 ft ceiling heights
• Large glass openings
• Project Value: Rs. 30 million`
            }
          ]
        },
        {
          title: "5. Smart Home Technology Integration",
          content: "Smart homes are becoming standard—especially in Colombo suburbs.",
          subsections: [
            {
              title: "Essential Features",
              content: `Smart Lighting:
• App/voice-controlled systems
• Cost: Rs. 150,000–400,000

Smart AC & Climate Control:
• Saves 20–30% on cooling costs
• Cost per unit: Rs. 15,000–40,000

Smart Security:
• Video doorbells
• Smart locks
• Motion-detecting cameras

Voice Assistants:
• Alexa, Google Home, Apple Home integration`
            },
            {
              title: "Full Smart Home Packages",
              content: `• Basic Package: Rs. 300,000–600,000
• Advanced Package: Rs. 800,000–1,500,000
• Premium Package: Rs. 2M+`
            },
            {
              title: "Benefits",
              content: `• Reduced energy bills
• Enhanced security features
• Convenience and comfort
• Higher resale value`
            }
          ]
        }
      ],
      conclusion: `These five trends represent the first wave of modern design innovation sweeping across Sri Lanka in 2025. From minimalist aesthetics to smart technology, each trend offers unique benefits for tropical living while maintaining long-term value.

In Part 2, we'll explore the remaining five trends including luxury materials, multi-functional spaces, natural lighting strategies, vertical gardens, and contemporary Sri Lankan fusion designs.

At Janco Homes & Construction, our award-winning architects and ICTAD-registered builders bring these modern design trends to life. With over 20 years of experience, we combine international design excellence with Sri Lankan practicality.

Ready to build your modern dream home? Contact us today for a consultation and discover how these trends can transform your living space.`
    },
  },
  {
    id: "modern-house-design-trends-sri-lanka-2025-part-2",
    title: "10 Modern House Design Trends in Sri Lanka for 2025 (Part 2)",
    excerpt:
      "Explore multi-functional spaces, privacy-focused architecture, natural materials, energy-efficient designs, and luxury bathrooms transforming Sri Lankan homes.",
    date: "December 9, 2025",
    image: "/blogs/blog4.png",
    author: {
      name: "Mr. Premlal Kariyawasam",
      role: "Managing Director",
      avatar: "/viraj perera.png",
    },
    content: {
      intro: `Sri Lankan homeowners are increasingly blending modern minimalism, natural elements, and smart living. While Part 1 explored the first five major trends, this continuation highlights the remaining groundbreaking trends shaping the island's residential architecture in 2025.

These trends reflect the evolving lifestyle of Sri Lankans—prioritizing sustainability, efficiency, privacy, and long-term value.`,
      sections: [
        {
          title: "6. Multi-Functional Interior Spaces",
          content: "Modern Sri Lankan homes now maximize every square foot due to rising land and construction costs. Multi-functional interiors allow a single space to serve multiple purposes throughout the day, increasing usability without increasing size.",
          subsections: [
            {
              title: "Key Features",
              content: `• Rooms designed for dual use (e.g., TV lounge + guest bedroom)
• Foldable or sliding wall partitions
• Built-in storage solutions
• Study corners or home office nooks
• Convertible dining + workspace areas`
            },
            {
              title: "Popular Examples in Sri Lanka",
              content: `• Home office integrations became highly requested after the remote-work shift
• Studio-style upper floors for young adults or extended family
• Open-plan kitchen + dining + bar counter combinations`
            },
            {
              title: "Cost Guide",
              content: `• Convertible furniture: Rs. 40,000–300,000
• Sliding partitions: Rs. 75,000–250,000
• Custom carpentry: Rs. 100,000+`
            },
            {
              title: "Why It Works",
              content: `• Ideal for 6–12 perch land plots
• Reduces clutter and improves organization
• Supports evolving family needs
• Provides better resale value`
            }
          ]
        },
        {
          title: "7. Privacy-Focused Architecture (Courtyards, Screening, & Zoning)",
          content: "Sri Lankan families are increasingly prioritizing privacy—especially in high-density urban areas like Maharagama, Nugegoda, Kottawa, and Battaramulla.\n\nThis trend focuses on designing homes that feel open while maintaining seclusion.",
          subsections: [
            {
              title: "Popular Privacy Features",
              content: `• Internal courtyards that bring light and ventilation without exposing interiors
• Louvered timber or aluminum screens for windows and balconies
• High parapet walls with modern textures (cement finish, stone, timber slats)
• Zoning layouts separating public and private areas
• Frosted or tinted glass in selected openings`
            },
            {
              title: "Sri Lankan Advantages",
              content: `• Courtyards improve airflow and reduce moisture
• Screens help block direct sun
• Increased security for peace of mind
• Perfect for narrow or roadside properties`
            },
            {
              title: "Cost Range",
              content: `• Timber or aluminum screening: Rs. 2,500–5,500 per sq.ft
• Courtyard construction: Rs. 350,000–1,000,000
• Sound-buffer walls: Rs. 150,000–500,000`
            }
          ]
        },
        {
          title: "8. Earth-Tone & Natural Material Finishes (Modern Tropical Aesthetic)",
          content: "One of the fastest-growing design trends in Sri Lanka is the use of calming earth tones and natural-textured finishes that match our tropical climate.",
          subsections: [
            {
              title: "Material Palette",
              content: `• Natural wood (teak, kumbuk, jack)
• Stone cladding and granite
• Cement-textured walls
• Neutral warm tones (taupe, beige, olive, charcoal)
• Terracotta accents`
            },
            {
              title: "Why Sri Lankans Prefer It",
              content: `• Matches modern tropical architecture
• Low maintenance compared to pure white minimalism
• Creates warmth and luxury atmosphere
• Works well with greenery and courtyards`
            },
            {
              title: "Examples",
              content: `• Cement-textured TV walls
• Wood-slatted ceilings
• Stone cladding for front elevations
• Earth-tone façades with black aluminum framing`
            },
            {
              title: "Cost Guide",
              content: `• Stone cladding: Rs. 450–2,000 per sq.ft
• Wood features: Rs. 3,000–7,000 per sq.ft
• Cement finish walls: Rs. 250–450 per sq.ft`
            }
          ]
        },
        {
          title: "9. Energy-Efficient Windows & Ventilation Strategies",
          content: "With rising temperatures in Sri Lanka, climate-responsive window designs are now a major trend.",
          subsections: [
            {
              title: "Key Window Features",
              content: `• Double-glazed glass (for heat + sound reduction)
• UPVC or powder-coated aluminum frames
• Large operable openings for ventilation
• Mosquito-net integrated window systems`
            },
            {
              title: "Ventilation Strategies",
              content: `• Cross-ventilation planning with opposite openings
• High-level clerestory windows
• Vent blocks for natural airflow
• Roof vents and heat extraction systems`
            },
            {
              title: "Benefits",
              content: `• Reduces AC electricity bills by 20–40%
• Keeps indoor temperature 2°C–4°C cooler
• Minimizes humidity and prevents mold
• Blocks road noise in busy suburbs`
            },
            {
              title: "Cost Guide",
              content: `• Double-glazed windows: Rs. 18,000–35,000 per sq.ft
• UPVC windows: Rs. 10,000–20,000 per sq.ft`
            }
          ]
        },
        {
          title: "10. Luxury Bathrooms & Spa-Inspired Wet Zones",
          content: "Bathrooms have transformed from purely functional spaces into private relaxation zones.",
          subsections: [
            {
              title: "Modern Bathroom Trends in Sri Lanka",
              content: `• Walk-in showers with glass partitions
• Rainfall shower systems
• Floating vanities
• Natural stone or marble-look tiles
• Mood lighting systems
• Built-in niches for toiletries
• Large mirrors with LED backlighting`
            },
            {
              title: "Design Features Homeowners Love",
              content: `• Skylights above bathrooms for natural light
• Matte black or brushed gold fittings
• Indoor plants for spa atmosphere
• Anti-slip textured flooring`
            },
            {
              title: "Cost Range",
              content: `• Basic modern bathroom: Rs. 350,000–1,500,000 per bathroom (depending on size)
• Luxury fittings and fixtures: Rs. 100,000–450,000`
            },
            {
              title: "Why Popular in 2025",
              content: `• Wellness-focused living trend
• Cleaner modern aesthetics
• Affordable mid-range luxury options now available in Sri Lanka`
            }
          ]
        }
      ],
      conclusion: `Modern house design in Sri Lanka in 2025 focuses on simplicity, sustainability, comfort, and climate-responsive architecture. Whether you prefer minimalist spaces, eco-friendly features, or smart home integration, these trends ensure your home remains beautiful, functional, and future-ready.

From multi-functional interiors that maximize space efficiency to privacy-focused courtyards, earth-tone tropical aesthetics, energy-efficient ventilation, and spa-inspired bathrooms—each trend addresses the unique needs of Sri Lankan living while maintaining contemporary global standards.

At Janco Homes & Construction, we incorporate these modern trends into every project—ensuring your home is built with timeless design, quality craftsmanship, and long-term value. Our experienced team of architects and ICTAD-registered builders brings international design excellence together with local expertise.

Ready to transform your vision into reality? Contact us today for a consultation and discover how these cutting-edge design trends can elevate your dream home.`
    },
  },
  
];

export default function BlogsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* Mobile/Tablet View */}
      <div className="lg:hidden">
        <BlogsPageMobile
          articles={blogArticles}
          onOpenModal={() => setIsModalOpen(true)}
        />
      </div>

      {/* Desktop View */}
      <div className="hidden lg:block">
        <BlogsPageDesktop articles={blogArticles} />
      </div>

      {/* Consultation Modal */}
      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
