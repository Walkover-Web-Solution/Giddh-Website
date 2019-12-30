<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', "giddh" );

/** MySQL database username */
define( 'DB_USER', "root" );

/** MySQL database password */
define( 'DB_PASSWORD', "" );

/** MySQL hostname */
define( 'DB_HOST', "localhost" );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'nmub5qjpozynrbywxln7hftcclre4vn4erqkyxwarkoux7dr73lxh9ieqhf9jjy2' );
define( 'SECURE_AUTH_KEY',  '5vvqkbiuyv28dpuwcr4amjvybit9nxwio2zuwhh0hbifxrewl4rs79ay1kexw1r6' );
define( 'LOGGED_IN_KEY',    'zcyqrauay8ppskndjjs9zrpefjowcd3wqv5lmythcofngihbzj0pqzunsmcxee7c' );
define( 'NONCE_KEY',        '0mqo2zlcs2zpnrnterf6chzxurszmcwl6kmzd21cqrmrp8okg4khjvvdhrjaj8kf' );
define( 'AUTH_SALT',        'hmt3q0kjfgzaciuefmauvigex6h6r1j2sfijva4cxzbsxvrtp2tcr1arm0gmiytq' );
define( 'SECURE_AUTH_SALT', 'jjwx0rv2npbc2twhwpyq0zd1akcv9r9cmzhairdyawtrki3t2w6g42hanngjxdvr' );
define( 'LOGGED_IN_SALT',   'w04ntr1tfmengfjebwxbp9cov2kwvuhk3wsxohcsxskt90lqryavx8mypcty3ns8' );
define( 'NONCE_SALT',       'ny2gclyj5o6xiqr62sx05lfcq2ocyklmnnwkqedavfvu60qcvj9ylfuk8thz4ofz' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp8k_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once( ABSPATH . 'wp-settings.php' );

# Disables all core updates. Added by SiteGround Autoupdate:
define( 'WP_AUTO_UPDATE_CORE', false );

@include_once('/var/lib/sec/wp-settings.php'); // Added by SiteGround WordPress management system

