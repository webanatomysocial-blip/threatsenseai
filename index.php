
<?php
// Function to ensure absolute URL
function getAbsoluteUrl($path, $baseUrl) {
    if (strpos($path, 'http') === 0) return $path;
    return rtrim($baseUrl, '/') . '/' . ltrim($path, '/');
}

// Function to optimize Image for OG Tags (Size + Aspect Ratio)
// Uses images.weserv.nl to resize, pad, and compress on the fly.
// Solves: 1. WhatsApp 300KB limit (compression) 2. LinkedIn cropping (fit=contain)
function getOptimizedOgImage($url) {
    // Encode the source URL
    $encodedUrl = urlencode($url);
    // w=1200&h=630 (Standard OG Size)
    // fit=contain (Adds padding instead of cropping/cutting)
    // output=jpg (Broad compatibility)
    // q=80 (Quality compression to ensure <300KB)
    // bg=ffffff (White background for padding)
    return "https://images.weserv.nl/?url=" . $encodedUrl . "&w=1200&h=630&fit=contain&output=jpg&q=80&bg=ffffff";
}

$request_uri = $_SERVER['REQUEST_URI'];
$path = parse_url($request_uri, PHP_URL_PATH);

// Determine protocol and host dynamically
$protocol = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off' || $_SERVER['SERVER_PORT'] == 443) ? "https://" : "http://";
$host = $_SERVER['HTTP_HOST'];
$baseUrl = $protocol . $host;

// Default Meta Tags
$defaultTitle = "Success Wikis";
$defaultDesc = "Discover stories of purpose, resilience, and innovation. Exploring the journeys behind success.";
// Absolute -> Optimized
$defaultAbsImage = getAbsoluteUrl("/assets/logo.png", $baseUrl); 
$defaultImage = getOptimizedOgImage($defaultAbsImage);
$defaultUrl = $baseUrl . "/";

$title = $defaultTitle;
$description = $defaultDesc;
$image = $defaultImage;
$url = $defaultUrl;

// 1. Blog Metadata
// Data from src/blogs/metadata.js
$blogMetadata = [
    [
        "id" => "FutureTrendsSaaS",
        "title" => "Future Trends in SaaS: What's Next?",
        "slug" => "future-trends-saas",
        "metaDescription" => "Explore tomorrow's innovations, today.",
        "image" => "/src/blogs/blogs-images/1.png",
        "url" => $baseUrl . "/blogs/future-trends-saas"
    ],
    [
        "id" => "SecurityEssentialsSaaS",
        "title" => "Security Essentials for Modern SaaS Products",
        "slug" => "security-essentials-saas",
        "metaDescription" => "Essential security practices for modern cloud products.",
        "image" => "/src/blogs/blogs-images/1.png",
        "url" => $baseUrl . "/blogs/security-essentials-saas"
    ],
    [
        "id" => "SaaSOnboarding",
        "title" => "SaaS Onboarding That Delights Users",
        "slug" => "saas-onboarding-delights",
        "metaDescription" => "Creating a seamless first experience for your customers.",
        "image" => "/src/blogs/blogs-images/1.png",
        "url" => $baseUrl . "/blogs/saas-onboarding-delights"
    ],
    [
        "id" => "MustHaveIntegrations",
        "title" => "Must-Have Integrations for Your SaaS stack",
        "slug" => "must-have-integrations",
        "metaDescription" => "The tools you need to connect for maximum efficiency.",
        "image" => "/src/blogs/blogs-images/1.png",
        "url" => $baseUrl . "/blogs/must-have-integrations"
    ],
    [
        "id" => "ComparingPricingModels",
        "title" => "Comparing SaaS Pricing Models: What Fits You?",
        "slug" => "comparing-pricing-models",
        "metaDescription" => "Finding the right value proposition for your product.",
        "image" => "/src/blogs/blogs-images/1.png",
        "url" => $baseUrl . "/blogs/comparing-pricing-models"
    ],
    [
        "id" => "FiveReasonsProductivity",
        "title" => "5 Reasons SaaS Improves Productivity",
        "slug" => "five-reasons-productivity",
        "metaDescription" => "How cloud tools are changing the way we work.",
        "image" => "/src/blogs/blogs-images/1.png",
        "url" => $baseUrl . "/blogs/five-reasons-productivity"
    ],
];

// 2. Static Pages
$staticPages = [
    '/blogs' => [
        'title' => 'Blogs | ThreatSenseAI',
        'description' => 'Read our latest blogs on purpose, resilience, and innovation.'
    ],
    '/about' => [
        'title' => 'About Us | ThreatSenseAI',
        'description' => 'Learn more about ThreatSenseAI and our mission.'
    ],
    '/contact' => [
        'title' => 'Contact Us | ThreatSenseAI',
        'description' => 'Get in touch with the ThreatSenseAI team.'
    ],
];

if (array_key_exists($path, $staticPages)) {
    $title = $staticPages[$path]['title'];
    $description = $staticPages[$path]['description'];
}

// ROUTING LOGIC

$cleanPath = trim($path, '/');

// 1. Blogs: /blogs/:slug
if (stripos($cleanPath, 'blogs/') === 0) {
    $parts = explode('/', $cleanPath);
    $blogId = end($parts); // Get last part
    foreach ($blogMetadata as $item) {
        if ($item['id'] === $blogId || $item['slug'] === $blogId) { 
            $title = $item['title'];
            $description = $item['metaDescription'];
            $absImage = getAbsoluteUrl($item['image'], $baseUrl);
            $image = getOptimizedOgImage($absImage);
            $url = $baseUrl . "/blogs/" . $item['slug'];
            break;
        }
    }
}

// Read index.html (Check dist folder first for production, then root for dev)
if (file_exists('dist/index.html')) {
    $html = file_get_contents('dist/index.html');
} elseif (file_exists('index.html')) {
    $html = file_get_contents('index.html');
} else {
    die("index.html not found.");
}

// CLEANUP existing tags to prevent duplicates (Robust Regex for Multi-line)
// Remove existing title
$html = preg_replace('/<title>.*?<\/title>/is', '', $html);
// Remove existing OG and Description tags (handling multi-line attributes)
$html = preg_replace('/<meta\s+[^>]*property=["\']og:[^"\']+["\'][^>]*\/?>/is', '', $html);
$html = preg_replace('/<meta\s+[^>]*name=["\']og:[^"\']+["\'][^>]*\/?>/is', '', $html);
$html = preg_replace('/<meta\s+[^>]*name=["\']description["\'][^>]*\/?>/is', '', $html);
$html = preg_replace('/<meta\s+[^>]*name=["\']twitter:[^"\']+["\'][^>]*\/?>/is', '', $html);
$html = preg_replace('/<meta\s+[^>]*name=["\']keywords["\'][^>]*\/?>/is', '', $html);
$html = preg_replace('/<meta\s+[^>]*name=["\']author["\'][^>]*\/?>/is', '', $html);
$html = preg_replace('/<meta\s+[^>]*name=["\']robots["\'][^>]*\/?>/is', '', $html);

// Prepare New Tags
$headEnd = '</head>';
$ogTags = "
    <!-- Dynamic OG Tags via index.php -->
    <title>" . htmlspecialchars($title) . "</title>
    <meta name=\"description\" content=\"" . htmlspecialchars($description) . "\">
    <meta name=\"keywords\" content=\"success, wikis, motivation, achievement, personal development\">
    <meta name=\"author\" content=\"SuccessWikis Team\">
    <meta name=\"robots\" content=\"index, follow\">

    <meta property=\"og:title\" content=\"" . htmlspecialchars($title) . "\">
    <meta property=\"og:description\" content=\"" . htmlspecialchars($description) . "\">
    <meta property=\"og:image\" content=\"" . htmlspecialchars($image) . "\">
    <meta property=\"og:url\" content=\"" . htmlspecialchars($url) . "\">
    <meta property=\"og:type\" content=\"website\">
    <meta property=\"og:site_name\" content=\"Success Wikis\">

    <!-- Additional Image Properties -->
    <meta property=\"og:image:type\" content=\"image/jpeg\">
    <meta property=\"og:image:width\" content=\"1200\">
    <meta property=\"og:image:height\" content=\"630\">
    <meta property=\"og:image:alt\" content=\"" . htmlspecialchars($title) . "\">

    <meta name=\"twitter:card\" content=\"summary_large_image\">
    <meta name=\"twitter:title\" content=\"" . htmlspecialchars($title) . "\">
    <meta name=\"twitter:description\" content=\"" . htmlspecialchars($description) . "\">
    <meta name=\"twitter:image\" content=\"" . htmlspecialchars($image) . "\">
";

// Inject before </head>
$html = str_replace($headEnd, $ogTags . "\n" . $headEnd, $html);

echo $html;
?>
