// Better Zen Profile User Preferences
// Tested with Zen version 1.11.3b

// If you make changes to your preferences from about:config in the browser,
// the changes will be overwritten by the below preferences on application restart.
//
// To make your changes persistent, set them below within the user.js file.

/* Zen value: true
 * Disables the warning when accessing about:config */
user_pref("browser.aboutConfig.showWarning", false);

/* Zen value: true
 * Disables disk caching - reduces disk I/O and improves privacy, but may slow down page loads on revisits */
user_pref("browser.cache.disk.enable", false);

/* Zen value: standard
 * Sets content blocking to strict mode - enhances privacy and security but may break some websites */
user_pref("browser.contentblocking.category", "custom");

/* Zen value: false
 * Downloads first go to the operating system's temp directory before final location - improves security against malicious downloads */
user_pref("browser.download.start_downloads_in_tmp_dir", true);

/* Zen value: true
 * Disables weather display on new tab page - improves privacy by preventing location tracking */
user_pref("browser.newtabpage.activity-stream.showWeather", false);

/* Zen value: false
 * Enables the "End Private Session" button during private browsing */
user_pref("browser.privatebrowsing.resetPBM.enabled", true);

/* Zen value: false
 * Enables multiple browser profiles */
user_pref("browser.profiles.enabled", true);

/* Zen value: true
 * Disables remote lookups for checking reputation of downloaded files - improves privacy but may reduce security against malicious downloads */
user_pref("browser.safebrowsing.downloads.remote.enabled", false);

/* Zen value: true
 * Prevents automatic updates to search engines and their configurations */
user_pref("browser.search.update", false);

/* Zen value: 15000
 * Sets session save interval to 60 seconds - reduces disk writes, balancing data preservation with performance */
user_pref("browser.sessionstore.interval", 60000);

/* Zen value: true
 * Disables check for default browser status */
user_pref("browser.shell.checkDefaultBrowser", false);


/* Zen value: http://detectportal.firefox.com/canonical.html
 * Disables captive portal detection URL - improves privacy */
user_pref("captivedetect.canonicalURL", "");


/* Zen value: 120000
 * Decreases minimum interval between content reflows - improves perceived page loading speed */
user_pref("content.notify.interval", 100000);


/* Zen value: 0
 * Enables automatic cookie banner handling. Attempts to reject cookies where possible and ignores other types of banners */
user_pref("cookiebanners.service.mode", 1);

/* Zen value: 0
 * Enables automatic cookie banner handling for private browsing sessions. Attempts to reject cookies where possible and ignores other types of banners */
user_pref("cookiebanners.service.mode.privateBrowsing", 1);


/* Zen value: true
 * Prevents truncation of pasted text */
user_pref("editor.truncate_user_pastes", false);


/* Zen value: 256
 * Increases canvas cache size - improves performance for graphics-intensive pages */
user_pref("gfx.canvas.accelerated.cache-size", 512);

/* Zen value: 80
 * Decreases font cache size - conserves memory usage */
user_pref("gfx.content.skia-font-cache-size", 20);


/* Zen value: 9000
 * Decreases media read-ahead limit - balances performance for media streaming with memory usage */
user_pref("media.cache_readahead_limit", 7200);

/* Zen value: 1048576
 * Decreases memory cache for media - balances performance for media playback with memory usage */
user_pref("media.memory_cache_max_size", 65536);


/* Zen value: 2
 * Allows HTTP authentication in subresources from same-origin - balances usability and security */
user_pref("network.auth.subresource-http-auth-allow", 1);

/* Zen value: true
 * Disables captive portal service - improves privacy */
user_pref("network.captive-portal-service.enabled", false);

/* Zen value: true
 * Disables network connectivity checking - improves privacy */
user_pref("network.connectivity-service.enabled", false);

/* Zen value: false
 * Disables DNS prefetching - improves privacy */
user_pref("network.dns.disablePrefetch", true);

/* Zen value: false
 * Disables DNS prefetching from HTTPS - improves privacy */
user_pref("network.dns.disablePrefetchFromHTTPS", true);

/* Zen value: 900
 * Increases maximum connections - improves loading speed for sites with many resources */
user_pref("network.http.max-connections", 1800);

/* Zen value: 6
 * Increases persistent connections per server - improves loading performance */
user_pref("network.http.max-persistent-connections-per-server", 10);

/* Zen value: true
 * Disables HTTP request pacing - improves performance */
user_pref("network.http.pacing.requests.enabled", false);

/* Zen value: 0
 * Omits the Referer header from cross-origin requests - providing privacy but potentially breaking functionality on some websites */
user_pref("network.http.referer.XOriginTrimmingPolicy", 2);

/* Zen value: true
 * Disables network prediction - improves privacy */
user_pref("network.predictor.enabled", false);

/* Zen value: true
 * Disables link prefetching - improves privacy and reduces bandwidth */
user_pref("network.prefetch-next", false);

/* Zen value: 32768
 * Decreases SSL token cache - balances performance for HTTPS connections with memory usage */
user_pref("network.ssl_tokens_cache_capacity", 10240);


/* Zen value: 0
 * Blocks all websites from sending desktop notifications by default (2=block) - improves privacy */
user_pref("permissions.default.desktop-notification", 2);

/* Zen value: 0
 * Blocks all websites from accessing location by default (2=block) - improves privacy */
user_pref("permissions.default.geo", 2);

/* Zen value: resource://app/defaults/permissions
 * Disables loading of default permissions URL - improves privacy */
user_pref("permissions.manager.defaultsUrl", "");


/* Zen value: 1
 * Disables OCSP checking of certificate revocation (0=disabled) - improves performance and privacy */
user_pref("security.OCSP.enabled", 0);

/* Zen value: false
 * Blocks display of mixed content, ensuring that all resources on HTTPS pages are secure */
user_pref("security.mixed_content.block_display_content", true);

/* Zen value: 3
 * Enables CRLite in enforcing mode (2=enforce) - improves privacy and performance of certificate checks */
user_pref("security.pki.crlite_mode", 2);


/* Zen value: true
 * Disables capturing and offering to save passwords from web forms not explicitly defining fields for usernames and passwords */
user_pref("signon.formlessCapture.enabled", false);

/* Zen value: true
 * Disables capturing and offering to save passwords in private sessions - improves privacy */
user_pref("signon.privateBrowsingCapture.enabled", false);

/* https://wiki.archlinux.org/title/Firefox/Privacy */
/* https://wiki.mozilla.org/Security/Referrer */

// Platform 
user_pref("general.useragent.override", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.7103.48 Safari/537.36");
user_pref("general.platform.override", "Win32");

// Referer Stuff
user_pref("network.http.referer.trimmingPolicy", 2);
user_pref("network.http.sendRefererHeader", 0);
//user_pref("network.http.referer.XOriginTrimmingPolicy", 2);
user_pref("network.http.referer.XOriginPolicy", 2);
user_pref("network.http.referer.spoofSource", true);
user_pref("network.http.referer.defaultPolicy", 0);
user_pref("network.http.referer.defaultPolicy.pbmode", 0);
user_pref("network.http.referer.hideOnionSource", true);

// DNS Related Crap
//user_pref("network.captive-portal-service.enabled", false);
user_pref("network.dns.echconfig.enabled", true);
user_pref("network.dns.http3_echconfig.enabled", true);

// File Scanning
user_pref("browser.safebrowsing.malware.enabled", false);
user_pref("browser.safebrowsing.phishing.enabled", false);
user_pref("browser.safebrowsing.downloads.enabled", false);

// Wism Disabling
user_pref("javascript.options.wasm", false)
user_pref("javascript.options.wasm_baselinejit", false)
user_pref("javascript.options.wasm_ionjit", false)

// Other Telemetry
user_pref("app.normandy.user_id", "");
user_pref("security.sandbox.content.tempDirSuffix", "");
user_pref("toolkit.telemetry.cachedClientID", "");
user_pref("browser.search.serpEventTelemetryCategorization.enabled", false);
user_pref("browser.search.serpEventTelemetryCategorization.regionEnabled", false)
user_pref("identity.fxaccounts.telemetry.clientAssociationPing.enabled", false)
user_pref("nimbus.telemetry.targetingContextEnabled", false)
user_pref("telemetry.fog.init_on_shutdown", false)
user_pref("toolkit.telemetry.cachedProfileGroupID", "")
user_pref("toolkit.telemetry.dap.helper.hpke", "")
user_pref("toolkit.telemetry.dap.helper.url", "")
user_pref("toolkit.telemetry.dap.leader.hpke", "")
user_pref("toolkit.telemetry.dap.leader.url", "")
user_pref("toolkit.telemetry.server_owner", "")
user_pref("toolkit.telemetry.user_characteristics_ping.uuid", "")
user_pref("browser.newtabpage.activity-stream.telemetry.structuredIngestion.endpoint", "")
user_pref("toolkit.telemetry.reportingpolicy.firstRun", false)