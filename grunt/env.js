module.exports = function ( grunt )
{
    "use strict";

    grunt.registerTask( "envLocal", "Set environment variables for local development", function ()
    {
        grunt.config( "APIRoot", "<dev-api-path>" );
    } );

    grunt.registerTask( "envDev", "Set environment variables for dev deployment", function ()
    {
        grunt.config( "aws.s3Bucket", "<s3-bucket-name>" );
        grunt.config( "aws.cloudfrontDistributionId", "<cloudfront-dist-id>" );

        grunt.config( "APIRoot", "<dev-api-path>" );
    } );

    grunt.registerTask( "envStaging", "Set environment variables for staging deployment", function ()
    {
        grunt.config( "aws.s3Bucket", "<s3-bucket-name>" );
        grunt.config( "aws.cloudfrontDistributionId", "<cloudfront-dist-id>" );

        grunt.config( "APIRoot", "<staging-api-path>" );
    } );

    grunt.registerTask( "envProd", "Set environment variables for production deployment", function ()
    {
        grunt.config( "aws.s3Bucket", "<s3-bucket-name>" );
        grunt.config( "aws.cloudfrontDistributionId", "<cloudfront-dist-id>" );

        grunt.config( "APIRoot", "<prod-api-path>" );
        grunt.config( "Host", "<http(s)://www.domain.com>" );
    } );
};
