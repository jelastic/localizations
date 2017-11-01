////////////////////////////////////////////////////////////////////////////////////////////////
// This file contains string resources of the Jelastic dashboard, English version.            //
// Newly added strings for every new release are marked with the comment "Release: N.N.N".    //
// Please do not edit the keywords of the strings and also be attentive to the html encoding. //
////////////////////////////////////////////////////////////////////////////////////////////////

var GLocal = {

    //
    // Common.
    //

    LT_Common_Button_Apply						: "Apply",
    LT_Common_Button_Add						: "Add",
    LT_Common_Button_Delete						: "Delete",
    LT_Common_Button_Remove						: "Remove",
    LT_Common_Button_Edit						: "Edit",
    LT_Common_Button_Create                     : "Create",
    LT_Common_Button_Rename                     : "Rename",
    LT_Common_Button_Save						: "Save",
    LT_Common_Button_Cancel						: "Cancel",
    LT_Common_Button_Yes						: "Yes",
    LT_Common_Button_No 						: "No",
    LT_Common_Button_Settings					: "Settings",
    LT_Common_Text_Notify						: "Notify",
    LT_Common_Text_Confirm						: "Confirm",
    LT_Common_Text_Refresh						: "Refresh",
    LT_Common_Text_Error						: "Error",
    LT_Common_Text_UnknownError					: "Unknown error",
    LT_Common_Text_Yes							: "Yes",
    LT_Common_Text_No							: "No",
    LT_Common_Text_Enable						: "Enable",
    LT_Common_Text_Disable						: "Disable",
    LT_Common_Text_NextStep						: "Prev step",
    LT_Common_Text_PrevStep						: "Next step",
    LT_Common_Text_Month_Jan                    : "Jan",
    LT_Common_Text_Month_Feb                    : "Feb",
    LT_Common_Text_Month_Mar                    : "Mar",
    LT_Common_Text_Month_Apr                    : "Apr",
    LT_Common_Text_Month_May                    : "May",
    LT_Common_Text_Month_Jun                    : "Jun",
    LT_Common_Text_Month_Jul                    : "Jul",
    LT_Common_Text_Month_Aug                    : "Aug",
    LT_Common_Text_Month_Sep                    : "Sep",
    LT_Common_Text_Month_Oct                    : "Oct",
    LT_Common_Text_Month_Nov                    : "Nov",
    LT_Common_Text_Month_Dec                    : "Dec",
    LT_Common_Text_All							: "all",
    LT_Common_Text_Node							: "instance",
    LT_Common_Text_Message						: "Message",

    LT_Common_Text_RequiredField				: "Required field",
    LT_Common_Text_EmailField					: "This field must contain an email address",

    LT_Common_Text_Email                        : "Email",

    //
    // Jelastic Application
    //

    LT_Application_Title                        : "%(HOSTER_NAME) Application",

    LT_Panel_Title_Environments                 : "Environments",
    LT_Environments_Column_Name                 : "Name",
    LT_Environments_Column_Status               : "Status",
    // LT_Environments_Column_Deployed             : "Deployed",
    LT_Environments_Column_Cloudlets            : "Cloudlets",
    LT_Environments_Column_Usage                : "Usage",
    // LT_Environments_Text_NotDeployed            : "Not deployed",
    //LT_Environments_Text_Deployed               : "%(count) archives deployed",
    LT_Environments_Text_OneDeployed			: "1 archive deployed",
    LT_Environments_Status_Running              : "Running",
    LT_Environments_Status_Stopped              : "Stopped",
    LT_Environments_Status_Unknown              : "unknown",
    LT_Environments_Confirm_DeleteContext		: "Delete context %(sName)?",
//    LT_Environments_Confirm_ResetDBPassword		: "Reset password for %(sType)?",
//    LT_Environments_Confirm_RestartNode         : "Restart %(sType)?",

    LT_Environments_Validation_BusyDomain       : "Domain name %(domain) is already in use. Please try another one.",
    LT_Environments_Validation_CheckingDomain   : "Verifying domain, please wait...",

    LT_Panel_Title_Tasks                        : "Tasks",
    LT_Tasks_Column_Name                        : "Name",
    LT_Tasks_Column_Status                      : "Status",

    //
    // Hive IDE.
    //

    LT_Tab_Title_Start							: "Start",
    LT_Panel_Title_Messages						: "Messages",
    LT_Tab_Title_Services						: "Responses",
    LT_Services_Column_Method					: "Method",
    LT_Services_Column_Address					: "Method address",
    LT_Services_Column_Time						: "Response [ms]",
    LT_Services_Column_CpuTime					: "CPU [ms]",
    LT_Services_Column_Result					: "Response code",
    LT_Services_Column_Error					: "Description",
    LT_Services_Column_In						: "IN",
    LT_Services_Column_Out						: "OUT",

    LT_Menu_Toolbar_Help                        : "Help",
    LT_Menu_Toolbar_Support						: "Support",
    LT_Menu_Toolbar_Docs						: "Docs",
    LT_Menu_Toolbar_Video						: "Video",
    LT_Menu_Toolbar_Features					: "Vote for Features",

    LT_Menu_Toolbar_Signout						: "Sign out",

    // Menu panel.
    LT_Menu_Settings							: "Settings",

    LT_Menu_DeleteEnvironment                   : "Delete environment",
    LT_Menu_CloneEnvironment                   	: "Clone environment",
    LT_Menu_EditEnvironment                   	: "Change environment topology",
    LT_Menu_RunApplication                      : "Open in browser",
    LT_Menu_Start                               : "Start",
    LT_Menu_Stop                                : "Stop",
    LT_Menu_Statistics                          : "Statistics",
    LT_Menu_Config                              : "Config",
    LT_Menu_Log                                 : "Log",
    LT_Menu_Info                                : "Info",
    LT_Menu_ToRootNode                          : "Open in browser",
    LT_Menu_RestartNode                         : "Restart node",
    LT_Menu_Additionally						: "Additionally",
    LT_Menu_ResetPassword						: "Reset password",
    LT_Menu_Solutions                           : "Solutions",

    //Settings tab
    LT_Settings_Label_Domains				  	: "Custom domains",
    LT_Settings_Label_Accounts				  	: "Account Management",
    LT_Settings_Title_DomainBinding			  	: "Domain binding",
    LT_Settings_Title_SwapDomains			  	: "Swap domains",
    LT_Settings_Label_SwapDomains			  	: "Choose the environment with which you want to swap your domains and click the Swap button",
    LT_Settings_Label_Bind					  	: "Bind",
    LT_Settings_Label_Swap					  	: "Swap",
    LT_Settings_Confirm_SwapDomains             : "Swap domains between environments %(envName) and %(targetName)?",

    LT_Settings_Text_UserExist					: "User %(sUser) already exists. Please modify existing permissions instead of adding a new record.",
    LT_Settings_Validator_Domain				: "This field should be a domain name<br/>in the format: \"www.example.com\"",

    //Deploy tab
    LT_Deploy_Label_DeployTo					: "Deploy to ...",
    LT_Deploy_Label_DeployConfirm				: "Deploy %(sArchive) archive to %(sAppName) environment",
    LT_Deploy_Column_Name                       : "Name",
    LT_Deploy_Column_Comment                    : "Comment",
    LT_Deploy_Column_UploadDate                 : "Upload date",
    LT_Deploy_Column_Size                       : "Size",
    LT_Deploy_Label_Error                       : "Deployment error, please try again.",
    LT_Deploy_Text_ChooseArchive                : "Choose archive from the Deployment manager.",
    LT_Deploy_Text_NotDeployed                  : "Not deployed",

    //Statistics tab
    LT_Statistics_Button_AutoRefresh            : "Auto refresh",
    LT_Statistics_Label_Time                    : "Time",
    LT_Statistics_Text_Interval                 : "Interval",
    LT_Statistics_Text_Duration                 : "Duration",
    LT_Statistics_Text_IntervalMin              : "min",
    LT_Statistics_Text_IntervalHour             : "hour",
    LT_Statistics_Text_IntervalHours            : "hours",
    LT_Statistics_Text_IntervalDay              : "day",
    LT_Statistics_Text_IntervalWeek             : "week",

    //Config tab
    LT_Config_Button_New                        : "New",
    LT_Config_Text_LoadingError                 : "Loading error: ",

    //Log tabs
    LT_Log_Error								: "Log request failed: %(sError)",
    LT_ActionsLog_Title                         : "%(sAppName) : %(sType) : actions",
    LT_ActionsLog_Text_NodeId                   : "Node ID : %(sNode)",


    // Dialogs.
    LT_Signup_Label_Email 						: "Email",
    LT_Signup_Label_Password					: "Password",
    LT_Signup_Label_Name						: "Name",
    LT_Signup_Label_Info						: "Once the account is created, we will send you the activation link via email. Please check that it does not go to your spam folder.",
    LT_Signup_Button_CreateAccount				: "Create account",
    LT_Signup_Title_Dialog						: "New account",
    LT_Signin_Label_Email 						: "Email",
    LT_Signin_Label_Password					: "Password",
    LT_Signin_Label_Info						: "Supports Google [@gmail.com], Yahoo and Yandex accounts without registering.",
    LT_Signin_Label_RememberMe                  : "Remember me",
    LT_Signin_Button_Enter						: "Login",
    LT_Signin_Title_Dialog						: "Developer authentication",
    LT_Signin_Label_ForgotPassword 				: "Forgot password?",
    LT_Signin_Label_Support 					: "Support",
    LT_Signin_Label_Signup 						: "Signup",
    LT_ChangePassword_Label_OldPassword			: "Current password",
    LT_ChangePassword_Label_NewPassword			: "New password",
    LT_ChangePassword_Label_ConfirmPassword		: "Confirm password",
    LT_ChangePassword_Validation_Passwords		: "Passwords do not match",
    LT_ChangePassword_Button_Change				: "Change password",
    LT_ChangePassword_Title_Dialog				: "Change password",
    LT_Upload_Title_Dialog						: "Uploading",
    LT_Upload_Label_Local_File					: "Local file",
    LT_Upload_Button_Browse						: "Browse...",
    LT_Upload_Button_Upload						: "Upload",
    LT_Upload_Text_Invalid_Format				: "Please only upload files that have extensions:  %(sFormats)",
    LT_UploadArchive_Title_Dialog				: "Upload archive",
    LT_UploadArchive_Label_Empty_Text			: "Select an archive",
    LT_UploadFile_Title_Dialog                  : "Upload file",
    LT_UploadFile_Label_Empty_Text			    : "Select a file",
    LT_DeployArchive_Title_Dialog				: "Deploy to %(sAppName)",
    LT_DeployArchive_Button_Deploy				: "Deploy",
    LT_DeployArchive_Label_Context				: "Context",

    LT_EnvironmentSettings_Title_Dialog         : "Environment topology",
    LT_EnvironmentSettings_Label_WhatIsThis     : "What is this?",
    LT_EnvironmentSettings_Label_Name           : "Environment name",
    LT_EnvironmentSettings_Label_ComputeStack   : "Compute stack",
    LT_EnvironmentSettings_Label_CloudletCount  : "Cloudlets per instance",
    LT_EnvironmentSettings_Label_DatabaseSQL    : "Database SQL",
    LT_EnvironmentSettings_Label_DatabaseNoSQL  : "Database NoSQL",
    LT_EnvironmentSettings_Text_NotValidName    : "Not a valid environment name.",
    LT_DeleteEnvironment_Title_Dialog           : "Delete environment",
    LT_DeleteEnvironment_Label_Password		    : "Password",

    LT_EnvironmentWizard_Label_HTTPRequests    	: "HTTP Requests",
    LT_EnvironmentWizard_Label_Statics    		: "Statics",
    LT_EnvironmentWizard_Label_Balancer    		: "Balancer",
    LT_EnvironmentWizard_Label_SQL		    	: "SQL",
    LT_EnvironmentWizard_Label_NoSQL	    	: "NoSQL",
    LT_EnvironmentWizard_Label_SQLTerms	    	: "Free 1 GB, 128 MB RAM",
    LT_EnvironmentWizard_Label_NoSQLTerms    	: "Free 1 GB, 128 MB RAM",
    LT_EnvironmentWizard_Label_Cloudlets	   	: "Cloudlet(s)",
    LT_EnvironmentWizard_Label_Count    		: "count limit",
    LT_EnvironmentWizard_Label_PerInstance    	: "per app server",
    LT_EnvironmentWizard_Label_Memory	    	: "memory",
    LT_EnvironmentWizard_Label_Mb		    	: "MB",
    LT_EnvironmentWizard_Label_CPU		    	: "cpu",
    LT_EnvironmentWizard_Label_MHz		    	: "MHz",
    LT_EnvironmentWizard_Label_SSL          	: "SSL",
    LT_EnvironmentWizard_Label_ApproxCost    	: "(approx. monthly cost)",
    LT_EnvironmentWizard_Label_BetaTitle		: "Beta-test restrictions:",
    LT_EnvironmentWizard_Label_BetaRestrictions	: "4 computing instances per environment<br/>16 cloudlets per computing instance<br/>"+
        "1 GB HDD per computing instance<br/>3 environments per account<br/>",
    LT_EnvironmentWizard_Label_Name		    	: "Name",

    // LT_EnvironmentWizard_Hint_Instance			: 	"<p class=\"dfn\">Need more instances?</p>"+
    // "<p>During beta testing we are limiting the number of compute instances to 2. Each node gets automated vertical scaling &mdash; should the load increase, more CPU and RAM are automatically added. Two autoscaling nodes should provide sufficient scalability and high-availability for most applications.</p>"+
    // "<div class=\"horiz-scaling\">&nbsp;</div>"+
    // "<p>We plan to provide the ability to run more instances and provide more horizontal scaling options in a future update.</p>"+
    //     "<p>If you need this functionality urgently &mdash; please <a href=\"http://support.jelastic.com\">contact us</a>. We would like to learn more about your application and see if we can help you.</p>",

    LT_EnvironmentWizard_Hint_Databaces			:   "<div class=\"dfn\">MariaDB &mdash; a special offer from MariaDB and %(PLATFORM_VENDOR_NAME) </div>"+
        "<p class=\"indent\">MariaDB is a binary drop in replacement of MySQL. For existing MySQL applications, no data conversion or other changes are required, your existing applications will run unchanged on MariaDB.</p>"+
        "<a href=\"http://mariadb.org/\" target=\"_blank\" class=\"logo\">%(logoImg)</a>"+
        "<p class=\"indent\">MariaDB was developed by the original MySQL core team architects and is led by <a target=\"_blank\" href=\"http://en.wikipedia.org/wiki/Michael_Widenius\">Michael \"Monty\" Widenius</a>, the founder of MySQL, MySQL Ab and Monty Program Ab.</p>"+
        "<p class=\"indent\">%(PLATFORM_VENDOR_NAME) will provide support for your MariaDB and MySQL databases, backed by the original developers of MariaDB. By working with %(PLATFORM_VENDOR_NAME), you can be sure that there will be ongoing support and development of MariaDB.</p>",


    LT_RecoverPassword_Title_Dialog	            : "Recover password",
    LT_RecoverPassword_Button_Recover           : "Recover",
    LT_RecoverPassword_Label_Info               : "If you have forgotten your password, we can send a new password to the email address registered with your account.",

    LT_ChangeCloudletsCount_Title_Dialog        : "Change cloudlets limit",
    LT_ChangeCloudletsCount_Label_PerInst      	: "Per instance",
    LT_ChangeCloudletsCount_Label_Used        	: "Used",
    LT_ChangeCloudletsCount_Label_Limit			: "Limit",
    LT_ChangeCloudletsCount_Label_TotalEnv		: "Total environment",
    LT_ChangeCloudletsCount_Label_Instance		: "instance",

    LT_Signout_Confirm_EnvironmenCreating		: "Environment is currently being created. Do you really want to log off?",

    // Process messages.

    LT_Process_Label_Clone						: "Сloning application...",
    //LT_Process_Label_Creating					: "Creating %(sName)...",
    LT_Process_Label_Saving						: "Saving...",
    LT_Process_Label_Removing					: "Removing %(sName)...",
    LT_Process_Label_Waiting					: "Waiting...",
    LT_Process_Label_Deploying 					: "%(sName) being deployed...",
    LT_Process_Label_CheckSign					: "Connecting to the authentication service, please wait...",

    LT_Process_Label_GetApps					: "Loading your data, please wait...",
    LT_Process_Label_GenerateApp				: "Preparing the environment for your application, please wait...",
    LT_Process_Label_DeleteApp					: "Removing your application, please wait...",
    LT_Process_Label_RebuildApp					: "Rebuilding your application, please wait...",
    LT_Process_Label_RemoveField				: "Removing field %(sName)...",
    LT_Process_Label_DefineType					: "Creating the type %(sName)...",
    LT_Process_Label_UndefineType				: "Removing type %(sName)...",
    LT_Process_Label_GetSolution				: "Loading solution %(sAppid) ...",

    LT_Process_Label_Starting                   : "Starting...",
    LT_Process_Label_Restarting                 : "Restarting...",
    //LT_Process_Label_Stopping                   : "Stopping...",
    LT_Process_Label_UploadingStatus            : "%(sUploaded) KB of total %(sTotal) KB",
    LT_Process_Label_Loading                    : "Loading...",
    LT_Process_Label_Deleting                   : "Deleting...",
    LT_Process_Label_Creating                   : "Creating...",
    LT_Process_Label_Renaming					: "Renaming...",
    LT_Process_Label_DeployingText              : "Deploying...",
    LT_Process_Label_ResettingPass              : "Resetting password...",
    LT_Process_Label_Cloning					: "Cloning...",

    // Notify messages.
    LT_Notify_Title_Info						: "Information",
    LT_Notify_Label_NeedAppName					: "Please specify the application name first.",
    LT_Notify_Label_NeedPassword  				: "As a safety measure, we require that you type your %(HOSTER_NAME) account password before continuing.",
    LT_Notify_Label_AutoSaved					: "Saved automatically in %(sTime)",
    LT_Notify_Label_CreateAccount				: "Registration was successful. Please check your email for the activation link."
        + "<hr />Check mail for <a href='%(sEmailUrl)'>%(sEmailUrl)</a>",
    LT_Notify_Label_RecoverPassword             : "A new password has been emailed to the address you provided.",
    LT_Notify_Label_ChooseEnvironment           : "Choose environment in the environments panel.",
    LT_Notify_Label_SelectFolder                : "Please select a folder.",
    LT_Notify_Label_SelectItem                  : "Please select an item.",
    LT_Notify_Label_ContextExists               : "Context %(sContext) is already in use.",
    LT_Notify_Label_FolderExists                : "Folder with the specified name already exists.",
    LT_Notify_Label_FileExists                  : "File with the specified name already exists.",
    LT_Notify_Label_WaitDeploying               : "Please wait until the current deployment task is finished.",
    LT_Notify_Label_WaitContext					: "Please wait until the current context is unblocked.",
    LT_Notify_Label_EnvironmenStopped           : "The environment %(envname) is stopped. Run it and try again",
    LT_Notify_Label_EnvironmenUnavailable       : "The environment %(envname) is unavailable. Please try again later",
    LT_Notify_Label_EnvironmenCreated			: "Environment was successfully created. Detailed information was sent to your email.",
    LT_Notify_Label_EnvironmenLaunching			: "Creating the environment. This may take several minutes to complete.",
    LT_Notify_Label_EnvironmenCloning			: "Cloning environment '%(envName)'. This may take several minutes to complete.",
    LT_Notify_Label_EnvironmenCloned			: "Environment '%(envName)' successfully cloned. Detailed information was sent to your email.",
    LT_Notify_Label_ResetDBPasswordSuccess		: "Your password for %(sType) was successfully reset."+
        "<hr />The new password was sent to the email associated with your account",
    // LT_Notify_Label_ResetDBPasswordFailed       : "Password reset for %(sType) failed" +
    //     "<hr /> Please try again or contact <a target='_blank' style='text-decoration:underline' href='http://support.jelastic.com'>support</a>",
    LT_Notify_Label_DeleteEnvironment			: "After the environment %(envname) is deleted all the data will be permanently lost!",
    LT_Notify_Label_DomainBound					: "We are binding your domain now. This may take several minutes to complete.",
    LT_Notify_Label_DomainsSwap					: "Domains %(envName) and %(targetName) are being swapped. This may take several minutes to complete.",

    // LT_Notify_Label_DeprecatedBrowser			: "<div class='title'>Your current browser is not officially supported.</div>"+
    //     "<div class='message'>Some of the functions might not work properly within your browser. We recommend you to use one of the following browsers:</div>",

    // Tasks
    LT_Task_Status_Success                      : "Success",
    LT_Task_Status_Failed                       : "Failed",
    LT_Task_Status_NullResponse                 : "Response is null",
    LT_Task_Status_UploadingSuccess             : "Success [total %(sTotal) KB]",
    LT_Task_Status_ConfigurateNewProject        : "Configure new project",
    LT_Task_GetProjects                         : "Get projects",
    LT_Task_DeployArchiveTo                     : "Deploy %(sArchive) archive to %(sAppName) environment",
    LT_Task_UploadingFile                       : "Uploading: %(file)",
    LT_Task_LoadArchives                        : "Load archives for %(sProjectName) project",
    LT_Task_DeployApplication                   : "Deploy %(sAppName) application to %(sAppid)",
    LT_Task_CheckAuthentication                 : "Check authentication",
    LT_Task_CreateEnvironment                   : "Create environment %(sAppName)",
    LT_Task_StartingEnvironment                 : "Starting environment %(sAppName)",
    LT_Task_StoppingEnvironment                 : "Stopping environment %(sAppName)",
    LT_Task_RestartingEnvironment               : "Restarting environment %(sAppName)",
    LT_Task_DeleteApplication                   : "Delete application %(sAppName)",
    LT_Task_CloneApplication                   	: "Clone application %(sAppName)",
    LT_Task_CreateNewProject                    : "Create new project %(sProjectName)",
    LT_Task_ChangingCloudletsCount              : "Changing cloudlets limit for %(sAppName) from %(prevCount) to %(newCount)",
    LT_Task_RenameContext						: "Renaming context of %(sAppName) from %(oldContext) to %(newContext)",
    LT_Task_DeleteContext						: "Deleting context %(sContext) from %(sAppName)",
    LT_Task_RemoveLib                           : "Removing %(sArchive) from %(sAppName) environment",
    LT_Task_ResetDBPassword                     : "Resetting password for %(sType)",

    // Error messages.
    LT_Error_Label_AutoSaved					: "Error saving %(sTime)",
    LT_Error_Label_AccessDenied					: "This action is not available" +
        "<hr />Access denied.",

    //
    // Hivext Service error.
    //

    LT_E_Platform_501 							: "Invalid email address format",
    LT_E_Platform_502 							: "Email address is already registered in the system",
    LT_E_Platform_503 							: "Email address does not exist",
    LT_E_Platform_504 							: "Password contains characters that are not supported",
    LT_E_Platform_505 							: "The activation key is not correct. It is incorrect or has already been used for activation.",
    LT_E_Platform_506 							: "Email address is not registered with %(HOSTER_NAME). Please enter a registered account email or sign-up for a new %(HOSTER_NAME) account.",
    LT_E_Platform_601 							: "The mail server is currently not available. Please try later.",
    LT_E_Platform_701 							: "Authentication error",
    LT_E_Platform_702 							: "User is not authenticated",
    LT_E_Platform_704 							: "User blocked",
    LT_E_Platform_707							: "The specified user does not exist in the system.<br />Maybe you mistyped the username or password?",
    LT_E_Platform_801							: "Invalid password!",
    LT_E_Platform_904							: "You have reached the maximum number of applications for a single developer",
    LT_E_Platform_1001 							: "Data type is not compatible",
    LT_E_Platform_1002 							: "Data type with the specified name already exists",
    LT_E_Platform_1003 							: "Data type with the specified name does not exist",
    LT_E_Platform_1008 							: "The specified field is reserved",
    LT_E_Platform_1009 							: "The specified field does not exist",
    LT_E_Platform_1203 							: "Attempt to write a feature with a special type of data",
    LT_E_Platform_1708 							: "This annotation is not supported. Please check the record.",
    LT_E_Platform_2007 							: "Illegal character in file name.",

    LT_E_Platform_10001							: "Access is limited to beta users and administrators",

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Review date : 07.08.2011
    // TODO : Sort all constants below after next review
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    LT_Menu_Packages                            : "Packages",
    LT_Log_Label_EmptyFile                      : "%(fileName) is empty",

    //Packages tab
    LT_Package_Title			                : "%(sAppName) : %(sType) : packages",
    LT_Package_Text_Loading                     : "Loading...",
    LT_Package_Label_Install                    : "Install",
    LT_Package_Label_Uninstall                  : "Uninstall",
    LT_Package_Label_Sort                       : "Sort",

    LT_Upload_Label_UploadError 				: "An error occurred while trying to upload the files",
    LT_Upload_Label_FilesCount                  : "The total number of files may not exceed %(fileCount)",
    LT_Task_RestartingNode                      : "Restarting node %(sAppName) : %(sType)",
    LT_Environments_Status_Sleeping             : "Sleeping",

    // Notify messages.
    LT_Notify_Title_Warning                     : "Warning",
    LT_Notify_Title_Error                       : "Error",

    LT_EnvironmentSettings_E_NoRights           : "You do not have permission to change the settings of %(envname)",
    LT_EnvironmentSettings_E_NoUser             : "User %(sUser) does not exist.",

    // LT_Error_Label_UserNoGroup 					: "You need to register for the %(HOSTER_NAME) beta instead." +
    //     "<br><br>When you click OK you will be redirected to the %(HOSTER_NAME) home page. Please input your email address there and select Sign Up." +
    //     "<br><br>Once you sign up for a new account, we will send you an email with the beta activation instructions.",

    LT_Task_Name_1	                            : "Getting info about %(env)",
    LT_Task_Name_3	                            : "Deleting environment %(env)",
    LT_Task_Name_4	                            : "Starting environment %(env)",
    LT_Task_Name_5	                            : "Stopping environment %(env)",
    LT_Task_Name_6	                            : "Restarting environment %(env)",
    LT_Task_Name_7	                            : "Restarting node(s) %(name) of %(env)",
    LT_Task_Name_8	                            : "Setting cloudlets count for %(env)",
    LT_Task_Name_9	                            : "Deploying context %(context) to %(env)",
    LT_Task_Name_10	                            : "Removing context %(context) from %(env)",
    LT_Task_Name_11	                            : "Renaming context from %(oldcontext) to %(newcontext)",
    LT_Task_Name_12	                            : "Adding %(name) node to %(env)",
    LT_Task_Name_13	                            : "Adding %(name) node to %(env)",
    LT_Task_Name_14	                            : "Adding %(name) node to %(env)",
    LT_Task_Name_15	                            : "Getting logs for %(env)",
    LT_Task_Name_16	                            : "Reading log from %(env)",
    LT_Task_Name_17	                            : "Linking nodes in %(env)",
    LT_Task_Name_18	                            : "Replicating nodes in %(env)",
    LT_Task_Name_19	                            : "Resetting password for %(name) of %(env)",
    LT_Task_Name_20	                            : "Cloning env %(srcenv) to %(targetenv)",
    LT_Task_Name_21	                            : "Installing package %(pkg) to %(env)",
    LT_Task_Name_22	                            : "Uninstalling package %(pkg) from %(env)",
    LT_Task_Name_23	                            : "Removing log from %(env)",
    LT_Task_Name_24	                            : "Removing node %(name) from %(env)",
    LT_Task_Name_25	                            : "Adding %(count) compute node(s) to %(env)",
    LT_Task_Name_26	                            : "Changing settings of %(env)",
    LT_Task_Name_27	                            : "Adding %(name) node to %(env)",
    LT_Task_Name_28	                            : "Building %(project) in %(env)",
    LT_Task_Name_29	                            : "Building %(project) in %(env)",
    LT_Task_Name_30	                            : "Finish",
    LT_Task_Name_32	                            : "Building cluster in %(env)",
    LT_Task_Name_34	                            : "Adding %(name) node to %(env)",
    LT_Task_Name_36	                            : "Restarting node(s) %(name) of %(env)",
    LT_Task_Name_38	                            : "Adding %(name) node to %(env)",


    LT_Text_DatabaseInfo                        : "<p>To work with the database, follow these steps:<ol>"+
        "<li>Check your email to receive your <b>login</b> and <b>password</b> for ROOT user</li>"+
        "<li>Login to <a target=_blank href='%(url)'>" +
        "admin page</a> using <b>login</b> and <b>password</b> for ROOT user</li>" +
        "<li>There, you can create your own database</li>"+
        "<li>Then create a new user (set <b>user_name</b> and <b>user_password</b>)</li>"+
        "<li>Insert this <b>user_name</b> and <b>user_password</b> into the connection string to link your database to your app</li></ol><p>",

    LT_Text_NodeInfo_MoreInfo                   : "<p>For additional information please visit our <a target=_blank href='%(url)'> documentation page </a></p>",

    LT_Common_Button_Clear						: "Clear",

    LT_Common_Button_FullScreen					: "Full Screen",

    LT_Log_AlreadyEmpty                         :"%(file) is already empty!",

    LT_Common_Text_Common					    : "Common",

    LT_Menu_AdminPanel                          : "Admin panel",

    LT_EnvironmentWizard_Label_ApplyingSettings : "Applying settings...",

    LT_SolutionWizard_Title                     : "JavaAppStore - Installing %(name)",

    LT_SolutionWizard_Error_SolutionNotExists   : "The solution does not exist!",


    LT_ActivateCoupon_Title_Dialog              : "Coupon activation",

    LT_ActivateCoupon_Label_PromoCode           : "Promotional code",

    LT_ActivateCoupon_Label_Info                : "Enter your promotion code and get up to 4GB of RAM for your application servers.",

    LT_ActivateCoupon_Button_Activate           : "Activate",

    LT_ActivateCoupon_Error_Activate            : "Invalid promotional code!",

    LT_Proccess_Label_Activation                : "Activating...",

    LT_Notify_Label_CouponActivated             : "Activation successful. <br />  Now you can get up to 4 GB of RAM for your application servers!",

    LT_BuildNode_Title_AddProject               : "Add project",
    LT_BuildNode_Title_EditProject              : "Edit project",
    LT_BuildNode_Label_Build                    : "Build",
    LT_BuildNode_Label_BuildDeploy              : "Build and deploy",
    LT_BuildNode_Confirm_DeleteProject          : "Delete project \"%(sName)\"?",
    LT_BuildNode_Confirm_BuildProject           : "Build project \"%(sName)\"?",
    LT_BuildNode_Confirm_BuildAndProject        : "Build and deploy project \"%(sName)\"?",
    LT_Proccess_Label_AddingProject             : "Adding project...",
    LT_Proccess_Label_ChangeProject             : "Changing project...",
    LT_Process_Label_Building                   : "Building...",
    LT_Process_Label_GettingProject             : "Getting project...",

    LT_Common_Text_Name                         : "Name",
    //LT_Common_Text_Path                         : "URL",
    LT_Common_Text_Login                        : "Login",
    LT_Common_Text_Password                     : "Password",
    LT_Common_Text_Environment                  : "Environment",
    LT_Common_Text_Context      				: "Context",
    LT_Common_Text_Repository					: "Repository",

    // LT_Signin_Label_Registration				: "<b>We have just emailed you the password</b> to the account. If you have not received the email, please verify the email address and check your bulk/spam email folder. If you still cannot access your account - please contact us at <a class=\"email\" href=\"%(HOSTER_TRIAL_SUPPORT)\">%(text)</a>",

    LT_Process_Label_Signing					: "Signing in...",
    LT_Process_Label_SigningOut					: "Signing out...",

    LT_Common_Label_Balance                     : "User balance",
    LT_DeployArchive_InvalidContext             : "Invalid context name",

    LT_Billing_Title                            : "Billing history",
    LT_Billing_Column_Env                       : "Environment",
    LT_Billing_Column_Event                     : "Event name",
    LT_Billing_Column_Cost                      : "Cost",
    LT_Billing_Column_Usage                     : "Paid Usage",
    LT_Billing_Label_OverallCost                : "Overall cost",

    LT_Common_Text_StartDate            		: "Start",
    LT_Common_Text_EndDate            		    : "End",
    LT_Common_Text_Interval            		    : "Interval",
    LT_Common_Text_Close            		    : "Close",
    LT_Common_Text_Items                        : "item(s)",

    LT_Common_Text_Interval_3600                : "hour",
    LT_Common_Text_Interval_86400               : "day",
    LT_Common_Text_Interval_604800              : "week",
    LT_Common_Text_Interval_2592000             : "month",

    LT_Environments_Validation_ErrorDomain      : "An error occurred while verifying the domain. Please try again later.",

    LT_Statistics_Label_UpdateData              : "An error occurred while trying to update the statistical data for the environment '%(envName)'",

    LT_E_Platform_99 							: "An unknown error has occurred. Please try again later. We apologize for the inconvenience.",
    LT_Error_Label_ServiceUnavailable           : "The service is unavailable. Please try again later. We apologize for the inconvenience.",

    LT_ChangePwd_Error_WrongPassword            : "Incorrect password!",
    LT_ChangePwd_Text_Success                   : "Password was successfully changed.",
    LT_Menu_Toolbar_Coupon                      : "Activate coupon",
    LT_Common_Text_Clone                        : "Clone",
    LT_Common_Text_Prev                         : "Prev",
    LT_Common_Text_Next                         : "Next",
    LT_Common_Text_URL                          : "URL",
    LT_Common_Text_Comment                      : "Comment",
    LT_BugReport_Title                          : "Error Reporter",
    LT_BugReport_Text_Intro                     : "To help us diagnose and fix the problem, you can send us an error report.",
    LT_BugReport_Text_SentSuccess               : "The report has been sent successfully. Thank you!",
    LT_GOut_Label_SendReport                    : "Send report",
    LT_Upload_Validation_URL                    : 'This field should have a URL in the format<br/>'+
        '"http://www.example.com/",<br/>'+
        '"ftp://www.example.com/" or <br/>'+
        '"ftp://login:pass@www.example.com/"',
    LT_Upload_FileNotFound                      : "File not found!",
    LT_Process_Label_Uploading					: "Uploading...",
    LT_Upload_EmptyURL                          : "http://... or ftp://...",
    LT_BugReport_Label_Comment                  : "Comment",
    LT_BugReport_Label_Details                  : "Details",
    LT_BugReport_Label_SendReport               : "Send report",
    LT_Common_Text_Install                      : "Install",
    LT_Common_Text_General                      : "General",
    LT_Common_Text_Topology                     : "Topology",
    LT_Common_Text_Version                      : "Version",
    LT_Common_Text_Category                     : "Category",
    LT_Common_Text_Updated                      : "Updated",
    LT_Common_Text_Price                        : "Price",
    LT_Common_Text_Description                  : "Description",
    LT_Common_Text_Errors                       : "Errors",
    LT_Common_Text_FulScreen                    : "Full Screen",
    LT_Common_Text_Branch                       : "Branch",
    LT_Common_Text_Right                        : "Right",
    LT_Common_Text_Summary                      : "Summary",
    LT_RowEditor_CommitChangesText              : "You need to commit or cancel your changes",
    LT_DeployArchive_EmptyText                  : "Select a context",
    LT_ConfigManager_NewFolder                  : "New folder",
    LT_ConfigManager_NewConfig                  : "NewFile_",
    LT_ConfigManager_NewDir                     : "NewDir_",
    LT_Topology_Requests                        : "Requests",
    //LT_EnvWizard_BuildNode                      : "Build node",

    //LT_EnvWizard_AppLogic                       : "Application logic",
    //LT_EnvWizard_SqlDatabase                    : "SQL Databases",
    //LT_EnvWizard_NoSqlDatabase                  : "NoSQL Databases",
    LT_EnvWizard_VScaling                       : "Vertical Scaling",
    //LT_EnvWizard_CloudletsLimit                 : "Cloudlets limit",
    LT_EnvWizard_Software                       : "Software",
    LT_EnvWizard_JdkVersion                     : "JDK version",
    LT_EnvWizard_HScaling                       : "Horizontal Scaling",
    LT_EnvWizard_Instances                      : "Instances",

    LT_Units_Kb                                 : "KB",
    LT_Units_Mb                                 : "MB",
    LT_Units_Gb                                 : "GB",

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Added : 11.01.2012
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//    LT_EnvWizard_Hint_Ssl                       : "Switch on SSL",
//    LT_EnvWizard_Hint_Balancer                  : "Balancer",
//    LT_EnvWizard_Hint_Compute                   : "REC - Runtime Execution Container",
//    LT_EnvWizard_Hint_HScaling                  : "Horizontal scaling",
//    LT_EnvWizard_Hint_AppServers                : "Application servers type & version",
//    LT_EnvWizard_Hint_JDK                       : "JDK version",
//    LT_EnvWizard_Hint_PHP                       : "PHP version",
//    LT_EnvWizard_Hint_Build                     : "Build node",
//    LT_EnvWizard_Hint_Sql                       : "SQL Database",
//    LT_EnvWizard_Hint_NoSql                     : "NoSQL Database",

    LT_EnvWizard_Warning_Common                 : "<span class=\"attention\">Attention!</span> The current configuration of some components may be irreparable or affect performance.",

    LT_EnvWizard_ApacheModule                   : "Module",

    LT_EnvironmentWizard_Hint_BuildNode			:   "<div class=\"dfn\"><span class=\"gray\"></span>Commit &mdash; Build &mdash; Deploy Workflow</div>" +
        "<img src=\"./jelastic/env/images/topology/build-process.png\" width=\"507\" height=\"133\">" +
        "<div class='labels'>" +
        "<div class='ide'><span>IDE</span><p>Commit to repository</p></div>" +
        "<div class='svn'><span>Repository</span><p>SVN or Git</p></div>" +
        "<div class='build'><span>Build node</span><p>Build and deploy to environment</p></div>" +
        "<div class='env'><span>Environment</span><p>Pushing code to all nodes</p></div>" +
        "</div>",

    LT_Common_Text_Language                     : "Language",
    LT_Signin_Label_ResetPassword 				: "Reset password",

    LT_Upload_Error_MaxSize                     : "The maximum file size that you can upload from a local computer is %(size). Please try and upload the file from a URL.",
    LT_Upload_Error_Upload   				    : "An error occurred while trying to upload files: %(msg)",

    LT_BuildNode_Warning_NameExist              : "Project with current name already exists!",
    LT_BuildNode_Warning_InvalidName            : "Invalid project name",
    LT_Common_Text_InvalidData                  : "Invalid data",


    ////////////////////////////////////////////////////////////

    LT_Warning_Label_Browser_Title              : "Your current browser is not officially supported by the platform.",
    LT_Warning_Label_Browser_Message            : "Some of the functions might not work properly. We recommend you to use one of the following browsers:",

    LT_DeployArchive_Label_SelectContext        : "Select one of the existing contexts or type new.",
//    LT_DeployArchive_Label_SelectDeployment     : "Select w.",

    LT_ConfigManager_NewFile                    : "New file",

    LT_EnvWizard_Label_GetTariffs               : "Get tariffs...",

    LT_Tasks_Column_Date                        : "Date",

    LT_Units_ms                                 : "ms",
    LT_Statistics_Label_RAM                     : "RAM usage",
    LT_Statistics_Label_CPU                     : "CPU usage",
    LT_Statistics_Label_HDD                     : "Disk usage",

    LT_Statistics_Chart_Title                   : "%(label), [%(unit)]",

    LT_Menu_Billing_ViewStat                    : "View statistics",
    LT_Menu_Billing_BillStat                    : "Billing / statistics",
    LT_Menu_Billing_RefillAccount               : "Refill balance",

    LT_Error_Template                           : "An error occurred while trying to %(action)",
    LT_Action_Deploy                            : "deploy archive",
    LT_Action_BindExtDomain                     : "bind external domain",
    LT_Action_RemoveExtDomain                   : "remove external domain",
    LT_Action_SwapExtDomains                    : "swap external domains",
    LT_Action_CreateEnv                         : "create environment",
    LT_Action_DeleteEnv                         : "delete environment",
    LT_Action_StartEnv                          : "start environment",
    LT_Action_StopEnv                           : "stop environment",
    LT_Action_CloneEnv                          : "clone environment",
    LT_Action_ResetDbPass                       : "reset password",
    LT_Action_SaveFile                          : "save file",
    LT_Action_CreateDir                         : "create directory",
    LT_Action_CreateFile                        : "create file",
    LT_Action_RenameFile                        : "rename file",
    LT_Action_DeleteFile                        : "delete file",
    LT_Action_Upload                            : "upload file",
    LT_Action_UploadFiles                       : "upload file(s)",
    LT_Action_RenameContext                     : "rename context",
    LT_Action_DeleteContext                     : "delete context",
    LT_Action_RestartNode                       : "restart node",
    LT_Action_Build                             : "build project",
    LT_Action_GetLogs                           : "get logs",
    LT_Action_ReadLog                           : "read log",
    LT_Action_RemoveLog                         : "remove log",
    LT_Action_ClearLog                          : "clear log",
    LT_Action_ResetPassword                     : "reset password",
    LT_Action_ChangePassword                    : "change password",
    LT_Action_ActivateCoupon                    : "activate coupon",
    LT_Action_CreateSolution                    : "create solution",
    LT_Action_ChangeTopology                    : "change topology",
    LT_Action_AddProject                        : "add project",
    LT_Action_EditProject                       : "edit project",
    LT_Action_LoadFiles                         : "load files",

    // LT_Config_NotSelected                       : "Please select the file in the left-hand panel.",

    LT_Units_MHz                                 : "MHz",

    LT_EnvWizard_Btn_Refill                     : "Refill",

    LT_Error_NotBillingUser                     : "There was an error while retrieving your account information. Please contact our support team.",

    LT_Menu_Billing_RefreshBalance              : "Refresh balance",

    //TODO: remove LT_Error_Label_UserNoGroup from all localization files!
    LT_Error_Label_UserHasNoHXGroups            : "You need to be a registered %(HOSTER_NAME) user in order to login.",

    LT_Error_SuspendedAccount_Billing           : "Your account has been temporarily deactivated due to lack of funds. Please refill your account to continue using the service.",

    LT_Menu_Toolbar_SendEmail	    			: "Send email",
    LT_Menu_Toolbar_SupportForum    			: "Contact support",

    // LT_SendEmail_Title                          : "Send an email",
    LT_SendEmail_Text_SentSuccess               : "The email has been sent successfully. Thank you!",

    LT_Common_Button_Send                       : "Send",
    LT_BugReport_Text_YourComment               : "Describe what caused/created this error…",

    LT_SignupDlg_Label_Signup                   : "Sign Up!",
    LT_SignupDlg_Label_Info                     : "<b>Sign Up for Free!</b> Signing up confirms that you have read and agree to the <a href=\"%(sTermsUrl)\" target=\"_blank\">Terms of Service</a> and our <a href=\"%(sPolicyUrl)\" target=\"_blank\">Privacy Policy</a>.",

    LT_Signin_Label_SignupFailed				: "<b>Account registration failed</b>. We suspect that this is due to network issues - so please try again in a few minutes. If your second attempt fails please email us at <a class=\"email\" href=\"%(HOSTER_TRIAL_SUPPORT)\">%(text)</a> and we will assist you.",
    //LT_Signin_Label_SuspendedAccount            : "Your account has been suspended for violating the <a href=\"%(sTermsUrl)\" target=\"_blank\">Terms of Service</a>. For additional information, please contact us at <a class=\"email\" href=\"mailto:%(sSupportEmail)\">%(sSupportEmail)</a>",
    LT_Signin_Label_SuspendedAccount            : "Your account has been suspended. Please contact support via the <a href=\"%(HOSTER_SUPPORT)\" target=\"_blank\">%(HOSTER_NAME) portal</a> for questions related to this suspension.",
    LT_Process_Label_SigningUp					: "Signing up...",

    LT_ResetPswdDlg_Label_ResetFailed	        : "An error occurred while trying to reset your password. We suspect that this is due to network issues - so please try again in a few minutes. If your second attempt fails please email us at <a class=\"email\" href=\"%(HOSTER_TRIAL_SUPPORT)\">%(text)</a>",
    LT_ResetPswdDlg_Label_NotRegistered         : "The above email is not registered in our system. Please check the spelling of the email address or <a action=\"signup\">sign up</a> for a new account.",
    LT_Error_Label_AuthFailed 					: "Incorrect email address or password. You may <a action=\"reset-password\">reset your password</a>.",

    //LT_Quotas_Title                             : "Quotas System",
    LT_Quotas_Column_Quota                      : "Quota",
    LT_Quotas_Column_Trial                      : "Trial",
    //LT_Quotas_Column_Billing                    : "Billing",

//    LT_Quotas_Label_Activate                    : "Activate",
//    LT_Quotas_Label_MaxEnvCount                 : "Max. environments amount",
//    LT_Quotas_Text_MaxEnvCount                  : "The maximum number of environments that can be created.",
//    LT_Quotas_Label_MinBalance                  : "Minimal balance",
//    LT_Quotas_Text_MinBalance                   : "The minimal amount of money in the account, which allows you to create your environment.",
//    LT_Quotas_Label_MaxCPRecCount               : "Max. containers amount (REC)",
//    LT_Quotas_Text_MaxCPRecCount                : "The maximum number of containers that can be added to the environment.",
//    LT_Quotas_Label_MaxCloudlets                : "Max. cloudlets amount per container (REC)",
//    LT_Quotas_Text_MaxCloudlets                 : "The maximum number of cloudlets, which can be installed on each container (REC).",
//    LT_Quotas_Label_HA                          : "High-availability",
//    LT_Quotas_Text_HA                           : "The capacity to use high availability.",
//    LT_Quotas_Label_ExternalIP                  : "External IP",
//    LT_Quotas_Text_ExternalIP                   : "The capacity to use an external IP-address.",

    LT_Quotas_Label_Available                   : "Available",
    LT_Quotas_Label_NoLimit                     : "No limits",
    LT_Quotas_Label_NotAvailable                : "Not Available",

    LT_Pricing_Title                            : "Pricing",
    LT_Pricing_Column_Containers                : "Containers",
//    LT_Pricing_Column_CldlPrice                 : "Price for <b>1 cloudlet</b>",
//    LT_Pricing_Column_CapacityPrice             : "Price for <b>1 storage</b>",
    LT_Pricing_Column_Service                   : "Service",
    LT_Pricing_Column_MonthPrice                : "Price for <b>1 hour</b>",

    LT_Menu_Billing_Quotas                      : "Quotas & Pricing",

    LT_Notify_Title_Question                    : "Question",
    LT_Notify_Label_UserGroupChanged            : "Your account type was changed into '%(sGroup)'. You need to refresh the page in order for the changes to take effect. Do you want to do it now?",

    LT_Process_Label_Refreshing                 : "Refreshing...",

    LT_EnvWizard_AboutCurrency                  : "Prices are in %(currency)",

    LT_Menu_Billing_Balance_Total               : "Balance",
    LT_Menu_Billing_Balance_Cash                : "Cash",
    LT_Menu_Billing_Balance_Bonus               : "Bonus",

    LT_Notify_Label_NoFreeHardware              : "We have no available hardware at the moment. The new hardware will be added soon. Please try again in a few hours.",

    LT_Environments_Column_ExternalIP           : "External IP",

    LT_Common_Text_DoNotShowDialog              : "Don't show this dialog again",

    LT_RefillDlg_Text_HowToRefill               : "Click <b>Refill account</b> to open your account with your web hosting provider. Use the credentials that you received via email when converting, to log in and refund the account. %(sMoreInfo)",
    LT_RefillDlg_Label_MoreInfo                 : "Detailed instructions on how to refund the account can be found on <a href='%(sUrl)' target='_blank'>our documentation page</a>.",

    LT_Menu_Toolbar_Community                   : "Go to community",

    LT_Quotas_Label_EnvSleep                    : "Automatic sleep mode",
    LT_Quotas_Text_EnvSleep                     : "The amount of hours during which the environment was not accessed and was put into sleep mode automatically.",

    LT_SolutionDlg_Title                        : "Confirm installation of %(name)",
    LT_SolutionDlg_WelcomeMsg                   : "Hello, %(email). It is a pleasure to see that you are interested in our product.",
    LT_SolutionDlg_MoreInfo                     : "More info at",
    LT_SolutionDlg_JustClickInstall             : "For that just click \"Install\"",
    LT_SolutionDlg_PleaseWait                   : "Package is being installed, please wait...",
    LT_SolutionDlg_Deploy                       : "Deploying",
    LT_SolutionDlg_Config                       : "Configuring environment",
    LT_SolutionDlg_ApplicationSettings          : "Application settings",
    LT_SolutionDlg_ChooseEnvironment            : "Choose environment",

    LT_Error_Solution_LoadData                  : "An error occurred while trying to get solution data.",

    LT_Action_GetEnvs                           : "get environments",

    LT_Units_GHz                                 : "GHz",

    LT_EnvWizard_Label_Mode_Basic               : "Basic",
    LT_EnvWizard_Label_Mode_Expert              : "Expert",

    //LT_EnvWizard_Cache                          : "Cache",
    //LT_EnvWizard_VDS                            : "Elastic VPS",

    LT_EnvWizard_Label_Topology_Balancer        : "Balancing",
    LT_EnvWizard_Label_Topology_Compute         : "App. Servers",
    LT_EnvWizard_Label_Topology_Cache           : "Cache",
    LT_EnvWizard_Label_Topology_Sql             : "SQL",
    LT_EnvWizard_Label_Topology_NoSql           : "NoSQL",
    LT_EnvWizard_Label_Topology_VDS             : "VPS",
    LT_EnvWizard_Label_Topology_Build           : "Build",
    LT_EnvWizard_Label_Topology_SSL             : "SSL",

    LT_EnvWizard_Label_Topology_Addons          : "Add-ons",
    LT_EnvWizard_Label_Topology_Storage         : "Storage",
    LT_EnvWizard_Label_Topology_Servers         : "Servers",

    LT_EnvWizard_SSL_Jelastic                   : "%(PLATFORM_VENDOR_NAME) SSL",
    LT_EnvWizard_SSL_Custom                     : "Custom SSL",
    LT_EnvWizard_SSL_About_Custom               : "SSL is currently available only for the platform domains. SSL for custom domains is currently in development and will be added in a future update.",

    LT_EnvWizard_Scaling                        : "Scaling",
    LT_EnvWizard_Scaling_Vertical               : "(Vertical)",
    LT_EnvWizard_Scaling_Vert_Horz              : "(Vertical & Horizontal)",
    LT_EnvWizard_Scaling_Nodes                  : "node(s)",
    LT_EnvWizard_CloudletsLimit                 : "Cloudlets limit",
    LT_EnvWizard_Engine                         : "SDK",

    LT_EnvWizard_Ballons_From                   : "From",
    LT_EnvWizard_Ballons_AutoScaling            : "Automatic Scaling",
    LT_EnvWizard_Ballons_Cloudlet               : "cloudlet",
    LT_EnvWizard_Ballons_Cloudlets              : "cloudlet(s)",
    LT_EnvWizard_Ballons_PerHour                : "per hour",
    LT_EnvWizard_Ballons_UpTo                   : "up to",

    //LT_EnvWizard_AppServers                     : "Application Servers",


//    LT_EnvWizard_W_MaxvInstances_Trial          : "Trial environments are limited to %(count) instance of application servers. <a action='upgrade' target='_blank'>Upgrade now</a> to remove this limitation.",



    LT_EnvWizard_Warning_DeleteStorage          : "After the storage is deleted, all data will be permanently lost!",


    LT_EnvWizard_Label_WizardMode               : "Wizard mode:",

    LT_EnvWizard_Hint_Balancer                  : "Automatically distributes incoming application traffic across multiple nodes.",
    LT_EnvWizard_Hint_Compute                   : "Virtual machines to which you deploy your application. After the environment is created you can configure the servers to upload libraries or change configuration files.",
    LT_EnvWizard_Hint_Cache                     : "Memcached - an in-memory key-value store for small chunks of arbitrary data (strings, objects) from results of database calls, API calls, or page rendering.",
    LT_EnvWizard_Hint_Sql                       : "Virtual machine with a SQL database of the type that you select.",
    LT_EnvWizard_Hint_NoSql                     : "Virtual machine with a NoSQL database of the type that you select.",
    LT_EnvWizard_Hint_Build                     : "Maven node that can build your projects in the cloud. After you create the environment, you can configure the node to add your GIT or SVN project.",
    //LT_EnvWizard_Hint_SSL                       : "SSL certificate for HTTPS connections to your environment. Note that HTTPS access to environments with custom domains is not yet available and is being added in our next release.",

    LT_EnvironmentWizard_Hint_Cloudlets		    :
//        "Set <i>the maximum</i> amount of resources you want the server to ever receive. A <span class=\"dfn\">Cloudlet</span> &mdash; is a predefined amount of memory and processing power given to a server."+
//        "%(illustration_1)"+
//        "<p>A cloudlet is roughly equivalent to 128 MB RAM and 200 MHz CPU core. Cloudlets are dynamically assigned to your applications depending on the load at any given time within the limits you specify.</p>"+
//        "%(illustration_2)"+
        "<div class='dfn'>You only pay for what you use.</div>" +
        "<p> The platform automatically allocates the appropriate amount of cloudlets to each application depending on the resources that each application needs, but not more than the maximum number that you specify.</p>"+
        "%(illustration_3)",

    LT_Statistics_Label_NetInInt                : "In int. usage",
    LT_Statistics_Label_NetOutInt               : "Out int. usage",
    LT_Statistics_Label_NetInExt                : "In ext. usage",
    LT_Statistics_Label_NetOutExt               : "Out ext. usage",

    LT_Menu_Toolbar_AboutTrialLimitations       : "Learn about trial limitations",
    LT_Menu_Toolbar_AboutPricing                : "Learn about pricing",
    LT_Menu_Toolbar_ResourceUsage               : "See statistics on recent resource usage",

    LT_Quotas_Title                             : "Account Limits",
    LT_Quotas_Column_Limitation                 : "Limitation",
    LT_Quotas_Column_Billing                    : "Full account",
    LT_Quotas_Label_Current                     : "Current",

    LT_Quotas_Label_Activate                    : "Activate",
    LT_Quotas_Text_MaxEnvCount                  : "Maximum number of environments that you can create.",
//    LT_Quotas_Text_MaxCPRecCount                : "Maximum number of application servers per environment.",
//    LT_Quotas_Text_MaxCloudlets                 : "Maximum size of a server in cloudlets (one cloudlet is %(CLOUDLET_RAM) MB RAM, %(CLOUDLET_CPU) MHz CPU core).",
    LT_Quotas_Text_HA                           : "Option to set up high-availability cluster.",

    LT_Pricing_Column_CldlPrice                 : "Price for <b>1 cloudlet / hour</b>",
    LT_Pricing_Column_CapacityPrice             : "Price for <b>1 GB of storage / hour</b>",

    LT_Task_Name_33	                            : "Changing configuration file in %(env)",
    LT_Task_Name_37	                            : "Disabling replication in %(env)",

    LT_Text_CacheInfo                           :
        "<p>For working with the memcached node, use the following information:<ol>"+
        "<li>Check your email to get the URL of your memcached node or get it in the string below:<br/>" +
        "- <a target=_blank href='%(url)'>%(url)</a><br/><br/></li>"+
        "<li>You can connect to the memcached node with the help of the given code example or by using libraries<br/>which you can find at the sites listed below:</li></ol></p>",

    LT_Text_CacheInfo_Links :
        "<p>- Java memcached clients:<br/>"+
        "<a target=_blank href='http://code.google.com/p/spymemcached/'>http://code.google.com/p/spymemcached</a><br/>"+
        "<a target=_blank href='http://www.whalin.com/memcached'>http://www.whalin.com/memcached</a><br/>"+
        "<a target=_blank href='http://code.google.com/p/javamemcachedclient'>http://code.google.com/p/javamemcachedclient</a><br/>"+
        "<a target=_blank href='http://code.google.com/p/memcache-client-forjava'>http://code.google.com/p/memcache-client-forjava</a><br/>"+
        "<a target=_blank href='http://code.google.com/p/xmemcached'>http://code.google.com/p/xmemcached</a></p>" +
        "<p>- Integrations:<br/>" +
        "<a target=_blank href='http://code.google.com/p/simple-spring-memcached'>http://code.google.com/p/simple-spring-memcached</a><br/>"+
        "<a target=_blank href='http://code.google.com/p/memcached-session-manager'>http://code.google.com/p/memcached-session-manager</a><br/>"+
        "<a target=_blank href='http://code.google.com/p/memcached/wiki/Clients'>http://code.google.com/p/memcached/wiki/Clients</a></p>",


    LT_Balloons_Label_Have_Used                 : "I've used the service before",
    LT_Balloons_DeploySuccess_Text              : "Congratulations! Now let's open your application!",

    LT_Balloons_Tip_Close                       : "Close this tip",
    LT_Balloons_Tip_Stop                        : "Stop the tutorial",

    LT_Billing_Label_ForTrial                   : "(for trial)",

    LT_Common_Text_Traffic                      : "Traffic",

    LT_BuildNode_Warning_HasNotCompute          : "You cannot deploy to the environment without compute node.",

    LT_Notify_Label_NoFreeIps                   : "There are no free Public IPs at the moment. The new Public IPs will be available soon. Please try again later.",

    LT_Process_Label_LoadingUserData            : "Loading user data...",

    LT_CustomSSL_Label                          : "Custom SSL",
    LT_CustomSSL_Label_Download                 : "download",
    LT_CustomSSL_Label_ServerKey                : "Server key",
    LT_CustomSSL_Label_CACertificate            : "Intermediate certificate (CA)",
    LT_CustomSSL_Label_DomainCertificate        : "Domain certificate",
    LT_CustomSSL_Label_Domains                  : "Domains",

    LT_CustomSSL_Text_WrongEnv                  : "This feature may not work properly with the current configuration of your environment. <a action='configure'>Click here to configure your environment</a>.",
    LT_CustomSSL_Text_EditMode                  : "All application servers in the current environment will be restarted.",
    LT_CustomSSL_Text_WrongCerts                : "An error occurred while trying to enable Custom SSL. Please recheck current certificates and try again.",

    LT_CustomSSL_Error_GetState                 : "An error occurred while trying to load SSL state.",
    LT_CustomSSL_Error_Enable                   : "An error occurred while trying to enable Custom SSL.",
    LT_CustomSSL_Error_Disable                  : "An error occurred while trying to disable Custom SSL.",

    LT_Common_Button_Configure                  : "Configure",
    LT_Common_Button_Change                     : "Change",

    LT_Process_Label_Processing                 : "Processing...",

    //LT_EnvWizard_Hint_SSL                       : "SSL certificate for HTTPS connections to your environment. Note that HTTPS access to environments with custom domains is not yet available and will be available in our next release.",
    LT_EnvWizard_Hint_SSL                       : "SSL certificate for HTTPS connections to your environment.",

    //LT_EnvWizard_Label_EnvSettings              : "Environment settings",
    LT_EnvWizard_Text_SLL_Reqs                  : "Enable SSL connection with your application using %(PLATFORM_VENDOR_NAME) wildcard SSL certificate. [link]Learn more[/link]",
    LT_EnvWizard_Text_CustomSLL_Reqs            : "Upload custom certificate to your environment for enabling SSL connection. [link]Learn more[/link]",
    LT_EnvWizard_Label_Requirements             : "Requirements:",
    //LT_EnvWizard_AppServer                      : "Application Server",
    LT_EnvWizard_Label_Adjust                   : "Adjust",

    // LT_Task_EnableCustomSSL                     : "Setting up SSL certificates into %(env)",
    // LT_Task_DisableCustomSSL                    : "Removing SSL certificates from %(env)",

    LT_EnvWizard_Label_BuySSLCertificate        : "Buy SSL certificate",

    LT_Common_Text_Update                       : "Update from %(type)",
    LT_Context_Confirm_UpdateProject            : "Update project \"%(sName)\"?",

    LT_DeployArchive_Warning_VCSContext         : "This context is already in use by SVN/GIT project.",

    LT_Action_UpdateProject                     : "update project",
    LT_Action_GetProject                        : "get project",
    LT_Action_RemoveProject                     : "remove project",

    LT_Task_Name_39	                            : "Updating context %(project) in %(env)",

    LT_Environments_Text_Deployed               : "%(count) projects deployed",

    LT_Process_Label_Updating					: "Updating...",

    LT_Common_Confirm_Delete                    : "Delete <b>%(name)</b>?",
    LT_Common_Confirm_Save                      : "Save %(name)?",

    LT_CustomSSL_Text_ServerKey                 : "A server key is a private encryption/decryption key used by the server.",
    LT_CustomSSL_Text_CACertificate             : "Certificate Authority (CA) is an entity that issues digital certificates which will verify the ownership of a public key by the named subject of the certificate.",
    LT_CustomSSL_Text_DomainCertificate         : "A domain certificate is an electronic document which is given by the Certification Authority which checks the permission of the applicant to use a specific domain name.",

    LT_Common_Text_CheckoutNow                  : "Checkout now",
    LT_Common_Text_UpdateNow                    : "Update now",

    LT_Error_UpdateVCSProject_AuthFailed        : "Authentication failed while trying to update %(project) project in %(env). Please recheck the project settings.",
    LT_Error_UpdateVCSProject_WrongConfig       : "An error occurred while trying to update %(project) project in %(env). Please recheck the project settings.",
    LT_Error_UpdateVCSProject_NotExist          : "An error occurred while trying to update %(project) project in %(env). Project does not exist.",

    LT_Error_EditProject_Exist                  : "Project with name %(project) already exists.",
    LT_Error_EditProject_UnknownType            : "Can't process project - type is not supported.",

    LT_Environments_Validation_Domain_Length    : "Domain length must be less than %(maxLength).",

    LT_DeployArchive_InvalidPath                : "Invalid path name",

    LT_Environments_Status_0                    : "Unknown",
    LT_Environments_Status_1                    : "Running",
    LT_Environments_Status_2                    : "Stopped",
    LT_Environments_Status_3                    : "Launching...",
    LT_Environments_Status_4                    : "Sleeping",
    LT_Environments_Status_5                    : "Suspended",
    LT_Environments_Status_6                    : "Creating...",
    LT_Environments_Status_7                    : "Cloning...",

    LT_Action_ReadFile                          : "read file",

    LT_Menu_CloneEnvironment_NoRights           : "You don't have sufficient permissions to clone this environment.",
    LT_Menu_DeleteEnvironment_NoRights          : "You don't have sufficient permissions to delete this environment.",

    LT_Environments_Validation_ShortDomain      : "Domain length must be more than 4 characters.",

    TrialToPaid_InvoiceTo                       : "Invoice To:",
    TrialToPaid_FirstName                       : "First Name",
    TrialToPaid_LastName                        : "Last Name",
    TrialToPaid_CompanyName                     : "Company Name",
    TrialToPaid_VatNumber                       : "VAT Number",
    TrialToPaid_StreetAddress                   : "Street Address",
    TrialToPaid_City                            : "City",
    TrialToPaid_Country                         : "Country",
    TrialToPaid_State                           : "State",
    TrialToPaid_Zip                             : "Zip/Postal code",
    TrialToPaid_Phone                           : "Phone",
    TrialToPaid_PhoneCountry                    : "country",
    TrialToPaid_PhoneArea                       : "area",
    TrialToPaid_PhoneNumber                     : "number",

    TrialToPaid_AgreeCheck                      : "I have read and agreed to the [link]Terms of Service[/link]",
    TrialToPaid_Next                            : "Next",
    TrialToPaid_GettingUserInfo                 : "Getting user info...",

    LT_Action_GetUserInfo                       : "get user info",
    LT_Action_ConvertAccount                    : "convert account",
    LT_Action_AddPaymentMethod                  : "add new payment method",
    LT_Action_DelPaymentMethod                  : "delete payment method",
    LT_Action_SetDefPayMethod                   : "set default payment method",
    LT_Action_DisableAutoRefill                 : "disable auto-refill",
    LT_Action_ViewInvoices                      : "view invoices",

    Refill_FraudCheck                           : "You need to pass additional security checks to make your payment.",
    Refill_UnknownServicePlan                   : "Unknown service plan!",
    Refill_SelectPaymentMethod                  : "Please select your preferred payment method",
    Refill_Confirm                              : "Refill your account with %(withTaxes) (%(pureAmount) + %(taxesSum) VAT) using %(payMethod)?",
    Refill_ApprovedThank                        : "Thank you for your payment",
    Refill_ApprovedReceived                     : "We received your payment, and %(amount) was added to your balance.",
    Refill_ApprovedEmailed                      : "A corresponding invoice will be emailed for your records.",
    Refill_CreditDebit                          : "Credit / Debit card",
    Refill_PayPal                               : "PayPal Payment",
    Refill_TransactionDeclined                  : "Transaction has been declined",
    Refill_ThankNotify                          : "Thank you for your payment!  We will notify you about receipt of this payment shortly.",
    Refill_SumAdjustment                        : "Sum adjustment",
    Refill_SubmitPayment                        : "Submit Payment",
    Refill_PayOptions                           : "Payment options",
    Refill_TopUp                                : "Top-up amount",
    Refill_PlusVat                              : "+ VAT at %(percent)%",
    Refill_TotalPayable                         : "Total payable:",
    Refill_Existing                             : "Use existing payment method",

    PayManager_Title                            : "Payment methods",
    PayManager_ChooseDefault                    : "Choose your default payment method",
    PayManager_ConfirmDelete                    : "Delete %(name)?",
    PayManager_AddPayMethod                     : "Add new payment method",
    PayManager_SubmitNew                        : "You must [link]submit a payment[/link] to save new payment details",
    PayManager_SetDefault                       : "Set %(name) as your default payment method?",

    AutoRefill_Title                            : "Auto refill",
    AutoRefill_Active                           : "Auto-refill is currently active. " +
        "[link]Click here to disable auto-refill[/link], or edit the settings below if you want to make changes",

    AutoRefill_When                             : "Auto refill when",
    AutoRefill_Weekly                           : "Weekly (every Monday)",
    AutoRefill_Monthly                          : "Monthly (1st of each month)",
    AutoRefill_LessThan                         : "Balance less than %(currency)",
    AutoRefill_Confirm                          : "Auto refill %(withTaxes) (%(pureAmount) + %(taxesSum) VAT) using %(payMethod)?",
    AutoRefill_Disabled                         : "Auto refill was successfully disabled",
    AutoRefill_ConfirmDisable                   : "Disable Auto-refill?",

    BillingMenu_AutoRefill                      : "Configure auto-refill",
    BillingMenu_ViewInvoices                    : "View invoices",

    // SendMessage_From                            : "From",
    // SendMessage_To                              : "To",
    SendMessage_Subject                         : "Subject",

    LT_Error_UrlNotValid                        : "URL is not valid!",
    LT_Environments_Tooltip_Text_Deployed       : "Deploy your WAR packages from Deployment manager pane.",

    LT_SolutionDlg_Success                      : "Your %(name) application has been successfully deployed.",

    TrialToPaid_CreateAccount                  : "Upgrade",
    TrialToPaid_CreateAccountHint              : "Click the Create Account button to upgrade your %(HOSTER_NAME) trial account",
    TrialToPaid_Submit                         : "Submit",

    //LT_Quotas_Label_MinBalance                  : "Minimal balance",
    LT_Quotas_Text_MinBalance                   : "The minimal amount of money in the account, which allows you to create environment.",
    LT_Quotas_Text_TrialPeriod                  : "The period during which you can use your trial account.",
    LT_Quotas_Text_TrialBonus                   : "The free bonuses which you receive for using the trial account.",

    LT_Error_RecoverPass                        : "Incorrect email address",
    LT_Error_AuthFailed                         : "Authentication failed",
    LT_BuildNode_Warning_InvalidLogin           : "Invalid login",
    LT_BuildNode_Warning_InvalidPath            : "Invalid path",

    LT_EnvWizard_Label_FIXED                    : "Fixed",
    LT_EnvWizard_Label_FLEXIBLE                 : "Flexible",
    LT_EnvWizard_Label_HYBRID                   : "Hybrid",

    LT_EnvWizard_PriceSlider_Cloudlets_Now      : "Now: %(value)",
    LT_EnvWizard_PriceSlider_Cloudlets_Next     : "Next: %(value)",

    LT_EnvWizard_PriceSlider_Cloudlets          : "%(value) cloudlets",
    LT_EnvWizard_PriceSlider_CurrDiscount       : "Your discount: %(value)",
    LT_EnvWizard_PriceSlider_NextDiscount       : "Next discount: %(value)",

    LT_EnvWizard_Pricing_From                   : "from",
    LT_EnvWizard_Pricing_To                     : "to",
    LT_EnvWizard_Pricing_Price                  : "price",

    LT_EnvWizard_Pricing_Resources              : "Resources",
    LT_EnvWizard_Pricing_ResourcesClds          : "(cloudlets)",

    LT_EnvWizard_Pricing_TotalReserved          : "Total Reserved Cloudlets",
    LT_EnvWizard_Pricing_TotalDynamic           : "Total Dynamic Cloudlets",
    LT_EnvWizard_Pricing_PerMonth               : "per month",

    LT_EnvWizard_Pricing_SavingReserved         : "You're saving %(value) by using Reserved Cloudlets",
    LT_EnvWizard_Pricing_SavingDynamic          : "You're saving %(value) by using Dynamic Cloudlets",
    LT_EnvWizard_Pricing_SaveRsvdByMonth        : "/month",

    LT_EnvWizard_Pricing_ShowDetails            : "Cost details",
    //LT_EnvWizard_Pricing_DetailedInfo           : "Detailed information about pricing",


    LT_EnvWizard_Options                        : "Options",

    LT_EnvWizard_Ballons_Reserved               : "Reserved",
    LT_EnvWizard_Ballons_Dynamic                : "Scaling Limit",

    LT_Error_Rename_Context                     : "Context does not exist",
    LT_Incorrect_ItemName                       : "Incorrect item name",

    LT_Pricing_Label_Hour                       : "/hour",
    LT_Pricing_Label_Discount                   : "discount",
    LT_Pricing_Label_ReservedRes                : "Reserved cloudlets",
    LT_Pricing_Label_DynamicRes                 : "Dynamic cloudlets",


    LT_EnvWizard_Ballons_Discount               : "Discount",

//    LT_PackageDescription_ftp                   : "FTP/FTPS protocol support for deploying your applications to the platform.",
    LT_Pricing_Text_ReservedRes                 : "These cloudlets are reserved in advance (using the topology wizard).<br />You always pay for the configured reserved cloudlets, even if you use fewer resources.<br />The discount level is the total sum of all Reserved Cloudlets per environment.",
    LT_Pricing_Tetx_DynamicRes                  : "Instant dynamic scaling resources for your application. You only pay for Dynamic Cloudlets in use. Use the Scaling Limit in the topology wizard to set the maximum allowed per server.<br />The discount level is the total sum of all Dynamic Cloudlets in use per environment.",

    LT_Pricing_Discount_Title                   : "RAM / CPU",
    LT_SoftCost_Title                           : "Software",
    //LT_SoftCost_Text_Description                : "<p>The usage of software stacks is free of charge!</p><p>You pay only for the resources consumed but not for the addition of available software to your environment.</p>",

    LT_Confirm_ResetFtpPassword                 : "Reset password for FTP?",
    LT_Confirm_UninstallApp                     : "Uninstall application?",

    LT_Process_Label_Uninstalling       		: "Uninstalling...",


    LT_Addons_Title                             : "%(sAppName) : %(sType) : add-ons",
    LT_Menu_Addons                              : "Add-ons",

    LT_AddonShortDescription_ftp                : "FTP/FTPS protocol support for deploying your applications to the platform.",
    LT_AddonDescription_ftp                     : "<p>File Transfer Protocol (FTP) is a standard network protocol used to transfer files from one host to another over a TCP-based network.</p><p>FTP secured with SSL (FTPS), is used for secure transmission that hides the username and password, and encrypts the content.</p>",

    LT_E_Platform_4071                          : "\"%(archive)\" archive can't be deployed to \"%(context)\" context because this archive is damaged. Please recheck the archive and try again.",
    LT_E_Platform_4072                          : "\"%(archive)\" archive can't be deployed to \"%(context)\" context because this archive is empty. Please recheck the archive and try again.",

    LT_EnvWizard_JelasticSSL                    : "%(PLATFORM_VENDOR_NAME) SSL",
    //LT_EnvWizard_Extra                          : "Extra",

    LT_SolutionDlg_AdditionalInfo               : "Confirm the installation of %(name)<br />to start using it.",

    LT_AddonFtp_InstallSuccess                  : "FTP has been successfully installed. Your login and password have been sent to your email.",
    LT_AddonFtp_ResetPassword                   : "FTP password has been successfully changed and sent to your email.",

    LT_Task_FTP_ResetPassword                   : "Resetting password for %(pkg) of %(env)",

    LT_Billing_Column_IntTraffic                : "Internal traffic",

    AutoRefill_Checkbox                         : "Auto-refill when my balance <span class='min-threshold'>falls below %(minThreshold)</span>",

    LT_EnvWizard_Pricing_UseReserved            : "You can <span class='orange-text'>save your money</span> by using Reserved Cloudlets",

    LT_Pricing_Column_Discount                  : "Discount",
    LT_Pricing_Column_PerHour                   : "Per Hour",
    LT_Pricing_Column_CostPerReserved           : "Cost per Reserved Cloudlet",
    LT_Pricing_Column_CostPerDynamic            : "Cost per Dynamic Cloudlet",
    LT_Pricing_Column_ReservedCloudlets         : "Reserved Cloudlets",
    LT_Pricing_Column_DynamicCloudlets          : "Dynamic Cloudlets",
    LT_Pricing_Label_Cloudlet                   : "cloudlet",

    LT_DiscCost_Title                           : "Disk Space",
    LT_DiscCost_Column_Storage                  : "Disk Used",

    LT_DiscCost_Text_Description                : "<dfn>Disk space</dfn> is charged hourly per GB of disk space used in your environment.",

    LT_NetworkCost_Title                        : "Traffic",
    LT_NetworkCost_Column_ExtTraffic            : "External traffic last month",
    LT_NetworkCost_Text_Description             : "<dfn>Traffic</dfn> usage is charged hourly. The discount level is based on the amount of external traffic used per environment in the previous month.",
    LT_NetworkCost_Text_InternalDesc            : "Internal traffic is absolutely free!",

    LT_OptionsCost_Title                        : "Options",
    LT_OptionsCost_Column_Count                 : "Count",
    LT_OptionsCost_Text_IP_Desc                 : "This is an external IPv4 address which is directly accessible from outside of the cluster. The charge is taken hourly.",
    LT_OptionsCost_Label_JelasticSSL            : "%(PLATFORM_VENDOR_NAME) SSL",
    LT_OptionsCost_Text_JSSL_Desc               : "This is a protocol which establishes a secure connection between your client and your environment. The charge is taken hourly.",

    LT_Pricing_Label_PerMonth                   : "per month",
    LT_Pricing_Label_Free                       : "FREE",
    LT_Pricing_Column_UnitMonthFree             : "Free / month*",
    LT_Pricing_Column_UnitHourFree              : "Free / hour",
    LT_Pricing_Column_PricePerHour              : "Price / hour",
    LT_Pricing_Column_PricePerMonth             : "Price / month*",
    LT_Pricing_Column_PricePer                  : "Price per %(sUnit)",

    LT_DiscCost_Column_FreeTpl                  : "up to %(value)",
    LT_NetworkCost_Column_FreeTpl               : "up to %(value)",


    LT_NotConnected                             : "<b>Not connected.</b> Connecting in %(time)… [link]Try now[/link]",

    TrialToPaid_MiddleName                      : "Middle name",
    TrialToPaid_RCR                             : "RCR",
    TrialToPaid_Type                            : "Type",
    TrialToPaid_CustomerPhysical                : "Personal",
    TrialToPaid_CustomerOrganization            : "Company",
    TrialToPaid_CustomerEntrepreneur            : "Entrepreneur",

    TrialToPaid_Title                           : "Upgrade to paid account",
    TrialToPaid_SelectPayType                   : "Select payment method:",

    TrialToPaid_SliderDescription               : "<p>Hourly resource usage is debited from a prepaid account balance.</p><p>Use the slider to select how much to deposit:</p>",
    Refill_ContactUs                            : "[link]Contact us[/link] to discuss an alternative payment method",

    LT_ConfigManager_SaveOnInstance             : "Save only for the current instance",
    LT_ConfigManager_Confirm_SaveOnInstance     : "Save %(name) only for %(instance)?",
    LT_ConfigManager_Confirm_SaveAll            : "Save %(name) for all instances?",

    LT_BuildNode_AutoUpdate                     : "Check and auto-deploy updates",
    LT_BuildNode_Interval                       : "Check every (min)",

    LT_SearchField_HowDoI                       : "How do I..?",

    LT_Environments_Status_1001                 : "Deleting...",

    LT_Common_Button_TryAgain					: "Try again",

    LT_DeleteEnvironment_Error_Template         : "Environment %(envname) deletion failed: %(error).",
    LT_DeleteEnvironment_Error_WrongPswd        : "invalid password",

    LT_DeleteEnvironment_Text_ResetPswd         : "Forgot your password?<br />Click <a action=\"reset-password\">reset password</a> to get a new one.",

    LT_Task_Name_42	                            : "Getting the list of files for %(env)",
    LT_Task_Name_46	                            : "Copying file on %(env)",
    LT_Task_Name_49	                            : "Uploading file on %(env)",


    LT_Config_Text_LoadingError_401             : "The file is too large to be read.",

    LT_Menu_Deployment  						: "Deployment",
    TrialToPaid_ProceedAccount                  : "Continue",
    AutoRefill_NoPaymentMethods                 : "There are no payment methods configured. Please configure one before setting up auto refill.",

    LT_Deployment_AppDeploymentType             : "Application deployment type",

    LT_Process_Label_ChangingDT					: "Changing type...",
    LT_DeployArchive_Label_DeployConfirm        : "Your app will be available at %(environment), continue?",
    LT_DeployArchive_Label_SelectDeployment     : "Select predefined Ruby deployment type for your application",

    LT_ConfigManager_SaveForAllInstances        : "Save for all instances",

    LT_Process_Label_Installing                 : "Installing %(name)...",
    LT_Notify_Label_ApplicationInstalled    	: "Application was successfully installed. Detailed information was sent to your email.",
    LT_Action_InstallApp                        : "install application",

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Release: 1.9.3
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    LT_Error_StartBlockedEnv                    : "You cannot start this environment as the owner of this environment is blocked.",
    LT_Error_NotEnoughDiskSpace                 : "Your environment \"%(env)\" has run out of disk space.\nPlease, [link]contact support[/link] to have it increased.",
    LT_Error_Platform_4078                      : "Cannot download the file \"%(archive)\" by the given URL. Please recheck the URL and try again.",


    LT_EnvSettings_Confirm_RemoveShare          : "Delete %(sEmail) account?",

    LT_Action_DeleteArchive                     : "delete archive",
    PayManager_NoPaymentMethods                 : "No payment methods available",
    LT_Common_Text_DontAskNextTime              : "Do not ask me next time",

    LT_Common_Error_LoadData                    : "Failed to load the data.",

    LT_Settings_Text_WrongEnv                   : "For this feature to work properly you need to have a compute node or load balancer added to your environment. <a action='configure'>Click here to configure your environment</a>.",

    LT_Billing_Column_Name                      : "Name",
    LT_Billing_Column_FixedCld                  : "Reserved Cloudlets",
    LT_Billing_Column_FlexibleCld               : "Dynamic Cloudlets",

    LT_Billing_Text_UnfundBonus                 : "Bonus balance has been charged.",
    LT_Billing_Text_UnfundBalance               : "Main balance has been charged.",

    LT_Task_Name_53	                            : "Stopping %(name) node(s) in %(env)",
    LT_Task_Name_54	                            : "Starting %(name) node(s) in %(env)",

    LT_Task_Name_55	                            : "Adding %(project) project to %(env)",
    LT_Task_Name_56	                            : "Editing %(project) project in %(env)",
    LT_Task_Name_57	                            : "Removing %(project) project from %(env)",

    LT_Task_Name_58	                            : "Adding %(project) project to %(env)",
    LT_Task_Name_59	                            : "Removing %(project) project from %(env)",
    LT_Task_Name_60	                            : "Editing %(oldproject) project in %(env)",

    LT_Task_Name_61                             : "Binding %(extdomain) domain to %(env)",

    LT_Task_Name_62                             : "Setting up SSL certificates into %(env)",
    LT_Task_Name_63                             : "Removing SSL certificates from %(env)",

    LT_Task_Name_64                             : "Removing %(extdomain) domain from %(env)",
    LT_Task_Name_65                             : "Swapping domain(s) between %(env) and %(targetenv)",

    LT_Environments_Error_StatusIsSet           : "The status of the <b>%(env)</b> environment is not permitted to perform this action.",

    LT_Error_SuspendedAccount                   : "Your account has been deactivated. Please contact support with questions related to this deactivation.",

    LT_ConfigManager_FileNotExists              : "The path to <b>%(path)</b> in %(env) environment does not exist. The directory structure will be updated.",
    LT_ConfigManager_UpdateDirectory            : "The path to <b>%(path)</b> in %(env) environment does not exist. Please update the directory structure.",
    LT_Notify_ConnectionProblems                : "The server could not be contacted. This may be a temporary error or the server may be down.\n Close this pop-up window and refresh your browser",

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Release: 2.0.0
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    LT_Menu_Toolbar_AccountSettings             : "Settings",

    LT_AccountSettings_Title                    : "Account settings",

    LT_SSH_Keys_List_Empty_Text                 : "You have not added any public keys yet.",

    LT_SSH_Keys_Editor_Field_Title              : "Title",
    LT_SSH_Keys_Editor_Field_Fingerprint        : "Fingerprint",
    LT_SSH_Keys_Editor_Field_PublicKey          : "Key",
    LT_SSH_Keys_Editor_Button_Add               : "Add Key",

    LT_SSH_Keys_Confirm_Delete                  : "Delete %(title) key?",

    LT_SSH_Keys_Error_GetKeys                   : "An error occurred while trying to load an SSH key.",
    LT_SSH_Keys_Error_AddKey                    : "An error occurred while trying to add an SSH key.",
    LT_SSH_Keys_Error_RemoveKey                 : "An error occurred while trying to remove an SSH key.",

    LT_E_Platform_6001                          : "This SSH public key already exists. Please try another one.",
    LT_E_Platform_6002                          : "SSH public key with %(title) title already exists. Please try another title for your key.",

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Release: 2.1.0
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    LT_EnvWizard_Info_FutureEngine              : "Coming soon! Support of this programming language will be added in future updates.",

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Release: 2.2.0
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    LT_Process_Label_ConfirmRelation            : "Invite confirmation...",

    LT_UserSettings_Item_Collaboration          : "Collaboration",
    LT_UserSettings_Item_UserManagement         : "Account Management",
    LT_UserSettings_Item_SharedWithMe           : "Shared with Me",

    LT_UserMng_Button_Invite                    : "Invite",
    LT_UserMng_Button_Edit                      : "Edit",
    LT_UserMng_Button_Unlink                    : "Unlink",

    LT_UserMng_EnvsGrid_Title                   : "Shared Environments",
    LT_UserMng_Column_Env                       : "Environment",
    LT_UserMng_Column_Role                      : "Change topology / SSH access",

    LT_UserMng_Label_AllEnvs                    : "all environments",

    LT_UserMng_Editor_Title                     : "Invite User",
    LT_UserMng_Editor_Title_Edit                : "Linked User",
    LT_UserMng_Editor_Field_DisplayName         : "Display Name",
    LT_UserMng_Editor_Field_Role                : "Allow user to create new environments",

    LT_UserMng_Info_SendInvite                  : "Invite for %(email) user has been successfully sent.",
    LT_UserMng_Confirm_UnlinkUser               : "All shared environments will be unshared from <b>%(name)</b> user. Unlink user?",
    LT_UserMng_Confirm_UnshareEnv               : "Unshare selected environments?",
    LT_UserMng_Warning_UserLinked               : "%(email) user is already linked to your account.",
    LT_UserMng_Warning_InviteYourSelf           : "You cannot invite yourself.",
    LT_UserMng_Error_GetUsers                   : "An error occurred while trying to load the list of linked users.",
    LT_UserMng_Error_GetUserEnvs                : "An error occurred while trying to load the list of linked user's environments.",
    LT_UserMng_Error_UnlinkUser                 : "An error occurred while trying to unlink a user.",
    LT_UserMng_Error_SendInvite                 : "An error occurred while trying to send an invitation to %(email) user.",
    LT_UserMng_Error_ChangeRole                 : "An error occurred while trying to change the rights for %(email) user.",
    LT_UserMng_Error_ChangeDisplayName          : "An error occurred while trying to change the name for %(email) user.",
    LT_UserMng_Error_SetPermission              : "An error occurred while trying to update the list of shared environments with %(email) user.",
    LT_UserMng_Error_RemovePermission           : "An error occurred while trying to remove the shared environment(s) for %(email) user.",

    LT_UserMng_HelpTip                          : "Read this [link]documentation[/link] to find out more details on the collaboration with other accounts.",

    LT_UserRelations_Column_Email               : "Email",
    LT_UserRelations_Column_DisplayName         : "Display Name",
    LT_UserRelations_Column_Role                : "Allowed to create environments",

    LT_UserRelations_Button_Edit                : "Edit Name",
    LT_UserRelations_Button_Leave               : "Leave",

    LT_UserRelations_Confirm_UnlinkUser         : "Do you want to stop collaboration with <b>%(name)</b> user?",
    LT_UserRelations_Error_UnlinkUser           : "An error occurred while trying to stop collaboration with <b>%(name)</b> user.",
    LT_UserRelations_Error_ConfirmInvite        : "An error occurred while trying to confirm invite.",

    LT_EnvOwnerSelector_Title                   : "Environment Owner",
    LT_EnvOwnerSelector_Field_Owner             : "Owner",
    LT_EnvOwnerSelector_Label_Me                : "Me",

    LT_EnvOwnerSelector_Button_Next             : "Next",

    LT_EnvOwnerSelector_Error_GetOwnerData      : "An error occurred while trying to load owner data.",
    LT_EnvOwnerSelector_Error_OwnerMaxEnvsCount : "User has reached the maximum number of environments set by default.",
    LT_EnvOwnerSelector_Error_InactiveOwner     : "Сurrent status of user doesn't allow creation of environments.",
    LT_EnvOwnerSelector_Error_NotAdmin          : "Restrictions on your account do not allow this user to create an environment.",
    LT_EnvOwnerSelector_Error_CreateOff         : "You are not allowed to create environment due to your account restrictions.",
    LT_EnvOwnerSelector_Error_MaxEnvsCount      : "You have reached the maximum number of environments set by default.",

    LT_Process_Label_LoadingData                : "Loading data...",

    LT_Environments_Column_Owner                : "Owner",
    LT_Environments_Column_Owner_Text_Me        : "me",

    LT_E_Platform_901                           : "Environment <b>%(envname)</b> does not exist.",

    LT_Menu_NoRights                            : "You don't have enough permissions to perform this action.",

    LT_EnvSharing_Column_User                   : "Email",
    LT_EnvSharing_Column_Role                   : "Change topology / SSH access",

    LT_EnvSharing_HelpTip                       : "Use [settings]the settings panel[/settings] to manage collaborators. Read this [link-docs]documentation[/link-docs] to find out more details on the collaboration with other accounts.",

    LT_EnvSharing_Warning_AlreadyShared         : "This environment is already shared for this account.",
    LT_EnvSharing_Error_GetUsers                : "An error occurred while trying to load the users of %(envName) environment.",
    LT_EnvSharing_Info_InvitationSend           : "Invitation has been successfully sent to %(email) user.",
    LT_EnvSharing_Confirm_UnshareEnv            : "Unshare current environment for selected user(s)?",
    LT_EnvSharing_Error_ChangeOwner             : "You cannot set permissions for the owner of this environment.",
    LT_EnvSharing_Error_SetPermission           : "An error occurred while trying to update shares for %(envName) environment." ,

    LT_EnvWizard_Label_Owner                    : "Owner",

    LT_EnvWizard_Warning_NoRights               : "You don't have enough permissions to edit the topology of this environment.",

    LT_DeployArchive_Label_DeployInfo           : "After deployment your application will be available at",

    LT_EnvSettings_Item_Info                    : "Info",

    LT_EnvInfo_Title                            : "Environment: %(envName)",
    LT_EnvInfo_Field_Owner                      : "Owner",
    LT_EnvInfo_Field_Creator                    : "Creator",
    LT_EnvInfo_Field_CreateDate                 : "Creation Date",

    LT_Error_LoadEnvInfo                        : "An error occurred while trying to load environment information.",
    LT_Error_UserNoRights                       : "You don't have enough permissions for %(envName) environment to perform this action.",
    LT_Error_OwnerCreateOff                     : "You are not allowed to create environment for %(userName) account due to your account restrictions.",
    LT_Error_EnvNotShared                       : "The <b>%(envName)</b> environment is not shared with you anymore.",

    LT_EnvWizard_BalancerRequired               : "Balancer",
    LT_DeployArchive_Warning_VCSSingleContext   : "Root context is already in use by SVN/GIT project.",
    LT_DeployArchive_Warning_EnvNotRunning      : "Environment is not running.",
    LT_DeployArchive_Warning_EnvIsBusy          : "Environment is busy by another process.",

//    LT_EnvWizard_W_MaxvInstances_TrialRegistered: "Environments are limited to %(count) instance of application servers for your account. Please <a action='refill' target='_blank'>refill your balance</a> to remove this limitation.",


    LT_Menu_Applications                        : "Marketplace",

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Release: 2.3.0
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    LT_Process_Label_ConfirmEnvTransfer         : "Transferring environment...",

    LT_EnvSettings_Item_ChangeOwner             : "Change Owner",

    LT_EnvTransfer_Title                        : "Environment Transfer: %(envName)",
    LT_EnvTransfer_Button_SendRequest           : "Send Request",
    LT_EnvTransfer_Button_CancelRequest         : "Cancel Request",

    LT_EnvTransfer_HelpTip                      : "Read this [link]documentation[/link] to find out more details on the environment transfer.",
    LT_EnvTransfer_HelpTip_NotOwner             : "Only the environment's owner can perform a transfer action. Read this [link]documentation[/link] to find out more details.",

    LT_EnvTransfer_Text_RequestSent             : "A transfer request email has been sent to <b>%(email)</b> user at %(date) requesting approval to take ownership over this environment.",
    LT_EnvTransfer_Info_SendRequest             : "Transfer request for <b>%(email)</b> user has been successfully sent.",
    LT_EnvTransfer_Error_SendRequest            : "An error occurred while trying to send a transfer request to <b>%(email)</b> user.",
    LT_EnvTransfer_Error_UserNotActive          : "The <b>%(envName)</b> environment transfer is not allowed due to the <b>%(email)</b> account status.",
    LT_EnvTransfer_Error_QuotaLimitReached      : "The <b>%(envName)</b> environment transfer is not allowed due to the <b>%(email)</b> account restrictions.",
    LT_EnvTransfer_Error_OnlyBilling            : "Environment can be transferred only to the billing account.",
    LT_EnvTransfer_Error_AlreadyTransferring    : "The <b>%(envName)</b> environment is being transferred.",
    LT_EnvTransfer_Error_UserLimitReached       : "Environment transfer is not allowed due to your account restrictions.",
    LT_EnvTransfer_Error_UserQuotaEnvsCount     : "Environment transfer is not allowed due to your account restrictions: the number of environments exceeded the maximum.",
    LT_EnvTransfer_Error_UserQuotaNodeCount     : "Environment transfer is not allowed due to your account restrictions: the number of containers per environment exceeded the maximum.",
    LT_EnvTransfer_Error_UserQuotaCloudlet      : "Environment transfer is not allowed due to your account restrictions: the number of cloudlets per container exceeded the maximum.",
    LT_EnvTransfer_Error_UserQuotaHA            : "Environment transfer is not allowed due to your account restrictions: High Availability usage is restricted.",
    LT_EnvTransfer_Error_UserQuotaExtIp         : "Environment transfer is not allowed due to your account restrictions: External IP usage is restricted.",
    //LT_EnvTransfer_Error_UserQuotaVds           : "Environment transfer is not allowed due to your account restrictions: VPS usage is restricted.",

    LT_EnvTransfer_Info_SuccessTransfer         : "The <b>%(envName)</b> environment has been successfully transferred to your account.",
    LT_EnvTransfer_Error_ConfirmRequest         : "An error occurred while trying to confirm the environment transfer request.",
    LT_EnvTransfer_Confirm_CancelRequest        : "Do you want to cancel transfer request of <b>%(envName)</b> environment to %(email) user?",
    LT_EnvTransfer_Info_CancelRequest           : "Transfer request for the <b>%(envName)</b> environment has been successfully cancelled.",
    LT_EnvTransfer_Error_CancelRequest          : "An error occurred while trying to cancel the transfer request for the <b>%(envName)</b> environment.",

    LT_Warning_UseUserEmail                     : "You cannot state your email in this field.",
    LT_Error_LoadData                           : "An error occurred while trying to load the data.",

    LT_Task_Name_69                             : "Transfer request of the <b>%(env)</b> environment to %(email)",
    LT_Task_Name_70                             : "The <b>%(env)</b> environment has been successfully transferred to your account",

    LT_Info_EnvAdded                            : "The <b>%(envName)</b> environment has been added to your account.",

    LT_E_Platform_703                           : "User <b>%(email)</b> does not exist.",

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Release: 2.4.0
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    LT_Error_AddItem                            : "An error occurred while trying to create the %(name) item.",
    LT_Error_EditItem                           : "An error occurred while trying to change the %(name) item.",
    LT_Error_RemoveItem                         : "An error occurred while trying to remove the %(name) item.",
    LT_Error_SaveItem                           : "An error occurred while trying to save the %(name) item.",
    LT_Error_ItemNotExist                       : "The <b>%(name)</b> item does not exist.",
    LT_Error_NodeNotExist                       : "The <b>%(node)</b> node does not exist in environment.",

    LT_Warning_RecheckData                      : "Some data isn't valid, please double-check your entries.",

    LT_Common_Confirm_DeleteItems               : "Remove selected item(s)?",
    LT_Common_Confirm_SaveChanges               : "Save changes?",

    LT_Common_Text_MultipleField                : "The value must be a multiple of %(value)",
    LT_Common_Text_From                         : "From",
    LT_Common_Text_To                           : "To",
    LT_Common_Text_Interval_Custom              : "custom...",

    LT_Common_Button_Enable                     : "Enable",
    LT_Common_Button_Disable                    : "Disable",
    LT_Common_Button_UndoChanges                : "Undo Changes",

    // LT_HelpTip_Common                           : "Read this [link]documentation[/link] to find out more details.",
    LT_HelpTip_Access_AdminOwner                : "Only an environment's admin or owner can perform this action. Read [link]documentation[/link] to find out more details.",

    LT_EnvSettings_Item_Triggers                : "Monitoring",
    LT_EnvSettings_Item_Alerts                  : "Load Alerts",
    LT_EnvSettings_Item_HScaling                : "Auto Horizontal Scaling",

    LT_EnvAlerts_HelpTip                        : "Alerts are sent to the environment owner and users this environment is shared with. Read [link]documentation[/link] to find out more details.",

    LT_EnvAlerts_Column_Name                    : "Name",
    LT_EnvAlerts_Column_Condition               : "Condition",

    LT_EnvAlerts_Field_Name                     : "Name",
    LT_EnvAlerts_Field_Node                     : "Node Type",
    LT_EnvAlerts_Field_Type                     : "Whenever",
    LT_EnvAlerts_Field_TypeCondition            : "Is",
    LT_EnvAlerts_Field_TypeConditionUnits       : "%",
    LT_EnvAlerts_Field_Period                   : "For at least",
    LT_EnvAlerts_Field_PeriodUnits              : "minutes",

    LT_EnvAlerts_Text_Type_Cloudlets            : "Cloudlets (Memory, CPU)",
    LT_EnvAlerts_Text_Type_Memory               : "Memory",
    LT_EnvAlerts_Text_Type_CPU                  : "CPU",
    LT_EnvAlerts_Text_Type_Disk                 : "Storage",
    LT_EnvAlerts_Text_Type_INodes               : "Inodes",

    LT_EnvAlerts_Editor_Title                   : "Add Alert",
    LT_EnvAlerts_Editor_Title_Edit              : "Edit Alert",

    LT_EnvScaling_Label_CPU                     : "CPU",
    LT_EnvScaling_Label_Memory                  : "Memory",
    LT_EnvScaling_Label_RemoveNodes             : "Remove Nodes",
    LT_EnvScaling_Label_AddNodes                : "Add Nodes",
    LT_EnvScaling_Label_UsageCPU                : "CPU Usage",
    LT_EnvScaling_Label_UsageMemory             : "Memory Usage",
    LT_EnvScaling_Label_Duration                : "Duration",

    // LT_EnvScaling_Field_Enabled                 : "Turned",
    LT_EnvScaling_Field_UpCondition             : "Whenever loading is more than: %(value)",
    LT_EnvScaling_Field_DownCondition           : "Whenever loading is less than: %(value)",

    LT_EnvScaling_Field_NodesBy                 : "nodes by",
    LT_EnvScaling_Field_Count                   : "count",
    LT_EnvScaling_Field_EmailNotification       : "Send Email Notification",

    LT_EnvScaling_Error_AlreadyExist            : "Automatic Horizontal Scaling is already configured for <b>%(envName)</b> environment. Please refresh the data to view current settings.",

    LT_EnvTrHistory_Field_Type                  : "Type",
    LT_EnvTrHistory_Field_Period                : "Period",

    LT_EnvTrHistory_Text_Type_Alerts            : "Load Alerts",
    LT_EnvTrHistory_Text_Type_Scaling           : "Horizontal Scaling",

    LT_EnvTrHistory_Column_Date                 : "Date",
    LT_EnvTrHistory_Column_Action               : "Action",
    LT_EnvTrHistory_Column_Name                 : "Name",
    LT_EnvTrHistory_Column_Condition            : "Info",

    LT_EnvTrHistory_Title_Details               : "Details",

    LT_EnvTrHistory_Label_Success               : "Success",
    LT_EnvTrHistory_Label_Failed                : "Failed",

    LT_EnvTrHistory_Label_AddNodes              : "Add Nodes",
    LT_EnvTrHistory_Label_RemoveNodes           : "Remove Nodes",
    LT_EnvTrHistory_Label_Notification          : "Send Notification",

    LT_EnvTrHistory_Label_LoadingValue          : "Loading Value",
    LT_EnvTrHistory_Label_Status                : "Status",
    LT_EnvTrHistory_Label_NodeCount             : "Node Count",
    LT_EnvTrHistory_Label_Error                 : "Error",

    LT_Statistics_Button_AutoScaling            : "Auto Horizontal Scaling",

    LT_SolutionDlg_ConfirmTitle               : "Confirm installation of %(name)",

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Release: 2.5.0
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    LT_Quotas_Text_MaxEnvNodesCount             : "Maximum number of nodes per environment.",
    //LT_Quotas_Text_MaxSameNodesCount            : "Maximum number of the same nodes per environment.",



    LT_Environments_Confirm_RestartNode         : "Restart %(sType) node with ID %(sNodeId)?",
    LT_Environments_Confirm_RestartNodes        : "Restart %(sType) nodes?",

    LT_Environments_Confirm_ResetNodePassword	: "Reset password for %(sType) node with ID %(sNodeId)?",
    LT_Environments_Confirm_ResetNodesPassword  : "Reset password for %(sType) nodes?",

    LT_Menu_RestartNodes                        : "Restart nodes",

    LT_Task_Name_71	                            : "Resetting password for %(name) ID %(nodeid) node of %(env)",
    LT_Task_Name_72	                            : "Restarting %(name) ID %(nodeid) node of %(env)",
    LT_Task_Name_73	                            : "Adding %(count) %(name) node(s) to %(env)",

    LT_Environments_Label_Contexts              : "Contexts",
    LT_Environments_Label_Projects              : "Projects",
    LT_Environments_Label_NodeId                : "Node ID:",

    LT_InstanceSelector_Node                    : "Node",

    LT_Menu_ChangeDisplayName                   : "Set Alias",

    LT_Common_Text_Domain                       : "Domain",

    LT_Signin_Label_SignupRestrictedEmail	    : "<b>Registration failed</b>. %(restrictedEmail) email address is not allowed for registration. Please use another email or contact us at <a action='contact' href=\"%(HOSTER_TRIAL_SUPPORT)\" target='_blank'>%(text)</a> for the assistance.",
    LT_Error_RestrictedEmail                    : "Email <b>%(restrictedEmail)</b> is not allowed",

    LT_UserRelations_Error_NoRelation           : "User %(email) has been unlinked from your account.",

    LT_UserMng_Info_InviteConfirmed             : "Congratulations! You have successfully joined the collaboration.",

    LT_Signin_Label_Registration_Title        	: "<div class='title'>We have just emailed your password to %(email)</div>" +
        "<div class='note'>Go to your mailbox, copy it from the Welcome email, and paste below.</div>",

    LT_Signin_Label_Activation_Title        	: "<div class='title'>We have just emailed your activation link to %(email)</div>" +
        "<div class='note'>Go to your mailbox and follow it in order to complete the registration.</div>",

    LT_Signin_Label_Registration				: "<div class='separator'></div><div class='steps-ct'>" +
        "If you <b>do not receive the Welcome email</b> within a couple minutes, please:" +
        "<ol class='steps'>" +
        "<li>Check your Spam / Junk Email folder,</li>" +
        "<li>Make sure <b>%(email)</b> email address is valid. If you made a typo, <a action=\"signup\">click here</a> to sign up again,</li>" +
        "<li>Use the <a action=\"reset-password\">password reset</a> feature,</li>" +
        "<li>If you still cannot access your account, please contact us at <a class=\"email\" href=\"%(HOSTER_TRIAL_SUPPORT)\">%(text)</a></li>" +
        "</ol></div>",

    LT_SolutionDlg_AddonSuccess                 : "%(name) has been successfully installed.",

    LT_AppStoreCat_Blogs                         : "Blogs",
    LT_AppStoreCat_MicroBlogs                    : "Micro Blogs",
    LT_AppStoreCat_PortalsCMS                    : "Portals/CMS",
    LT_AppStoreCat_Forums                        : "Forums",
    LT_AppStoreCat_Galleries                     : "Image Galleries",
    LT_AppStoreCat_Wikis                         : "Wikis",
    LT_AppStoreCat_SocialNetworking              : "Social Networking",
    LT_AppStoreCat_AdManagement                  : "Ad Management",
    LT_AppStoreCat_Mails                         : "Mails",
    LT_AppStoreCat_Polls                         : "Polls and Surveys",
    LT_AppStoreCat_ProjectManagement             : "Project Management",
    LT_AppStoreCat_ECommerce                     : "E-Commerce",
    LT_AppStoreCat_ERP                           : "ERP",
    LT_AppStoreCat_CustomerSupport               : "Customer Support",
    LT_AppStoreCat_Educational                   : "Education",
    LT_AppStoreCat_Music                         : "Music",
    LT_AppStoreCat_Video                         : "Video",
    LT_AppStoreCat_FileManagement                : "File Management",
    LT_AppStoreCat_Others                        : "Others",

    LT_SolutionDlg_Prepare                      : "Preparing environment",
    LT_AppStore_Action_ResetPassword            : "Reset password",
    LT_AppStore_Action_Remove                   : "Remove",

    LT_AppStoreCat_Popular                       : "Popular",
    LT_AppStoreCat_CloudTools                    : "Cloud Tools",
    LT_AppStoreCat_Accounting                    : "Accounting",
    LT_AppStoreCat_Analytics                     : "Analytics",
    LT_AppStoreCat_AppServer                     : "Application Server",
    LT_AppStoreCat_BinRepository                 : "Binary Repository",
    LT_AppStoreCat_BugTracking                   : "Bug Tracking",
    LT_AppStoreCat_Bundles                       : "Bundles",
    LT_AppStoreCat_BusinessIntelligence          : "Business Intelligence",
    LT_AppStoreCat_CodeReview                    : "Code Review",
    LT_AppStoreCat_Collaboration                 : "Collaboration",
    LT_AppStoreCat_ContinuousIntegration         : "Continuous Integration",
    LT_AppStoreCat_Crm                           : "CRM",
    LT_AppStoreCat_DevTools                      : "Developer Tools",
    LT_AppStoreCat_DocManagement                 : "Document Management",
    LT_AppStoreCat_Ecm                           : "ECM",
    LT_AppStoreCat_MobileDev                     : "Mobile Development",
    LT_AppStoreCat_NewsAggregator                : "News Aggregator",
    LT_AppStoreCat_Planning                      : "Planning",
    LT_AppStoreCat_TranslationTools              : "Translation Tools",
    LT_AppStoreCat_Vcs                           : "Version Control",
    LT_AppStoreCat_Games                         : "Games",
    LT_AppStoreCat_RSS                           : "RSS",
    LT_AppStoreCat_DBTools                       : "DB Tools",
    LT_AppStoreCat_GuestBooks                    : "Guest Books",
    LT_AppStoreCat_Calendars                     : "Calendars",

    LT_Error_Label_UserNotActivated              : "The email address you've entered is not activated in the system. You can <a action=\"resend-activation\">resend the activation email</a>.",

    LT_SignupDlg_Label_ResendInfo                : "If you didn't receive the activation email, we can send a new one to the email address of your account.",
    LT_SignupDlg_Label_Resend                    : "Resend",
    LT_Process_Label_ResendingActivation         : "Sending activation email...",
    LT_Notify_Label_ResendingActivation          : "A new activation link has been emailed to the provided address.",

    LT_Process_Label_Register			         : "Registering a new account...",
    LT_Process_Label_Signout			         : "Signing out...",
    LT_Process_Label_GetProjects                 : "Getting environments...",
    LT_Error_Label_UserExist                     : "The email address you've entered is already registered in the system. You may <a action=\"reset-password\">reset your password</a>.",

    LT_EnvScaling_Error_QuotaReached             : "Restrictions on your account do not allow saving the current configuration: the number of containers per environment exceeds the maximum.",
    LT_Error_WrongActivationKey                  : "Confirmation key is no longer valid.",
    LT_EnvTransfer_Error_NotValidKey             : "Transfer request is no longer valid.",

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Release: 3.0.0
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    LT_SSH_Keys_Title                           : "SSH Keychain",
    LT_SSH_Key_Public                           : "Public",
    LT_SSH_Key_Private                          : "Private",
    LT_SSH_Keys_Editor_Title_Public             : "Add Public Key",
    LT_SSH_Keys_Editor_Title_Private            : "Add Private Key",
    LT_SSH_Keys_Editor_Title_Preview            : "SSH Key",
    LT_Use_Authentication                       : "Use authentication",
    LT_Common_Access_Type                       : "Access type",
    LT_Common_Select_Key                        : "Select key",
    LT_Common_Type_Password                     : "Type password",
    LT_SSH_Public_Keys_List_Title               : "Public SSH Keys",
    LT_SSH_Private_Keys_List_Title              : "Private SSH Keys",
    LT_SSH_Public_Keys_HelpTip                  : "Please use your SSH client: [link-ssh-uri]ssh %(sshLogin)@%(sshDomain) -p %(sshPort)[/link-ssh-uri]<br/>SSH settings will be applied to the account. Read this [link-docs]documentation[/link-docs] to find out more details on SSH access to your environments.",
    LT_SSH_Private_Keys_HelpTip                 : "Private SSH keys for GIT repositories access.<br/> Read this [link-docs]documentation[/link-docs] to find out more details on accessing your remote projects via SSH.",
    LT_SSH_General_HelpTip                      : "<b>SSH (Secure Shell Handler)</b> protocol is used for establishing the secured connection between client and server.<br/> Platform uses the [link-overview]SSH Gateway[/link-overview] infrastructure component in order to provide this possibility.<br/><br/>According to your needs, you can add your <b>public</b> and <b>private</b> SSH keys:<br/><ul><li>Private keys are necessary for [link-git-ssh]authentication at your GIT account[/link-git-ssh] in order to get the ability to clone and update the hosted project from your remote repository.</li><li>Public keys are necessary for establishing the SSH connection [link-docs]to your account/a separate container[/link-docs] in the environment. Note that the availability of SSH public keys' usage depends on your hosting provider's settings. Please contact [link-support]support[/link-support] for more information.</li></ul>",
    LT_Common_Text_Path                         : "Path",
    LT_BuildNode_Warning_InvalidUrl             : "Invalid URL",
    LT_SSH_Keys_Access                          : "SSH Access",
    LT_SSH_Path_Example                         : "https://... git://... ftp://... example.com:repo...",
    LT_Task_Name_68                             : "Adding %(title) SSH key",

    LT_EnvWizard_Label_Docker                   : "Container",
    LT_EnvWizard_Label_Topology_Extra           : "Extra",
    LT_EnvWizard_Hint_Dockers                   : "",
    LT_EnvWizard_Button_SelectDocker            : "Select Container",

    LT_Task_Name_74	                            : "Adding %(displayname) node to %(env)",
    LT_Task_Name_76	                            : "Setting the amount of cloudlets for %(name) node with ID %(nodeid) in %(env)",

    LT_AppStore_Auth_Title                      : "Authorization",

    LT_AppStore_Label_Custom                    : "custom",

    LT_Confirm_RemoveApp                        : "Remove application?",
    LT_AppStore_Error_RemoveApp                 : "An error occurred while trying to remove the application",
    LT_AppStore_Error_AddApp                    : "An error occurred while trying to add the application",

    LT_SolutionDlg_Label_Env                    : "Environment",
    LT_SolutionDlg_Label_EnvNew                 : "new",
    LT_SolutionDlg_Label_EnvExisting            : "existing",

    LT_DockerRegistry_EmptyText                 : "[registry/]namespace/image",

    LT_DockerRegistry_W_NotFound                : "Cannot find the specified image. Please recheck your entries and try again.",
    LT_DockerRegistry_E_NotFound                : "An error occurred while trying to get the image data.",

    LT_Action_GetDockerTemplateTags             : "get Docker container template tags",
    LT_DockerSelector_Button_Select             : "Select",

    LT_DockerSelector_Title_Selected            : "Selected (%(count))",

    LT_Common_Button_Submit                     : "Submit",

    LT_E_Platform_4081                          : "The selected image could not be run. Please contact support for assistance.",
    LT_E_Platform_2348                          : "An error occurred while trying to install the software packages into the container.",

    LT_EnvWizard_Hint_VDS                       : "A dynamically scaled elastic Virtual Private Server with full root access, able to host and run any code. You can establish an SSH connection to this server using public IP address or SSH Gateway",
    LT_Text_VdsInfo                             :
        "<p>To work with the Elastic VPS node <b>with external IP</b> attached, you need to take the following steps:<ol>"+
        "<li>Find your <b>login</b>, <b>password</b> and <b>Public IP</b> address in the received email</li>"+
        "<li><a target=_blank href='%(url)'>Establish the SSH connection</a> to your server</li>" +
        "<li>Specify the required credentials in the opened console</li></ol><p>" +
        "<p>To work with the Elastic VPS node <b>with internal IP</b>, you need to establish the SSH connection to it via the <a href=\"%(JelasticSSHGate)\">Platform SSH Gateway</a></p>",

    LT_Menu_Applications_Applications           : "Applications",

    LT_ExportEnv_Title                          : "Export",
    LT_ExportEnv_Export_Btn                     : "Export",
    LT_ExportEnv_List_Title                     : "Exported Environment Copies",
    LT_ExportEnv_List_Empty_Text                : "You have not exported any environments yet",
    LT_ExportEnv_Dlg_Title                      : "Environment Export",
    LT_ExportEnv_Dlg_TopologySettings           : "Topology Settings",
    LT_ExportEnv_Dlg_PrivateData                : "Private Data",
    LT_ExportEnv_Dlg_ConfigurationFiles         : "Configuration Files",
    LT_ExportEnv_Dlg_TopologySettings_Tip       : "Environment topology and nodes' settings, configured within the environment wizard",
    LT_ExportEnv_Dlg_PrivateData_Tip            : "Directories with the files of your deployed application(s) and data stored within your DB server(s)",
    LT_ExportEnv_Dlg_ConfigurationFiles_Tip     : "The config files, accessible via Configuration Manager at your dashboard, and GIT/SVN projects' settings (e.g. repositories links, credentials, attached private SSH keys)",
    LT_ExportEnv_Dlg_Warning_CompleteImport     : "Complete the import of the exported environment copy to the target platform, before deleting the original one",
    LT_ExportEnv_Dlg_Description                : "You are going to export the <b>%(envName)</b> environment",
    LT_ExportEnv_Dlg_Select                     : "Choose what should be exported:",
    LT_ExportEnv_Settings_DetailsTips           : "Read this [link-docs]documentation[/link-docs] to find out more details on the exporting of your environments.<BR>" +
        "<b>Note</b>: all the exported environment archives are stored in your disk space, that is charged according to your hosting service provider's tariff.",
    LT_ExportEnv_Error_GetEnvs                  : "An error occurred while trying to get the list of exported environments",
    LT_ExportEnv_Confirm_DeleteEnv              : "Delete the exported at %(date) archive for %(envName)?",
    LT_ExportEnv_Error_DeleteEnv                : "An error occurred while trying to delete the exported archive for %(envName)",
    LT_ExportEnv_LinkTip_DownloadManifest       : "Download manifest",
    LT_ExportEnv_Error_DownloadManifest         : "An error occurred while trying to download the manifest",
    LT_Process_Label_Exporting                  : "Exporting...",
    LT_Task_Name_75                             : "Exporting env %(env)",
    LT_Task_Name_77                             : "Unpacking %(source) to %(env)",
    LT_Menu_ImportEnvironment                   : "Import",
    LT_Environments_Status_9                    : "Exporting...",
    LT_Action_ExportEnv                         : "export environment",
    LT_Notify_Label_EnvironmentExported			: "The %(envName) environment has been exported.",
    LT_ExportEnv_ViewFiles_Btn                  : "View files",

    LT_Import_InstallDlg_Text                   : "You are going to import the <b>%(envName)</b> environment, previously exported from %(oldHost). <BR> Export date: %(date)",
    LT_Import_InstallDlg_MoreInfo               : "More info at <a target='_blank' href='%(href)'>%(href)</a>",
    LT_Import_SuccessDlg_Title                  : "Your '%(envName)' environment has been successfully imported.",
    LT_Import_SuccessDlg_Note                   : "<b>Note</b>: to work properly, your imported environment can require reconfiguration according to the new hosting provider's settings (such as public IP). <br/><br/><div class=\"more-info\">More info at [link]%(href)[/link]</div>",
    LT_Build_Failed_Warning                     : "An error occurred while trying to build the project. Please ensure your project type is correct.",
    LT_Menu_NewEnvironment                      : "New environment",
    LT_SolutionWizard_Error_ManifestIsCorrupted : "An error occurred while trying to import the environment. Please ensure you've chosen the proper file with the exported environment's data",

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Release: 3.1
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    LT_Auto_Resolve_Conflict                    : "Auto resolve conflicts",
    LT_Environments_Validation_InvalidLength    : "Domain name should be at least %(nLength) characters long.",

    LT_E_Platform_6000                          : "Invalid SSH key. Please recheck the key and try again.",
    //LT_Notify_Label_VPSQuotaMismatch            : "Creation of the Elastic VPS node with such parameters is not allowed due to your account restrictions. Please contact us at <a action='contact' href=\"%(HOSTER_SUPPORT)\" target='_blank'>%(HOSTER_NAME) portal</a> for assistance.",

    LT_AppStore_Add_Custom_Docker               : "Add New Image",
    LT_AppStore_Add_Custom_Docker_HelpTip       : "If the required image is present within the Hub Registry, skip the registry hostname (e.g. <span class='highlighted'>jelastic/tomcat8</span>). Otherwise, specify it at the beginning of the image identifier (e.g. <span class='highlighted'>server.com/images/image_name</span>).<br>The list of all available image tags is automatically fetched, thus you'll be able to select the required one during further installation.",

    LT_AppStore_SearchField_EmptyTx             : "Type application name",
    LT_AppStore_SearchField_EmptyResults        : "No results found",
    LT_AppStore_Search_W_EmptyResults           : "No results found!<br>Try again with a different search keyword",

    LT_EnvWizard_Config                         : "Configuration",

    LT_DockerSettings_Item_Links                : "Links",
    LT_DockerSettings_Item_EnvVars              : "Variables",
    LT_DockerSettings_Item_Ports                : "Ports",

    LT_DockerSettings_Links_Column_Node         : "Node",
    LT_DockerSettings_Links_Column_Alias        : "Alias",
    LT_DockerSettings_Links_Confirm_Remove      : "Remove the selected links?",
    LT_DockerSettings_Links_W_NoNodes           : "There is no node to link with.<br>Please, add more nodes to get this possibility.",
    LT_DockerSettings_Links_W_PropertyExists    : "Link with the current alias already exists!",

    LT_DockerSettings_EnvVars_Column_Name       : "Name",
    LT_DockerSettings_EnvVars_Column_Value      : "Value",
    LT_DockerSettings_EnvVars_W_PropertyExists  : "Property with the current name already exists!",
    LT_DockerSettings_EnvVars_E_GetVars         : "An error occurred while trying to load environment variables.",
    LT_DockerSettings_EnvVars_Confirm_Remove    : "Remove the selected variables?",

    LT_DockerSettings_RunArgs_E_GetArgs         : "An error occurred while trying to load run arguments.",

    LT_DockersPanel_Item_QuickStart             : "Quick Start",
    LT_DockersPanel_Item_Custom                 : "Custom",

    LT_DockersPanel_Search_EmptyTx              : "Type image name",
    LT_DockersPanel_Search_W_EmptyResults       : "No results found!<br>Try again with a different search keyword",

    LT_SolutionDlg_Docker_Installing            : "Installing %(name)",

    LT_W_Only_AlphaNum                          : "This field should only contain letters and numbers.",
    LT_W_Only_AlphaNumDash                      : "This field should only contain letters, numbers and _.",

    LT_AppStoreCat_ClusteredDBs                 : "Clustered DBs",
    LT_AppStore_Action_Uninstall                : "Uninstall",

    LT_Menu_RDP                                 : "Remote desktop",
    LT_Menu_RDPResetPassword                    : "Reset RDP password",


    LT_EnvironmentWizard_Dialog_WinCloudletsChanged : "Windows-based node(s) will be restarted due to changing the amount of cloudlets. Do you really want to apply the changes?",

    LT_HelpTip_Env_Required                     : "You need to have at least one node (except Docker containers) added to your environment for this feature to work properly. [link]Click here to configure your environment[/link].",
    LT_EnvScaling_Tip                           : "Read this [link]documentation[/link] to find out how to configure automatic horizontal scaling for any other node, beside a compute or balancer one.",

    LT_EnvWizard_Licences                       : "Licenses",

    LT_LicencesCost_Text_Description            : "The cost for software stacks' usage depends on your hosting service provider's tariffs.<br>If a stack is marked as free, you pay only for the resources consumed, but not for the addition of this software to your environment.",

    LT_Billing_Label_SoftwareCost               : "%(nodeName) License",

    //LT_Notify_Label_MaxEnvCount                 : "You have reached the maximum number of environments for your type of account.",
    LT_NodeMission_Cp                           : "Application Servers",
    LT_NodeMission_Bl                           : "Balancing",
    LT_NodeMission_Sqldb                        : "SQL Databases",
    LT_NodeMission_Nosqldb                      : "NoSQL Databases",
    LT_NodeMission_Cache                        : "Cache",
    LT_NodeMission_Build                        : "Build node",
    LT_NodeMission_Docker                       : "Docker containers",
    LT_NodeMission_Vds                          : "Elastic VPS",

    LT_W_NotAllowedChars                        : "This field contains characters that are not allowed [%(chars)].",

    LT_HelpTip_Docker_FeatureComingSoon         : "This feature will be available for Docker containers soon. Read [link]documentation[/link] to find out more details.",

    LT_EnvScaling_Tip_RestrictedNodes           : "Your account restrictions don't allow you to add more than one similar (same type) node within an environment, while this feature requires at least two such nodes to work properly. Please, [link-support]contact support[/link-support] to remove this limitation.",

    LT_Text_RDPInfo                             : "<p>In order to connect to the node via RDP, follow these steps:</p><ol>"+
        "<li>Check your email to receive the node’s <b>host address</b> and your access <b>credentials</b></li>"+
        "<li>Open your desktop <b>RDP client</b>:<br>" +
        "  <ol style=\"list-style: none; margin-left: 10px;\"><li>for Linux: KRDC, Remina </li>" +
        "  <li>for Windows: Remote desktop</li>" +
        "  <li>for Mac OS X: Microsoft Remote Desktop</li>" +
        "</ol></li>" +
        "<li> Establish the connection to your server (%(rdpLink)) using the received RDP access login and password</li></ol>" +
        "<p>For more details, refer to our [link]documentation[/link]</p>",

    LT_CustomSSL_Text_ActiveState               : "Custom SSL is currently active. <a action='disable'>Click here to disable Custom SSL</a>, or edit the settings below if you'd like to make changes.",
    LT_CustomSSL_Text_InactiveState             : "Custom SSL is currently inactive. <a action='enable'>Click here to enable Custom SSL</a>, or edit the settings below if you'd like to make changes.",

    LT_Environments_Confirm_RestartContainer    : "Restart %(sType) container with ID %(sNodeId)?",
    LT_Environments_Confirm_RestartContainers   : "Restart %(sType) containers?",

    LT_Menu_RestartContainer                    : "Restart container",
    LT_Menu_RestartContainers                   : "Restart containers",

    LT_EnvWizard_Button_EditDockerConfig         : "Edit",

    LT_Text_WinDeployInfo                       :"<p> You can deploy your project directly from Visual Studio IDE using the WebDeploy tool:</p><ol>" +
        "<li>Create your Publish profile</li>" +
        "<li>Specify the following data within the Connection tab:<ol>" +
        "  <li style=\"list-style: none; margin-left: 10px;\"> Publish Method: Web Deploy</li>"+
        "  <li style=\"list-style: none; margin-left: 10px;\">Service URL - %(deployLink)</li>" +
        "  <li style=\"list-style: none; margin-left: 10px;\">Site/application - Defaut Web Site/{name_of_your_app}</li>" +
        "  <li style=\"list-style: none; margin-left: 10px;\">User name - get it from email</li>" +
        "  <li style=\"list-style: none; margin-left: 10px;\">Password - get it from email</li></ol></li>" +
        "<li>Click Publish!</li></ol>" +
        "<p>For more details refer to our [link]documentation[/link]</p>",

    LT_Menu_WinDeploy                           : "Publish info",

    LT_Windows_Confirm_DeployToRoot_Msg      	: "This application will be installed into \"Default Web Site\".<br> " +
        "Most applications are usually installed into a folder <br> beneath the root, such as \"Default Web Site/Blog\". <br>Are you sure?",
    LT_Windows_Confirm_RootUndeploy_Msg         : "All the deployed projects will be removed in case of deleting the ROOT context. Are you sure?",

    LT_SSH_Keys_List_Private_Empty_Text         : "You have not added any private keys yet.",

    LT_Task_Name_35	                            : "Resetting password for %(name) ID %(nodeid) node of %(env)",
    LT_Task_Name_79                             : "Resetting password for %(name) of %(env)",

    LT_SolutionWizard_Error_FilesNotAvailable   : " An error occurred while trying to import the environment. Please ensure the original environment with the required source data still exists and try to import the newly exported copy of this environment",

    LT_SolutionWizard_Error_EnvTypeNotAllowed   : "An error occurred while trying to set up the environment with necessary settings: the required types of nodes are not supported within the current platform or their usage is restricted for your type of account",

    LT_Process_Label_GettingSolution            : "Retrieving data...",

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Release: 3.3
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    LT_EnvWizard_Confirm_IgnoreChanges          : "All the changes you've made will be lost, continue?",
    LT_EnvWizard_Action_Migrate                 : "Migrate...",

    LT_QuotasPricing_Title                      : "Quotas & Pricing",
    LT_QuotasPricing_Item_Regions               : "Regions",
    LT_QuotasPricing_Item_Pricing               : "Pricing",

    LT_EnvRegions_HelpTip                       : "Read [link]documentation[/link] to find out more details on environment regions.",

    LT_EnvRegionSelector_Item_Info              : "More details...",
    // type "[link]More details...[/link]" in the string above if you'd like this drop-down list's item at the topology wizard being referring to the "DOCS_ENV_REGIONS" link instead of opening the Quotas & Pricing frame

    LT_EnvMigration_Title                       : "Migrate environment: %(envName)",
    LT_EnvMigration_Field_CurrentRegion         : "Current region",
    LT_EnvMigration_Field_TargetRegion          : "Target region",
    LT_EnvMigration_Field_TargetRegion_EmptyText: "Select a region...",
    LT_EnvMigration_Button_Submit               : "Verify & Migrate",

    LT_EnvMigration_Error_NoHardware            : "We have no available hardware in the <b>%(region)</b> region at the moment. Please try another region.",
    LT_EnvMigration_Error_Failed                : "An error occurred while trying to migrate the <b>%(envName)</b> environment to the <b>%(region)</b> region.",
    LT_EnvMigration_Info_Success                : "Environment <b>%(envName)</b> has been successfully migrated to the %(region) region.",

    LT_EnvMigration_HelpTip                     : "Read [link]documentation[/link] to find out more details on environments' migration.",
    LT_EnvMigration_HelpTip_NoRegions           : "Currently there are no regions available for migration. Please contact Support to get more information.",

    LT_Action_ValidateRegion                    : "validate %(region) region",

    LT_EnvSettings_Item_Migration               : "Migration",

    LT_Environments_Status_10                   : "Migrating...",
    LT_Environments_Status_11                   : "Broken",

    LT_Task_Name_83                             : "Migrating %(env) environment to %(hngroupname) region",

    LT_HelpTip_Access_Owner                     : "Only an environment's owner can perform this action. Read [link]documentation[/link] to find out more details.",

    LT_SolutionDlg_Label_EnvRegion              : "Region",
    LT_SolutionDlg_Label_Environment            : "Environment",

    LT_Import_InstallDlg_ConfirmTitle           : "Confirm import of the %(envName) environment",
    LT_Import_InstallDlg_Button_Import          : "Import",

    LT_Common_Text_Region						: "Region",

    LT_Task_Name_2	                            : "Creating environment %(env)",
    // add the %(hngroupname) placeholder to the string above if you'd like to show the info about a region in the corresponding task

    LT_Notify_Label_HardwareOnMaintenance       : "Our hardware is undergoing maintenance at the moment.",
    LT_Notify_Label_RegionOnMaintenance         : "The <b>%(region)</b> region's hardware is undergoing maintenance at the moment. Please try another region.",

    LT_Region_Tip_Maintenance                   : "The region's hardware is undergoing maintenance.",

    //"LT_Region_DisplayName_default_hn_group"    : "Default Region",
    "LT_Region_ShortDescription_default_hn_group": "This set of hardware is supplied by default.",
    "LT_Region_Description_default_hn_group"    : "<p>This set of hardware is supplied by default and has the following parameters:</p><ul><li>Domain: %(domain)</li><li>Storage capacity: unlimited</li></ul><p>Features availability:</p><ul data-type=\"check\"><li>Docker containers</li><li>Windows hosting</li></ul>",


    LT_Settings_Label_Endpoints				  	: "Endpoints",
    LT_EnvEndpoints_Column_Name                 : "Name",
    LT_EnvEndpoints_Column_Node                 : "Node",
    LT_EnvEndpoints_Column_PublicPort           : "Public port",
    LT_EnvEndpoints_Column_PrivatePort          : "Private port",
    LT_EnvEndpoints_Column_Protocol             : "Protocol",
    LT_EnvEndpoints_Column_AccessUrl            : "Access URL",
    LT_EnvEndpoints_AddEndpoint_Error 	        : "An error occurred while trying to add the %(name) endpoint",
    LT_EnvEndpoints_RemoveEndpoint_Error 	    : "An error occurred while trying to remove the %(name) endpoint",
    LT_EnvEndpoints_GetEndpoints_Error 	        : "An error occurred while trying to get the list of endpoints",
    LT_EnvEndpoints_Confirm_RemoveEndpoint      : "Delete the %(name) endpoint?",
    LT_EnvEndpoints_EditEndpoint_Error          : "An error occurred while trying to edit the %(name) endpoint",
    LT_EnvEndpoints_PortValidationHint          : "This port is busy",
    LT_EnvEndpoints_NameValidationHint          : "This name is busy",
    LT_EnvEndpoints_Editor_Title                : "Add Endpoint",
    LT_EnvEndpoints_Editor_Title_Edit           : "Edit Endpoint",
    LT_EnvEndpoints_NameNotValid                : "The name is not valid",
    LT_Task_Name_80                             : "Adding %(endpoint) endpoint",
    LT_Task_Name_81                             : "Editing %(name) endpoint",
    LT_Task_Name_82                             : "Deleting endpoint",
    LT_EnvEndpoints_NameEmptyText               : "Enter or select name...",
    LT_EnvEndpoints_PublicPortEmptyText         : "Will be set automatically",
    LT_EnvEndpoints_AccessUrlEmptyText          : "%(url):{public_port}",
    LT_EnvEndpoints_NameDisabledQtipText        : "You have reached the maximum amount of mapped ports allowed for this node",


    LT_Statistics_Label_NetLimit                : "Out ext. limit",
    LT_Statistics_Label_DiskLimit               : "Disk limit",
    LT_Statistics_Label_DiskCommonLimit         : "Limit",
    LT_Statistics_Label_IopsLimit               : "IOPS limit",
    LT_Statistics_Label_CpuLimit                : "CPU limit",
    LT_Statistics_Label_RamLimit                : "RAM limit",
    LT_Statistics_Label_Iops                    : "IOPS usage",

    LT_ExportEnv_Error_EnvDeleted               : "Files can't be shown - the environment has been deleted",
    LT_Notify_Label_EnvExportRestricted         : "You do not have the possibility to export the <b>%(envName)</b> environment. Please contact Support for more information.",

    LT_EnvMigration_Confirm_Migration           : "Please, confirm that you want to migrate the <b>%(envname)</b> environment to the <b>%(region)</b> region.",
    LT_EnvMigration_Field_OnlineMigration       : "Live migration",
    LT_EnvMigration_Mark_OnlineMigration        : "LM",
    LT_EnvMigration_Field_OnlineMigration_Tip   : "Live migration allows to relocate your projects without restarting the containers and helps to avoid any downtime during this operation. [link]More details...[/link]",
    LT_EnvMigration_Field_OnlineMigration_NA    : "Not available between the selected regions",
    LT_EnvMigration_Warning_EnvDowntime         : "The containers will be restarted and the environment will be unavailable during migration",
    LT_EnvMigration_Warning_IpChanged           : "IP addresses will be changed",

    LT_EnvMigration_Info_OnlineNotAvailable     : "Live migration between current regions is not available.",
    LT_EnvMigration_Field_TargetRegion_Pricing  : "<a action=\"pricing\">Prices</a> can be different in the target region",

    LT_Action_LoadDockerManifest                : "load image data",
    LT_Use_ZDTModule                            : "Enable [link-docs]zero-downtime deployment[/link-docs]",

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Release: 4.0
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    LT_BillingHistory_GroupByNode_Label         : "Group by node",
    LT_Statistics_ShortName_RAM                 : "RAM",
    LT_Statistics_ShortName_CPU                 : "CPU",
    LT_Statistics_ShortName_Network             : "Network",
    LT_Statistics_ShortName_HDD                 : "Disk",
    LT_Statistics_ShortName_IOPS                : "IOPS",
    LT_Statistics_ShortName_NetInInt            : "In int.",
    LT_Statistics_ShortName_NetOutInt           : "Out int.",
    LT_Statistics_ShortName_NetInExt            : "In ext.",
    LT_Statistics_ShortName_NetOutExt           : "Out ext.",
    LT_Units_K                                  : "K",
    LT_Units_M                                  : "M",


    LT_NodeMission_Default                      : "Extra",

    //LT_EnvWizard_Balancer                       : "Balancing",
    LT_EnvWizard_ChangeDockerImg                : "Change image",
    LT_EnvWizard_ChangeDockerTag                : "Change tag",
    LT_EnvWizard_Confirm_DockerImgReplace       : "Please confirm that you want to replace the <b>%(current)</b> image.",
    LT_EnvWizard_Info_UnusedExtra               : "Please use the previously added extra block first.",


    LT_EnvWizard_CustomSLL_EntryPoint           : "App. Server or Balancer",

    LT_DockerSelector_Title                     : "Select Container",
    LT_DockerSelector_Button_Next               : "Next",

    LT_DockerSettings_Item_More                 : "More",
    LT_DockerSettings_Item_Volumes              : "Volumes",
    LT_DockerSettings_Item_RunArgs              : "Run Config",
    LT_DockerSettings_Field_EntryPoint          : "Entry Point",
    LT_DockerSettings_Field_RunArgs             : "Run Command",
    LT_DockerSettings_Field_EmptyText           : "(not defined by default)",
    LT_DockerSettings_Tip_ResetToDefault        : "Reset to default",
    LT_DockerSettings_Vols_W_Empty              : "There are no predefined data volumes bound. <br>Press \"Add\" button to define new volumes.",

    LT_DockerSettings_Vols_Column_Path          : "Local Path",
    //LT_DockerSettings_Vols_Column_StoragePath   : "Destination Path",
    //LT_DockerSettings_Vols_EmptyPath            : "(to be calculated)",
    LT_DockerSettings_Vols_W_PathExists         : "Volume with the current path already exists!",

    LT_DockersPanel_QuickStart_W_Empty          : "No items to display",
    LT_DockersPanel_Item_Search                 : "Search",
    LT_DockersPanel_Search_Label_Hub            : "Docker Hub",
    LT_DockersPanel_Search_HelpTip              : "<p>Use the guides below to find out how to manage Docker containers within the platform:</p> <ul><li>[link-manage]add container[/link-manage] to environment</li><li>set basic [link-config]configurations[/link-config]</li><li>[link-ssh]access container[/link-ssh] via SSH</li><li>[link-redeploy]update the deployed image[/link-redeploy] with another tag</li></ul>",
    LT_DockersPanel_Custom_HelpTip              : "Here you can store your custom Docker images, placed either at a private registry or Registry Hub, to be easily accessible. [link]More details[/link]",
    LT_DockerSettings_Ports_HelpTip             : "Thanks to the advanced container-based virtualization technology, you don't need to expose ports at Docker containers - the necessary port can be bound directly to the internal or external IP address that your container was provisioned with.<br><br>You can either map the required port via [link-endpoints]endpoint[/link-endpoints] (for being accessible over Shared LB) or attach [link-docs-pubip]external IP[/link-docs-pubip] address to the appropriate container. Then, depending on the way chosen, just bind your service (app listener) to the received internal or external address.<br><br>Read [link-docs]documentation[/link-docs] to find out more details on managing Docker container ports.",

    LT_AppStore_Auth_Label_Name                 : "Username",

    LT_AppStore_Field_Tag                       : "Tag",
    LT_AppStore_Label_More                      : "More details",
    LT_AppStore_Text_CustomItemDesc             : "Registry: %(registry)",
    LT_AppStore_Text_CustomItemDefaultDesc      : "Hub Registry",

    LT_Menu_RedeployContainer                   : "Redeploy container",
    LT_Menu_RedeployContainers                  : "Redeploy containers",

    LT_Environments_Status_12                   : "Redeploying...",

    LT_RedeployContainer_Title                  : "Redeploy %(nodeName) containers",
    LT_RedeployContainer_Column_Node            : "Node",
    LT_RedeployContainer_Column_Tag             : "Tag",
    LT_RedeployContainer_Field_DeployType       : "Sequential deployment",
    LT_RedeployContainer_Field_DeployType_Tip   : "If enabled, the containers will be redeployed one by one, ensuring the service availability. Otherwise, all of them will be updated simultaneously, causing temporary downtime.",
    LT_RedeployContainer_Button_Submit          : "Redeploy",

    LT_RedeployContainer_Confirm_Redeploy       : "Please confirm that you want to redeploy the <b>%(nodeName)</b> container(s) to the <b>%(tag)</b> tag.",
    LT_RedeployContainer_Info_Success           : "Containers in the <b>%(envName)</b> environment have been successfully redeployed to the <b>%(tag)</b> tag.",
    LT_RedeployContainer_Error_Failed           : "An error occurred while trying to redeploy containers in the <b>%(envName)</b> environment to the <b>%(tag)</b> tag.",

    LT_Task_Name_92	                            : "Restarting the %(name) node(s) of %(env)",
    LT_Task_Name_93	                            : "Resetting password for %(name) in %(env)",
    LT_Task_Name_94                             : "Redeploying the %(name) ID %(nodeid) node of %(env) to the %(tag) tag",
    LT_Task_Name_95                             : "Redeploying %(name) containers of %(env) to the %(tag) tag",
    LT_Task_Name_96	                            : "Linking the %(targetnodename) ID %(targetnodeid) and %(sourcenodename) ID %(sourcenodeid) nodes with the %(alias) alias in %(env)",
    LT_Task_Name_97	                            : "Unlinking the %(targetnodename) ID %(targetnodeid) and %(sourcenodename) ID %(sourcenodeid) nodes with the %(alias) alias in %(env)",
    LT_Task_Name_98	                            : "Setting variables for the %(name) ID %(nodeid) node in %(env)",
    LT_Task_Name_99	                            : "Setting run command for the %(name) ID %(nodeid) node in %(env)",
    LT_Task_Name_100                            : "Setting entry point for the %(name) ID %(nodeid) node in %(env)",
    LT_Task_Name_101                            : "Setting cloudlets amount for %(name) in %(env)",

    LT_Common_Text_EmptyList                    : "No items to display",
    LT_Common_Button_ShowLogs                   : "Show Logs",

    LT_Error_AddVCSProject_InvalidPath          : "Invalid project URL. Please recheck the URL and try again",
    LT_AppStoreCat_ManagementAndMonitoring      : "Management and Monitoring",

    LT_Common_Text_Reinstall                    : "Reinstall",
    LT_Addon_Confirm_Reinstall                  : "Your add-on will be reinstalled, continue?",
    LT_Addon_Env_Install_Not_Allowed            : "The selected environment has no suitable nodes for the add-on installation",
    LT_Addon_Disabled_Node_Qtip                 : "Add-on installation is not allowed for this node",
    LT_Addon_EnvNodes_Name_Field                : "Nodes",
    LT_Addon_Disabled_Env_Qtip                  : "Add-on installation is not allowed for this environment",

    LT_ManifestImp_EmptyURL                     : "http://...",
    LT_ManifestImp_BtnImport                    : "Import",
    LT_ManifestImp_DialogTitle                  : "Import",
    LT_ManifestImp_SelectFile                   : "Select a file",
    LT_ManifestImp_TabURL                       : "URL",
    LT_ManifestImp_TabFile                      : "Local File",
    LT_ManifestImp_MoreInfo                     : "More info at <a target='_blank' href='%(href)'>%(href)</a>",

    LT_Process_Label_CheckAuthentication        : "Authentication...",
    LT_Process_Label_ConnectingToCloud          : "Connecting to the cloud...",

    LT_AppStoreCat_Applications                 : "Apps",
    LT_AppStoreCat_Addons                       : "Add-ons",
    LT_AppStore_SearchField_AddonEmptyTx        : "Type add-on name",


    LT_Task_Name_102	                        : "Adding volume %(path) for the %(name) ID %(nodeid) node in %(env)",
    LT_Task_Name_103	                        : "Removing volume %(path) for the %(name) ID %(nodeid) node in %(env)",
    LT_DockerSettings_Vols_ConfirmDelete        : "Remove %(path) volume?",
    LT_DockerSettings_Vols_LockedFiles_Title    : "%(name) : locked files",
    //LT_DockerSettings_Vols_W_PathRestricted     : "Adding volume with such path is not allowed!",

    LT_Menu_Toolbar_CLI					        : "CLI",

    LT_Log_NoSelected                           : "Please select the item in the left-hand panel to see the log.",
    LT_EnvSettings_Item_History                 : "Events History",

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Release: 4.1
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    LT_Notify_FileRenameNotPermitted            : "The item is not allowed for being renamed",
    LT_Notify_ContainerIsNotRunning             : "The command can't be executed. Container is not running",
    LT_Notify_FileDeleteNotPermitted            : "The item is not allowed for being deleted",

    LT_Notify_CommandCantBeExecuted             : "The operation could not be performed. Probably, one of the system directories has been deleted or renamed. Please contact support for the assistance.",

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Release: 4.5
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    LT_AppStoreCat_Favorites                    : "Favorites",
    LT_AppStoreCat_DevAdminTools                : "Dev & Admin Tools",
    LT_AppStoreCat_Clusters                     : "Clusters",
    LT_AppStoreCat_ContentManagement            : "Content Management",
    LT_AppStoreCat_SalesMarketing               : "Sales & Marketing",
    LT_AppStoreCat_FileManager                  : "File Manager",
    LT_AppStoreCat_Entertainment                : "Entertainment",
    LT_AppStoreCat_Other                        : "Other",

    LT_DockersPanel_Item_Favorites              : "Favorites",
    LT_AppStore_Action_Add2Favorites            : "Add to Favorites",
    LT_AppStore_Action_RemoveFavorites          : "Remove from Favorites",

    LT_AppStore_Favorites_Text_EmptyList        : "Mark the most frequently used solutions as Favorites to easily access them within this tab.",

    LT_TutorSlider_Text_Welcome                 : "Welcome to %(logo) PaaS",
    LT_TutorSlider_Text_OtherVendors            : "Other cloud vendors",
    LT_TutorSlider_Label_Time                   : "Time",
    LT_TutorSlider_Label_Resources              : "Resources",
    LT_TutorSlider_Label_Server                 : "Your Server",
    LT_TutorSlider_Text_VS                      : "VS",

    LT_TutorSlider_Text_Containers              : "CONTAINERS",
    LT_TutorSlider_Text_LB                      : "Load balancer",
    LT_TutorSlider_Text_CP                      : "Application server",
    LT_TutorSlider_Text_DB                      : "Database server",
    LT_TutorSlider_Ballons_Reserved             : "Reserved",
    LT_TutorSlider_Ballons_Limited              : "Scaling Limit",
    LT_TutorSlider_Label_UpTo                   : "up to ",
    LT_TutorSlider_Label_Cloudlets	   	        : "cloudlet(s)",
    LT_TutorSlider_Month        	   	        : "month",
    LT_TutorSlider_Day          	   	        : "day",
    LT_TutorSlider_Hour          	   	        : "hour",
    LT_TutorSlider_Descr_Other    	   	        : "At other clouds you always pay for Scaling Limit",
    LT_TutorSlider_Title_Limit                  : "Limit",

    LT_TutorSlider_Label_Reserve  	   	        : "Reserved cloudlets",
    LT_TutorSlider_Label_ScaleLimit  	   	    : "Scaling Limit",

    LT_TutorSlider_Feature_LANGS 	   	        : "Multilingual platform with Docker support",
    LT_TutorSlider_Feature_SCALING 	   	        : "Automatic horizontal and vertical scaling",
    LT_TutorSlider_Feature_BALANCER 	   	    : "High availability and load balancing",
    LT_TutorSlider_Feature_SSH 	   	            : "SSH access and open API",
    LT_TutorSlider_Feature_COLLABORATION 	   	: "Account collaboration with different access levels",
    LT_TutorSlider_Feature_CLOUD 	   	        : "Hybrid cloud within several data centers",
    LT_TutorSlider_Feature_CICD 	   	        : "Continuous integration and delivery",
    LT_TutorSlider_Feature_MARKETPLACE 	   	    : "Marketplace with applications and add-ons",

    LT_Balloons_Wizard_Text                     : "Select the required stacks and click <b>Create</b> environment.",
    LT_Balloons_TasksPanel_Text                 : "The environment is being created. See the progress in the <b>Tasks panel</b>.",
    LT_Balloons_EnvCreated_Text                 : "<b>Congratulations!</b> Your environment is ready! Now let's deploy an application. Just click <b>Deploy</b> and select your environment within drop-down list.",
    LT_Balloons_DeployDialog_Text               : "Click <b>Deploy</b> to launch your application.",
    LT_Balloons_Deploying_Text                  : "The deployment will be completed in a few seconds.",

    LT_EnvWizard_Pricing_MaxLimit_Descr         : "The maximum possible cost for the chosen period (i.e. if all nodes in environment consume all of the resources, allocated to each server via Scaling Limit).",

    LT_EnvScaling_Label_Net                     : "Network",
    LT_EnvScaling_Label_DiskIO                  : "Disk I/O",
    LT_EnvScaling_Label_DiskIOPS                : "Disk IOPS",
    LT_EnvAlerts_Label_Type_DiskIO              : "Disk I/O",
    LT_EnvAlerts_Label_Type_DiskIOPS            : "Disk IOPS",
    LT_EnvAlerts_Text_Type_DiskIO               : "Disk I/O",
    LT_EnvAlerts_Text_Type_DiskIOPS             : "Disk IOPS",
    LT_Statistics_Label_ExtNet                  : "External traffic",

    LT_EnvScaling_Field_UpCondition_Text        : "Whenever loading is more than",
    LT_EnvScaling_Field_DownCondition_Text      : "Whenever loading is less than",
    LT_Units_kBps                               : "KB/s",
    LT_Units_Hz                                 : "Hz",
    LT_Statistics_Label_IoLimit                 : "I/O limit",
    LT_Statistics_Label_Io                      : "I/O",

    LT_EnvScaling_Tip_DiskIOPS                  : "Disk input/output rate (in operations per second)",
    LT_EnvScaling_Tip_DiskIO                    : "Disk input/output rate (in bytes)",
    LT_EnvScaling_Tip_NetExt                    : "External network traffic usage (outgoing/incoming, in bytes)",
    LT_EnvScaling_Tip_CPU                       : "CPU usage (in Hz)",
    LT_EnvScaling_Tip_RAM                       : "RAM usage (in bytes)",
    LT_EnvScaling_Label_Operations              : "Operations",
    LT_EnvScaling_Label_Bytes                   : "Bytes",

    LT_EnvAlerts_Field_Group                    : "Nodes",
    LT_EnvAlerts_Column_Node                    : "Nodes",
    LT_EnvTrHistory_Column_Node                 : "Nodes",

    LT_EnvAlerts_Label_Notification_Frequency   : "Notification frequency",
    LT_EnvAlerts_Hours                          : "hour(s)",

    //LT_EnvWizard_Warning_UpgradeAccount         : "You have reached the default limits, allowed for your environments. Please contact us to increase the limits.",
    LT_EnvWizard_Warning_HA_Off                 : "The high-availability feature will be disabled, as it requires an NGINX Load-Balancer node for being added to your environment to work properly.",
    LT_EnvWizard_Warning_OwnerLimits            : "The owner has reached the default account limits.",
    // LT_EnvWizard_Warning_Cloudlets              : "The minimum recommended cloudlets amount for <b>%(node)</b> is <b><i>%(count)</b></i>.",
    LT_EnvWizard_Warning_HA_Usage               : "You need to have an NGINX Load-Balancer node added to your environment for the high-availability clustering feature to work properly.",
    LT_EnvWizard_Warning_FTP_Off                : "You require Public IP to access the node via FTP.",
    //LT_EnvWizard_Warning_On_ExternalIP_Off      : "Custom SSL will become unavailable.",
    //LT_EnvWizard_Warning_CreateOff              : "You are not allowed to create more environments due to your account restrictions. [TEXT_INCREASE_LIMITS_SUPPORT/]",
    //LT_EnvWizard_Warning_MaxResources           : "Your %(HOSTER_NAME) account balance has run out of money. Please, refill your account to create an environment.",
    //LT_EnvWizard_Warning_MinBalance             : "Your %(HOSTER_NAME) account currently has a negative balance. Please recharge your account to create an environment. Feel free to contact us if you believe that this is an error.",
    //LT_EnvWizard_Warning_MaxEnvsCount           : "You have reached the maximum allowed number of environments, set by default. Please, contact us to change the limits for your account.",

    LT_EnvWizard_W_HA_SingleBalancer            : "Your environment should contain a single balancer node for the high-availability clustering to work properly.",
    LT_EnvWizard_W_NodeNotValid                 : "<b>%(node)</b> cannot be created. Please try again or contact us if this continues to fail.",
    LT_EnvWizard_W_TariffMinCld                 : "According to your tariff plan, the minimal server size should be %(count) cloudlet(s).",
    LT_EnvWizard_Warning_Demo_LockedCompute     : "For the purpose of this demo, we have added an app server instance to your environment.",
    //LT_Menu_CloneEnvironment_Disabled           : "You have reached the maximum allowed number of environments. Please, contact us to change the limits for your account.",
    //LT_EnvWizard_Warning_EditOff                : "The requested environment configuration exceeds your account limits. Please, contact us if you’d like to change the limits for your account.",
    LT_EnvWizard_Warning_CustomSSL_Off          : "Custom SSL will become unavailable.",
    LT_EnvWizard_Hint_HA                        : "The maximum number of instances is equal to %(nTotal) (%(nGroupsCount)x2HA).",

    //LT_EnvWizard_Warning_MaxResources_Trial     : "The requested configuration exceeds the trial account limits. Please, upgrade now to remove this <a action='limits'>limitation</a>.",
    //LT_EnvWizard_Warning_MinBalance_Trial       : "Your trial account balance has been depleted. Please, upgrade now to add funds to the account and continue using %(HOSTER_NAME).",
    //LT_EnvWizard_Warning_MaxEnvsCount_Trial     : "You have reached the maximum allowed number of environments for trial account. Please, upgrade now to remove this <a action='limits'>limitation</a>.",
    //LT_EnvWizard_Warning_UpgradeAccount_Trial   : "The requested configuration exceeds the trial account limits. Please, upgrade now to remove this <a action='limits'>limitation</a>.",
    //LT_EnvWizard_W_MaxCloudlets_Trial           : "Server size is limited to %(count) cloudlets for trial accounts. Upgrade now to increase this limit.",
    //LT_EnvWizard_W_ExtIp_Trial                  : "Public IP addresses are not available for trial accounts. Upgrade now to remove this <a action='limits'>limitation</a>.",
    //LT_EnvWizard_W_HA_Trial                     : "The high-availability clustering is not available for trial accounts. Upgrade now to remove this <a action='limits'>limitation</a>.",
    //LT_EnvWizard_W_Enabled_Trial                : "Elastic Virtual Private Servers are only available for paid accounts. Please, upgrade now to remove this <a action='limits'>limitation</a>.",
    //LT_EnvWizard_W_MaxEnvNodes_Trial            : "The overall number of servers instances is limited to %(count) for trial environments. Upgrade now to remove this limitation.",
    //LT_EnvWizard_W_MaxSameNodes_Trial           : "The number of nodes within a single environment layer is limited to %(count) for trial environments. Upgrade now to remove this limitation.",

    //LT_EnvWizard_W_MaxResources_TrialRegistered : "The requested configuration exceeds the trial account limits. Please, refill your balance to remove this <a action='limits'>limitation</a>.",
    //LT_EnvWizard_W_MaxEnvsCount_TrialRegistered : "You have reached the maximum allowed number of environments for your account. Please, refill your balance to remove this <a action='limits'>limitation</a>.",
    //LT_EnvWizard_W_MaxCloudlets_TrialRegistered : "Server size is limited to %(count) cloudlets. Please, refill your balance to remove this <a action='limits'>limitation</a>.",
    //LT_EnvWizard_W_Enabled_TrialRegistered      : "Virtual Dedicated Servers are not available for your account. Please refill your balance to remove this <a action='limits'>limitation</a>.",
    //LT_EnvWizard_W_FillAcc_TrialRegistered      : "The requested configuration exceeds the trial account limits. Please, refill your balance to remove this <a action='limits'>limitation</a>.",
    //LT_EnvWizard_W_HA_TrialRegistered           : "The high-availability clustering is not available for your account. Please, refill your balance to remove this <a action='limits'>limitation</a>.",
    //LT_EnvWizard_W_ExtIp_TrialRegistered        : "Public IP addresses are not available for your account. Please, refill your balance to remove this <a action='limits'>limitation</a>.",
    //LT_EnvWizard_W_MinBalance_TrialRegistered   : "Your account balance has been depleted. Please, refill your balance, to continue using %(HOSTER_NAME).",
    //LT_EnvWizard_W_MaxEnvNodes_TrialRegistered  : "The overall number of servers’ instances per environment is limited to %(count) for your account. Please, refill your balance to remove this limitation.",
    //LT_EnvWizard_W_MaxSameNodes_TrialRegistered : "The number of nodes within a single environment layer is limited to %(count) for your account. Please refill your balance to remove this limitation.",

    //LT_EnvWizard_Warning_Btn_ContactUs          : "Contact Us",
    //LT_EnvWizard_Warning_Btn_Refill             : "Refill",
    //LT_EnvWizard_Warning_Btn_Upgrade            : "Upgrade",

    LT_EnvWizard_Status_FetchingTags            : "Fetching tags",

    LT_E_Platform_4095                          : "The authorization has failed while trying to fetch <b>%(image)</b> image data from the registry. Please, recheck the specified data and try again.",

    LT_AppStore_Field_Tag_W_TagNotExist         : "The tag <b>%(tag)</b> does not exist. Please, select another tag.",

    LT_Task_Name_108	                        : "Starting %(name) in the ID %(nodeid) container of %(env)",

    LT_W_DockerImagesNotFound                   : "There are no images in the %(repository) repository. Please double-check your entries.",

    LT_EnvAlerts_Label_Type_Cloudlets           : "Cloudlets",
    LT_EnvAlerts_Label_Type_Memory              : "Memory",
    LT_EnvAlerts_Label_Type_CPU                 : "CPU",
    LT_EnvAlerts_Label_Type_Disk                : "Storage",
    LT_EnvAlerts_Label_Type_INodes              : "Inodes",

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Release: 4.6
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    LT_Notify_Label_ItemExists                  : "Item <b>%(name)</b> already exists.",

    LT_EnvWizard_Pricing_Cloudlet               : "cloudlet",
    LT_EnvWizard_PriceSlider_Cloudlets_Total    : "Total",
    LT_EnvWizard_PriceSlider_Cloudlets_From     : "From",
    LT_EnvWizard_PriceSlider_Cloudlets_To       : "To",
    LT_EnvWizard_PriceSlider_ScalingLimit       : "Scaling Limit",
    LT_EnvWizard_PriceSlider_Discount           : "Discount:",

    LT_EnvWizard_Period_Hour                    : "hour",
    LT_EnvWizard_Period_Month                   : "month",
    LT_EnvWizard_Period_Day                     : "day",

    LT_Billing_Column_Storage                   : "Paid Storage",
    LT_Billing_Column_ExtTraffic                : "Paid Traffic",
    LT_SolutionWizard_Error_Cant_Download_File  : "Cannot download the file by the given URL. Please recheck the URL and try again.",

    LT_TutorSlider_Text_PayForUse               : "Pay For The Usage",
    LT_TutorSlider_Text_UsePaid                 : "Pay For The Limits",

    LT_UserMng_Warning_UserInviteNotAllowed     : "The <b>%(email)</b> account can't be invited for collaboration",
    LT_EnvTransfer_Error_UserTransferNotAllowed : "The <b>%(envName)</b> environment transfer to <b>%(email)</b> account is not allowed.",

    LT_TutorSlider_EstimatedCost                : "Estimated cost:",

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Release: 4.6.1
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    LT_EnvWizard_Pricing_TotalCost              : "total",

    LT_EnvWizard_Pricing_Cloudlet_Sum           : "1 {0} = {1} + {2}",
    LT_EnvWizard_Pricing_RAMTip                 : "RAM",
    LT_EnvWizard_Pricing_CPUTip                 : "CPU",
    LT_Quotas_Cloudlet_Sum                      : "1 {0} = {1} RAM + {2} CPU",

    LT_EnvWizard_PriceSlider_Dynamic            : "Scaling Limit:",
    LT_EnvWizard_PriceSlider_Reserved           : "Reserved Cloudlets:",

    LT_EnvWizard_PriceSlider_EstimatedCost      : "Estimated Cost:",

    LT_EnvWizard_Label_MonthlyCost	    	    : "monthly",
    LT_EnvWizard_Label_DailyCost	    	    : "daily",
    LT_EnvWizard_Label_Hourly	    	        : "hourly",

    LT_EnvWizard_Descr_Total    	   	        : "Total cost at <span class=\"marked\">100%</span> load on <span class=\"marked\">ALL</span> containers",
    LT_EnvWizard_Descr_UsagePay  	   	        : "You do not pay for unused resources",
    LT_EnvWizard_Descr_TotalReserved    	   	: "You pay the fixed price for reserved resources",

    LT_EnvWizard_PriceBalloon_From              : "FROM",
    LT_EnvWizard_PriceBalloon_To                : "TO",
    LT_EnvWizard_PriceBalloon_Fixed             : "FIXED PRICE",

    LT_EnvWizard_Hint_ReservedCloudlets		    : "<div class='dfn'>Reserved Cloudlets</div>" +
        "<p>Reserve the cloudlets to pay a fixed price. The more you reserve, the bigger the discount is!</p>%(illustration)",

    LT_EnvWizard_Hint_DynamicCloudlets		    : "<div class='dfn'>Scaling Limit</div>" +
        "<p>Define the maximum amount of resources for automatic vertical scaling based on load changes</p>%(illustration)",

    LT_EnvWizard_Scaling_VerticalPerNode        : "Vertical Scaling per Node",
    LT_EnvWizard_Scaling_Horizontal             : "Horizontal Scaling",
    LT_EnvWizard_HA                             : "High-Availability",

    LT_EnvWizard_Price_Quotas                   : "Quotas & Pricing",

    LT_EnvWizard_Label_EnvName                  : "Environment Name",
    LT_Marketplace_Label_EnvName                : "Environment name",

    LT_DetailsHint_Label_FreeRes                : "Free Resources",
    LT_DetailsHint_Label_FreeResPrice           : "FREE",
    LT_EnvWizard_Pricing_PricingDocs            : "How Pricing Works",
    LT_EnvWizard_Pricing_DisabledClds           : "Disabled",

    LT_EnvWizard_Hint_PricingDoc                : "More details about pricing can be found in documentation",

    LT_EnvWizard_PricingDetails_ScalingLimit    : "Scaling Limit",

    LT_EnvWizard_PricingDetails_Price           : "Price",
    LT_EnvWizard_PricingDetails_Save            : "Save",
    LT_EnvWizard_PricingDetails_PayHourly       : "Pay Hourly",
    LT_EnvWizard_PricingDetails_PayDaily        : "Pay Daily",
    LT_EnvWizard_PricingDetails_PayMonthly      : "Pay Monthly",
    LT_EnvWizard_PricingDetails_Discount        : "Discount",
    LT_EnvWizard_PricingDetails_Total           : "Total",

    LT_EnvWizard_Text_TrialPrices               : "*Free of charge for the trial period",
    LT_EnvWizard_Text_BetaPrices                : "*Free of charge for the beta period",

    LT_TutorSlider_Descr_Total    	   	        : "Total cost at <span class=\"red\">100%</span> load on <span class=\"red\">ALL</span> containers",
    LT_TutorSlider_Label_From  	   	            : "From",
    LT_TutorSlider_Label_To  	   	            : "To",

    LT_TutorSlider_Cloudlet    	   	            : "1 {0} = {1} + {2}",

    LT_EnvWizard_Hint_Pricing                   : "Click to view detailed information about quotas and pricing",
    LT_EnvironmentWizard_Label_Databases    	: "Databases",

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Release: 4.7
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    LT_Common_Button_ContactUs                  : "Contact Us",
    LT_Common_Button_Refill                     : "Refill",
    LT_Common_Button_Upgrade                    : "Upgrade",
    LT_Common_Button_LearnMore                  : "Learn more",
    LT_Common_Button_EnvSettings                : "Env. Settings",
    LT_Common_Button_IncreaseLimits             : "Increase Limits",
    LT_SolutionDlg_Docker_PleaseWait            : "Docker container is being installed.<br>Please wait...",

    TEXT_CONTACT_SUPPORT                        : "[ACTION_HOSTER_SUPPORT]Contact us[/ACTION_HOSTER_SUPPORT] for the assistance.",

    // system detects the required increase limit method and returns one of the placeholders [TEXT_INCREASE_LIMITS_SUPPORT, TEXT_INCREASE_LIMITS_UPGRADE, TEXT_INCREASE_LIMITS_REFILL]
    //TEXT_INCREASE_LIMITS                      : "",

    TEXT_INCREASE_LIMITS_SUPPORT                : "[ACTION_HOSTER_SUPPORT]Contact us[/ACTION_HOSTER_SUPPORT] to get [ACTION_ACCOUNT_LIMITS]extended[/ACTION_ACCOUNT_LIMITS] possibilities.",
    TEXT_INCREASE_LIMITS_UPGRADE                : "[ACTION_UPGRADE_ACCOUNT]Upgrade now[/ACTION_UPGRADE_ACCOUNT] to [ACTION_ACCOUNT_LIMITS]extend[/ACTION_ACCOUNT_LIMITS] the possibilities.",
    TEXT_INCREASE_LIMITS_REFILL                 : "[ACTION_REFILL_ACCOUNT]Refill your balance[/ACTION_REFILL_ACCOUNT] to increase the [ACTION_ACCOUNT_LIMITS]limits[/ACTION_ACCOUNT_LIMITS].",

    LT_EnvWizard_Warning_CreateOff              : "You are not allowed to create more environments due to your account restrictions. [TEXT_INCREASE_LIMITS_SUPPORT/]",
    LT_Notify_Label_VPSQuotaMismatch            : "Creation of Elastic VPS node with such parameters is not available due to your account restrictions. [TEXT_INCREASE_LIMITS_SUPPORT/]",

    // ENVIRONMENT_QUOTA_LIMIT_REACHED
    LT_E_Platform_2338                          : "The requested configuration exceeds your account limits. [TEXT_INCREASE_LIMITS/]",

    // ENVIRONMENT_MAX_ENVS_REACHED
    LT_E_Platform_2360                          : "The number of environments is limited to <b>(%(USER_QUOTA_ENV_COUNT))</b> per account.<br> [TEXT_INCREASE_LIMITS/]",

    // ENVIRONMENT_OVER_CHUNKS
    LT_E_Platform_2361                          : "The maximum server size is <b>%(USER_QUOTA_ENV_CLOUDLETS)</b> cloudlets. [TEXT_INCREASE_LIMITS/]",

    // ENVIRONMENT_HA_NOT_ALLOWED
    LT_E_Platform_2362                          : "The high-availability clustering is not enabled for your account. [TEXT_INCREASE_LIMITS/]",

    //ENVIRONMENT_VDS_NOT_ALLOWED
    LT_E_Platform_2364                          : "Elastic VPS (Virtual Private Server) is not enabled for your account. [TEXT_INCREASE_LIMITS/]",

    //ENVIRONMENT_MAX_NODES_REACHED
    LT_E_Platform_2365                          : "The maximum number of server instances per environment is <b>%(USER_QUOTA_ENV_NODES)</b> for your account. [TEXT_INCREASE_LIMITS/]",

    // ENVIRONMENT_MAX_SAME_NODES_REACHED
    LT_E_Platform_2366                          : "The maximum number of nodes within a single environment layer is <b>%(USER_QUOTA_ENV_NODEGROUP_NODES)</b> for your account. [TEXT_INCREASE_LIMITS/]",

    // ENVIRONMENT_EXPORT_IMPORT_NOT_ALLOWED
    LT_E_Platform_2369                          : "Export of environments is not available for your account. [TEXT_INCREASE_LIMITS/]",

    // ENVIRONMENT_NODE_TYPE_NOT_ALLOWED, ENVIRONMENT_TYPE_NOT_SUPPORTED
    LT_E_Platform_2372                          : "The required type(s) of nodes are either not supported within the current platform or not available for your account. [TEXT_CONTACT_SUPPORT/]",

    // ENVIRONMENT_MIGRATION_NOT_ALLOWED
    LT_E_Platform_2373                          : "The option of environment migration is not available for your account. [TEXT_INCREASE_LIMITS/]",

    // ENVIRONMENT_ENDPOINT_NOT_ALLOWED
    LT_E_Platform_2378                          : "Adding endpoints to nodes is not available for your account. [TEXT_INCREASE_LIMITS/]",

    LT_EnvProgress_Create_Title_Success         : "Environment <b>%(name)</b> has been successfully created. The detailed information was sent to your email.",
    LT_EnvProgress_Create_Title_Failed          : "Creation of the <b>%(name)</b> environment has failed.",
    LT_EnvProgress_Create_SuccessText           : "<b>What's next?</b>" +
    "<ul>" +
    "   <li>[URL_DOCS_DEPLOYMENT_GUIDE]Deployment Guide[/URL_DOCS_DEPLOYMENT_GUIDE]</li>" +
    "   <li>[URL_DOCS_APP_CONFIGURATION]Application Configuration[/URL_DOCS_APP_CONFIGURATION]</li>" +
    "   <li>[URL_DOCS_ENV_ALERTS]Application Monitoring[/URL_DOCS_ENV_ALERTS]</li>" +
    "   <li>[URL_DOCS_AUTO_HORIZONTAL_SCALING]Automatic Horizontal Scaling[/URL_DOCS_AUTO_HORIZONTAL_SCALING]</li>" +
    "</ul>",

    LT_EnvProgress_Create_SuccessText_Docker    : "<b>What's next?</b>" +
    "<ul>" +
    "   <li>[URL_DOCS_DOCKER_CONFIG]Docker Container Configuration[/URL_DOCS_DOCKER_CONFIG]</li>" +
    "   <li>[URL_DOCS_DOCKER_SSH_ACCESS]Docker Container SSH Access[/URL_DOCS_DOCKER_SSH_ACCESS]</li>" +
    "   <li>[URL_DOCS_DOCKER_REDEPLOY]Docker Container Redeploy[/URL_DOCS_DOCKER_REDEPLOY]</li>" +
    "   <li>[URL_DOCS_ENV_ENDPOINTS]Endpoints[/URL_DOCS_ENV_ENDPOINTS]</li>" +
    "   <li>[URL_DOCS_AUTO_HORIZONTAL_SCALING]Automatic Horizontal Scaling[/URL_DOCS_AUTO_HORIZONTAL_SCALING]</li>" +
    "</ul>",

    LT_EnvProgress_Edit_Title_Success           : "Configuration of the <b>%(name)</b> environment has been successfully updated.",
    LT_EnvProgress_Edit_Title_Failed            : "Reconfiguration of the <b>%(name)</b> environment has failed.",

    LT_Notify_Label_RegionNoFreeHardware        : "We have no available hardware in the <b>%(region)</b> region at the moment. Please select another region or try again in a few hours.",

    LT_EnvWizard_Confirm_CloseAndIgnoreChanges  : "Environment topology dialog for the <b>%(envName)</b> environment will be closed and all of the changes will be discarded, continue?",

    LT_EnvironmentWizard_Label_TotalHourly	    : "Total hourly cost",
    LT_EnvironmentWizard_Label_TotalMonthly	    : "Total monthly cost",
    LT_EnvironmentWizard_Label_TotalDaily	    : "Total daily cost",

    LT_Quotas_Text_Network_Limit                : "External network bandwidth",
    LT_Units_Mbps                               : "Mbps",

    LT_Task_Name_111                            : "Adding %(title) SSH private key",
    LT_Task_Name_112                            : "Adding %(title) SSH public key",

    LT_EnvWizard_PricingDetails_Count           : "Count",
    LT_EnvWizard_PricingDetails_Containers      : "Containers",

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Shared Storage
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    LT_Task_Name_84	                            : "Mounting %(path) directory to the %(name) ID %(nodeId) node of %(env) environment",
    LT_Task_Name_85	                            : "Unmounting %(path) directory from the %(name) ID %(nodeId) node of %(env)",
    LT_Task_Name_86	                            : "Mounting %(path) directory to the %(name) container of %(env)",
    LT_Task_Name_87	                            : "Unmounting %(path) directory from the %(name) container of %(env)",
    LT_Task_Name_88	                            : "Configuring volumes for the %(name) container of %(env)",
    LT_Task_Name_89	                            : "Adding %(name) node to the %(env) environment",
    LT_Task_Name_90	                            : "Unmounting the %(name) %(path) directory within %(env) environment from the %(clientPath) directory of node with ID %(clientNodeId)",
    LT_Task_Name_91	                            : "Configuring mount points for the %(name) ID %(nodeId) node of %(env)",
    LT_Task_Name_113                            : "Adding %(path) volume to the %(name) node in %(env)",
    LT_Task_Name_114                            : "Removing %(path) volume from the %(name) node in %(env)",

    LT_E_Platform_2030                          : "The %(path) path is already mounted.",
    LT_E_Platform_FOLDER_MOUNT_FAILED           : "Creation of mount point at %(path) has failed. Please check the appropriate server's availability, conformity of permissions and firewall settings.",
    LT_E_Platform_NFS_SERVER_NOT_SUPPORTED      : "The chosen <b>%(node)</b> container does not support the ability of being treated as an NFS server for data storing. Try the default Storage template instead.",
    LT_E_Platform_FILE_MANAGER_PERMISSION_DENIDED : "Access denied! Please recheck permissions for the appropriate directory.",
    LT_E_Platform_FILE_EXPORT_OF_MOUNTED_DIRECTORY : "Export of the already mounted <b>%(path)</b> directory is forbidden.",
    LT_E_Platform_FILE_MOUNT_OF_EXPORTED_DIRECTORY : "Adding mount point to the exported directory is forbidden.",
    LT_E_Platform_NFS_SERVER_INCORRECT_CONFIG_FILE : "The <b>%(path)</b> NFS server configuration file is not valid. Please, recheck the configuration.",

    LT_W_MaxFileNameLength                      : "The maximum file/folder name length is %(length)",

    LT_Action_MountDirectory                    : "mount directory",
    LT_Action_UnmountDirectory                  : "unmount directory",

    LT_Units_Bytes                              : "B",
    LT_Units_Tb                                 : "TB",

    // FILE_CROSS_MOUNT_IS_FORBIDDEN
    LT_E_Platform_2032                          : "Cross-mounts are forbidden!",

    LT_Warning_RestrictedPathNames              : "Path name cannot be equal to [%(names)]",
    LT_Warning_RestrictedPaths                  : "The path cannot begin with [%(startsWith)] and equals - [%(equals)]",
    LT_Warning_RestrictedPath                   : "Usage of the specified path is not allowed",
    LT_Common_Confirm_ReloadNotSaved            : "Content was not saved, reload?",
    LT_Process_Label_CheckingDependencies       : "Checking dependencies...",

    LT_Environments_Confirm_StartEnv            : "Starting %(sName) environment",
    LT_Environments_Confirm_StopEnv             : "Stopping %(sName) environment",

    LT_EnvDependencies_Title_Details            : "Details",
    LT_EnvDependencies_Title                    : "%(env) dependencies",
    LT_EnvDependencies_Text_EnvDepend           : "Node(s) in the environment depend on the following components:",
    LT_EnvDependencies_Text_CmpDepend           : "The following components depend on the current environment node(s):",
    LT_EnvDependencies_Column_Component         : "Component",
    LT_EnvDependencies_Column_EnvNode           : "Node",
    LT_EnvDependencies_Column_Server            : "Server",
    LT_EnvDependencies_EmptyText                : "No dependencies found",

    LT_Confirm_IgnoreDependenciesCheck          : "Could not check environment dependencies. Proceed anyway?",
    LT_Common_Text_AffectDependentCmp           : "The applied settings may affect a proper work of the components, which depend on the current environment node(s).",
    LT_Common_Text_EnvDependOn                  : "Current environment nodes depend on some external components and could not work properly without them being run.",

    // uses like 'action' placeholder in LT_Common_Text_AffectDependentCmp
    LT_Confirm_ApplyChanges                     : "Apply changes?",

    LT_EnvMigration_Warning_HasDependencies     : "The migration process may affect [ACTION_SHOW_DEPENDENCIES]availability of the components[/ACTION_SHOW_DEPENDENCIES] that depend on the current environment node(s).",

    LT_EnvClone_Field_KeepMounts                : "Keep external mounts",
    LT_EnvClone_Field_KeepMounts_Tip            : "If enabled, all mount points to servers in other environments will be replicated within cloned containers.",

    LT_RedeployContainer_Field_KeepVols         : "Keep volumes data",
    LT_RedeployContainer_Field_KeepVols_Tip     : "If enabled, all data within container volumes will be saved and remain available after redeployment.",
    //TODO: нужно адаптировать в связи с добавлением новой опции "Keep volumes data"
    LT_RedeployContainer_HelpTip                : "Here you can update the chosen Docker container(s) to another template tag without losing your custom data and configurations.  [URL_DOCS_DOCKER_REDEPLOY]%(LT_Common_Button_LearnMore)[/URL_DOCS_DOCKER_REDEPLOY]",

    LT_UploadFiles_Title_Dialog                 : "Upload files",
    LT_UploadFiles_Label_Empty_Text			    : "Select file(s)",

    //LT_EnvWizard_Storage                        : "Storage",
    LT_EnvWizard_Field_StorageLimits_Tip        : "View limits",
    LT_EnvWizard_Hint_Storage                   : "Special container type for data storing.",

    //TODO: нужно адаптировать - квота применяется на нод группу, старый текст: "Maximum number of the same nodes per environment.",
    LT_Quotas_Text_MaxSameNodesCount            : "Maximum number of nodes per node group (layer).",
    LT_Quotas_Text_MaxCloudlets                 : "Maximum size of the server in cloudlets.",
    LT_Quotas_Text_MaxDiskSpacePerNode          : "Maximum available disk space per node.",
    LT_Quotas_Text_MaxDiskSpacePerStorageNode   : "Maximum available disk space per storage node.",

    //LT_DockerSettings_Text_PredefinedValue      : "Item predefined in image.",
    //LT_DockerSettings_Text_UserValue            : "",

    LT_DockerSettings_Vols_Column_Server        : "Data Location",
    LT_DockerSettings_Vols_Column_ServerPath    : "Remote Path",
    LT_DockerSettings_Vols_Column_Permission    : "Permission",
    LT_DockerSettings_Vols_Label_UmountPath     : "Unmount path",
    LT_DockerSettings_Vols_Label_VolFrom        : "Volumes From",
    LT_DockerSettings_Vols_Label_NoVolumes      : "No volumes",
    LT_DockerSettings_Vols_Label_From           : "from:",
    LT_DockerSettings_Vols_W_AlreadyMounted     : "The %(path) volume  is already mounted.",
    LT_DockerSettings_Vols_W_Predefined         : "Predefined volumes can not be deleted.",
    LT_DockerSettings_Vols_W_AddDublicate       : "Volume with such path is already <br> present in the list!",
    LT_DockerSettings_Vols_W_AddAlreadyMounted  : "The volume is already mounted and will be remounted <br> to the selected data container.",

    LT_Common_Label_Right_ReadWrite             : "rw",
    LT_Common_Label_Right_ReadWrite_Tip         : "Read/write permission",
    LT_Common_Label_Right_ReadOnly              : "ro",
    LT_Common_Label_Right_ReadOnly_Tip          : "Read-only permission",


    LT_VolFrom_Field_SourceNode                 : "Node",
    LT_VolFrom_Field_SourceNode_EmptyText       : "Please select a container",
    LT_VolFrom_Field_Volumes                    : "Volumes",

    LT_EnvNodesCombo_Label_CurrentEnv           : "%(envName) (current)",
    LT_EnvNodesCombo_EmptyStoreText             : "No nodes",

    // LT_Common_Text_MoreDetails                  : "More details...",

    LT_EnvMounts_Editor_HelpTip                 : "Here you can [URL_DOCS_ENV_MOUNTS]add a mount point[/URL_DOCS_ENV_MOUNTS] - directory in the container's file system, which is connected to the remote storage server for utilizing data from it.",
    //LT_EnvMounts_Editor_HelpTip                 : "Read [link]documentation[/link] to find out more details on mount points.",

    LT_EnvMounts_Editor_Title                   : "Add Mount Point",
    LT_EnvMounts_Editor_Field_Server            : "NFS Server",
    LT_EnvMounts_Editor_Field_Server_EmptyText  : "Server Domain or IP",
    LT_EnvMounts_Editor_Field_Path              : "Remote Path",
    LT_EnvMounts_Editor_Field_MountPoint        : "Mount Point",
    //LT_EnvMounts_Editor_Field_MountPoint_Tip    : "Mount point is the directory in the container's file system with the additional data storage being mounted from the remote location.",
    LT_EnvMounts_Editor_Field_MountType         : "Source",
    LT_EnvMounts_Editor_Field_AllNodes          : "Mount to all nodes",
    LT_EnvMounts_Editor_Field_AllNodes_Tip      : "If enabled, the new mount point will be added to all containers of the current node group (layer).",
    LT_EnvMounts_Editor_Field_ReadOnly          : "Read Only",

    LT_EnvMounts_Type_LocalFS                   : "Local Filesystem",
    LT_EnvMounts_Type_DataContainer             : "Data Container",
    LT_EnvMounts_Type_MasterContainer           : "Master Container",
    LT_EnvMounts_Type_External                  : "External Server",

    LT_EnvMounts_Type_LocalFS_HelpTip           : "All the data will be stored within the current container's [URL_DOCS_MOUNT_TYPE_NO_MOUNT]local filesystem[/URL_DOCS_MOUNT_TYPE_NO_MOUNT] and remain present after its restart or redeployment.",
    LT_EnvMounts_Type_DataContainer_HelpTip     : "Choose a [URL_DOCS_MOUNT_TYPE_CONTAINER]separate container[/URL_DOCS_MOUNT_TYPE_CONTAINER] within any of your environments for the data to be stored in.",
    LT_EnvMounts_Type_MasterContainer_HelpTip   : "All nodes within the layer, including the further added ones, will be mounted to the [URL_DOCS_MOUNT_TYPE_MASTER]master container[/URL_DOCS_MOUNT_TYPE_MASTER] (i.e. the initially created node of a layer).",
    LT_EnvMounts_Type_External_HelpTip          : "All nodes within the layer will be mounted to an [URL_DOCS_MOUNT_TYPE_EXTERNAL]external server[/URL_DOCS_MOUNT_TYPE_EXTERNAL], intended to store the data. Note that in this case it's strongly recommended to use external IP address(es) for your nodes in order to avoid any security issues.",
    // LT_EnvMounts_Type_VolumesFrom_HelpTip       : "Сhoose the node you'd like to copy the volumes settings from in order to mount them at the current container.",

    // volume editor
    // LT_Volume_Editor_Field_Mount                : "Mount NFS",
    // LT_Volume_Editor_Field_Mount_Tip            : "Connect the remote storage directory to a particular location at the container's filesystem. [URL_DOCS_ENV_MOUNTS]%(LT_Common_Button_LearnMore)[/URL_DOCS_ENV_MOUNTS]",
    LT_Volume_Editor_Field_Path                 : "Local Path",
    LT_Volume_Editor_Confirm_KeepMount          : "The %(path) path  has been already mounted. Keep it present?",

    LT_EnvMounts_Editor_W_EnvNotRunning         : "Environment is not running.",
    LT_EnvMounts_Info_MountSuccess              : "The %(path) path has been successfully mounted.",

    // file manager
    LT_ConfigManager_Item_Root                  : "Root",
    LT_ConfigManager_Item_Favorite              : "Favorites",
    LT_ConfigManager_Item_Mounted               : "Mount Points",
    LT_ConfigManager_Item_Exported              : "Exports",
    LT_ConfigManager_Label_Directories          : "Directories",

    LT_ConfigManager_Column_Name                : "Name",
    LT_ConfigManager_Column_Server              : "Server",
    LT_ConfigManager_Column_ServerPath          : "Remote Path",
    LT_ConfigManager_Column_Size                : "Size",
    LT_ConfigManager_Column_Modified            : "Last Modified",
    LT_ConfigManager_Column_FileType            : "Type",
    LT_ConfigManager_Column_ClientPath          : "Client Path",
    LT_ConfigManager_Column_Permission          : "Permission",

    LT_ConfigManager_Button_OpenDirectory       : "Navigate to directory",
    LT_ConfigManager_Button_Mount               : "Mount",
    LT_ConfigManager_Button_UnMount             : "Unmount",
    LT_ConfigManager_Button_EditExportsConfig   : "Configuration",

    LT_ConfigManager_Button_Add2Favorites       : "Add to Favorites",
    LT_ConfigManager_Button_RemoveFavorites     : "Remove from Favorites",
    LT_ConfigManager_Button_Add2Volumes         : "Add to Volumes",
    LT_ConfigManager_Button_RemoveVolumes       : "Remove from Volumes",
    LT_ConfigManager_Button_DirectoryActions    : "Actions for the current directory",
    LT_ConfigManager_Button_Open                : "Open",

    LT_ConfigManager_Field_Path_Tip             : "Click to enter the path",
    LT_ConfigManager_Label_SaveForAll           : "Save for all instances",
    LT_ConfigManager_Label_UnMountFromAll       : "Unmount from all instances",

    LT_ConfigManager_Confirm_Unmount            : "Unmount the <b>%(name)</b> directory?",
    LT_ConfigManager_Confirm_UnmountFromClient  : "Unmount the <b>%(name)</b> directory from <b>%(client)</b> node?",
    LT_ConfigManager_Confirm_RenameMountExport  : "Renaming of the mounted/exported folder may affect a proper work of the dependent containers. Rename <b>%(path)</b> to <b>%(newPath)</b> anyway?",
    LT_ConfigManager_Confirm_DeleteMountExport  : "Deletion of the mounted/exported folder may affect a proper work of the dependent containers. %(action)",

    LT_ConfigManager_Exports_EmptyText          : "Folders will be automatically added to this list after being mounted to other containers. [URL_DOCS_ENV_EXPORTS]%(LT_Common_Button_LearnMore)[/URL_DOCS_ENV_EXPORTS]",
    LT_ConfigManager_Favorites_EmptyList        : "Mark the most frequently used files and directories as Favorites to easily access them within this panel.",

    LT_ConfigManager_FileType_File              : "regular file",
    LT_ConfigManager_FileType_Directory         : "directory",
    LT_ConfigManager_FileType_Pipe              : "named pipe",
    LT_ConfigManager_FileType_Socket            : "socket",
    LT_ConfigManager_FileType_CharacterDevice   : "character device",
    LT_ConfigManager_FileType_BlockDevice       : "block device",

    LT_Units_Kbit                               : "Kb",
    LT_Units_Mbit                               : "Mb",
    LT_Units_Gbit                               : "Gb",
    LT_Units_Kbps                               : "kb/s",
    LT_EnvScaling_Label_Bits                    : "Bits",
    LT_EnvScaling_Tip_NetExtOut                 : "External network traffic usage (outgoing only, in bits)",
    LT_EnvAlerts_Text_Type_NetExt               : "Network (out ext. + in ext.)",
    LT_EnvAlerts_Label_Type_NetExt              : "Network (out ext. + in ext.)",
    LT_EnvAlerts_Label_Type_NetExtOut           : "Network (out ext.)",
    LT_EnvAlerts_Text_Type_NetExtOut            : "Network (out ext.)",


    LT_Task_Name_104	                        : "Adding %(triggerName) trigger to %(env)",
    LT_Task_Name_105	                        : "Editing %(triggerName) trigger settings for %(env)",
    LT_Task_Name_106	                        : "Changing %(triggerName) trigger state for %(env)" ,
    LT_Task_Name_107	                        : "Deleting %(triggerName) trigger from %(env)",
    LT_Task_Name_109                            : "Executing command in the %(name) ID %(nodeid) container of %(env)",

    LT_Common_Button_Search						: "Search",

    LT_CodeEditor_Previous                      : "Previous match",
    LT_CodeEditor_Next                          : "Next match",
    LT_CodeEditor_MatchCase                     : "Match case",
    LT_CodeEditor_Regex                         : "Regex",
    LT_CodeEditor_Search_Mathces                : "%(count) match(es)",
    LT_CodeEditor_Search_NoMathces              : "No matches",

    LT_Log_Button_Tail                          : "Tail",
    LT_Log_Button_Pages                         : "Pages",
    LT_Log_File_Truncated                       : "The %(file) file was truncated",

    LT_Settings_Label_EnterDomain			  	: "1. Enter your custom external domain (e.g. mydomain.com) within the field below to bind it to the environment",
    LT_Settings_Label_CName					  	: "2. In your DNS panel, add a CNAME record for the specified domain to point to the <b>%(sDomain)</b> address (<u><a href='%(sDocUrl)' target='_blank'>show me how</a></u>)",

    LT_Units_KiB                                : "KiB",
    LT_Units_MiB                                : "MiB",
    LT_Units_GiB                                : "GiB",
    LT_Units_TiB                                : "TiB",

    LT_EnvEndpoints_Settings_DetailsTips        : "Here you can [link]add and manage endpoints[/link], which can be used by other resources for communication with your containers",

    LT_Environments_Status_13                   : "Stopping...",
    LT_Environments_Status_14                   : "Going to sleep...",

    LT_Process_Label_WaitFewMinutes             : "The process can take a few minutes...",

    LT_E_Platform_DOCKER_DAEMON_FAILED          : "The <b>%(image)</b> image can't be fetched due to temporary technical issues. Please try again later or [ACTION_HOSTER_SUPPORT]contact support[/ACTION_HOSTER_SUPPORT].",
    LT_E_Platform_COULD_NOT_DETECT_OS           : "The <b>%(image)</b> image is based on non-supported OS template. [TEXT_CONTACT_SUPPORT/]",
    LT_E_Platform_COULD_NOT_FIND_DOCKER_IMAGE   : "The <b>%(image)</b> image could not be found. Please double-check your entries.",

    LT_Common_Button_Docs 						: "Docs",

    LT_ExportEnv_Settings_Error_EmptyNodesList  : "There are no containers which can be exported. [URL_DOCS_ENV_EXPORT]%(LT_Common_Button_LearnMore)[/URL_DOCS_ENV_EXPORT]",

    LT_Environments_Column_Usage_QTip           : "CPU: %(cpu)<br /> Mem: %(mem)<br /> HDD: %(disk)<br /> Net: %(net_in)/%(net_out) Mb",
    LT_RestartContainer_Info_Success            : "Container(s) in the <b>%(envName)</b> environment has(ve) been successfully restarted.",

    LT_DockerSettings_Title                     : "Docker %(name) layer settings",

    LT_EnvScaling_ThresholdDiff_Tip             : "The minimum allowed difference between <br>triggers' thresholds is %(diff)%",

    LT_E_Platform_PLATFORM_LICENSE_EXPIRED      : "Looks like there is a license problem on this cluster. Please log in to OPS Panel as administrator to fix it.",

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Release: 4.8
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    LT_ManifestImp_TabJSON_Beautify_Tip         : "Apply proper JSON formatting with indentations and line feeds",
    LT_ManifestImp_TabJSON_WordWrap_Tip         : "Wrap lines",
    LT_EnvWizard_Info_AvailableForBillingAcc    : "This engine support is provided for billing accounts only. [ACTION_UPGRADE_ACCOUNT]Upgrade[/ACTION_UPGRADE_ACCOUNT] your account or [ACTION_HOSTER_SUPPORT]contact us[/ACTION_HOSTER_SUPPORT] to remove this limitation.",

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Disabled price
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    LT_EnvMounts_Editor_Title_Export            : "Export Path From",
    LT_EnvMounts_Editor_Tab_Title_Export        : "Export Directory",
    LT_EnvMounts_Editor_Field_SourceServer      : "From NFS",
    LT_ConfigManager_Button_Export              : "Export",
    LT_EnvMounts_Editor_Field_TargetServer      : "To Container(s)",
    LT_EnvMounts_Type_Export_HelpTip            : "Choose source and target containers to share the data across.",

    LT_EnvWizard_Baloon_CPU_Resources           : "%(cpu) CPU",
    LT_EnvWizard_Baloon_RAM_Resources           : "%(ram) RAM",
    LT_EnvWizard_Pricing_Label_TrafficLimit     : "Traffic Limit per Node",
    LT_EnvWizard_Pricing_ViewLimits_Tip         : "View limits",
    LT_Menu_OpenExtBillingPanel                 : "Billing portal",
    LT_EnvWizard_PriceSlider_TotalResources     : "Total Resources",
    LT_QuotasWindow_Title                       : "Quotas",
    LT_EnvMigration_Text_TargetRegion_Pricing   : "Prices can differ in target region",

    LT_RedeployContainer_Field_RedeployDelay    : "Redeploy delay",
    LT_RedeployContainer_Field_Delay_Unit       : "seconds",
    LT_RedeployContainer_Field_Delay_Hint       : "Time frame between redeployment of two containers in nodes layer",

    LT_Common_Text_Id                           : "ID",

    LT_Environments_Validation_InvalidName      : "The name is invalid. Please specify a different name.",
    LT_Environments_Validation_ForbiddenSymbols : "The name contains characters, which are not allowed for being used in Internet domain names. Please specify a different name.",

    LT_Upload_FileExists                        : "The %(folder) folder already contains such file(s): %(files). Overwrite?",
    LT_Task_Name_43	                            : "Creating file %(fileName) at %(env)",
    LT_Task_Name_44	                            : "Deleting file %(fileName) from %(env)",
    LT_Task_Name_45	                            : "Renaming %(oldFileName) file to %(newFileName) in %(env)",
    LT_Task_Name_47	                            : "Reading file %(fileName) on %(env)",
    LT_Task_Name_48	                            : "Saving file %(fileName) on %(env)",

    LT_W_ContainBeginEndSpaces                  : "File name can't begin or end with a whitespace",
    LT_E_Platform_FILE_MOUNT_NO_INTERNAL_ROUTE  : "Mounting between the chosen nodes is not available due to the internal IP address absence at one of them.",

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Release: 4.9
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    LT_Common_Text_Unit_Seconds                 : "seconds",
    LT_Common_Button_Restart                    : "Restart",
    LT_RestartNodes_Field_SequentialRestartDelay: "Sequential restart delay",
    LT_RestartNodes_Field_Delay_Hint            : "Time frame (in seconds) between restart of two containers within one layer",
    LT_RestartNodes_Info                        : "All containers within the layer will be restarted one by one. Use the spinner below to set the delay between these restart operations in order to avoid service downtime.",
    LT_Context_Sequential_Deploy_Hint           : "Time frame between redeployment of two nodes (containers) in one node group (layer)",
    LT_Context_Sequential_Delay                 : "Sequential deployment delay",
    LT_Upload_FtpLoginFailed                    : "FTP login failed! Please, recheck specified FTP credentials and try again.",

    LT_Quotas_Days                              : "%(count) day(s)",

    LT_Common_Button_ViewLogs                   : "View logs",
    LT_Import_ViewLogs_Tip                      : "View logs",

    LT_Quotas_Text_SSL                          : "%(PLATFORM_VENDOR_NAME) SSL",
    LT_Quotas_Error_SSL                         : "%(PLATFORM_VENDOR_NAME) SSL is not enabled for your account. [TEXT_INCREASE_LIMITS/]",

    LT_EnvScaling_Field_ScaleUpTo               : "Scale out to",
    LT_EnvScaling_Field_ScaleDownTo             : "Scale in to",
    LT_EnvScaling_Column_Nodes                  : "Nodes",
    LT_EnvScaling_Column_AddCondition           : "Scale Out",
    LT_EnvScaling_Column_RemoveCondition        : "Scale In",
    LT_EnvScaling_W_TriggerExist                : "Trigger for this resource type already exists",
    LT_EnvScaling_W_NodeMaxTriggerCountReached  : "You've reached the maximum available number of triggers.",
    LT_EnvScaling_W_BuildNode                   : "This feature is not available for the build-node environment layer.",
    // LT_EnvScaling_W_CPRequired                  : "Within non-Docker environments, this option is available for web/application nodes only.",
    // LT_EnvScaling_HelpTip_CPRequired            : "You need to have a web/application node for this feature to work properly. [link]Click here to configure your environment[/link].",
    LT_EnvScaling_HelpTip                       : "Configure the triggers below to automatically add and remove nodes from your environment based on resources consumption. Cloudlet settings for each added node will be copied from the existing instance(s). Read this [link]documentation[/link] to find out more details.",
    LT_Docs_ZDTModule                           : "Read more about [link-docs]zero-downtime deployment[/link-docs] options.",
    LT_Wizard_Warning_Restart_Group             : "Container(s) within this layer will be restarted in a sequence with predefined delay.",
    LT_ExtDomains_Error_Quota                   : "Custom domains binding is not available for your account. [TEXT_INCREASE_LIMITS/]",
    LT_Quotas_Text_ExtDomains                   : "Custom domains",
    LT_Context_Sequential_Deploy_VCS_Hint       : "Time frame (in seconds) between redeployment of two nodes within one node group (layer)",
    LT_SequentialMavenDeploy_Info               : "All containers within the node group (layer) will be redeployed one by one. Use the spinner below to set the delay between these deployment operations in order to avoid service downtime.",

    LT_Context_Sequential_Update_Delay          : "Sequential update delay",
    LT_SequentialVcsUpdate_Info                 : "All containers within the layer will be updated one by one. Use the spinner below to set the delay between these update operations in order to avoid service downtime.",
    LT_Common_Button_SequentialUpdate           : "Update",

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Release: 4.9.5
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    LT_TaskManager_Status_NoTasks               : "No active tasks",
    LT_TaskManager_Status_ActiveTasks           : "%(count) active task(s)",
    LT_Import_Link_Examples                     : "Examples",
    LT_Tasks_Column_Performer                   : "User",
    LT_EnvWizard_Label_Topology_Docker          : "Docker Containers",
    LT_Notify_Label_NoFreeInternalIps           : "There are no free IP addresses at the moment. Please, [ACTION_HOSTER_SUPPORT]contact support[/ACTION_HOSTER_SUPPORT] to negotiate their addition.",
    LT_ExportEnv_Dlg_Warning_WhatNotExported    : "Note that currently Windows nodes, Storage, Elastic VPS, Maven and Docker containers are exported without any data inside, so you’ll need to transfer the required files and configurations manually afterwards.",

    LT_E_Platform_4060                          : "Deploy failed. Please, check logs to find out more details.",
    LT_BuildUpload_Failed_Warning               : "An error occurred while trying to build the project",

    LT_TrialToPaid_WelcomeDlg_Title             : "Welcome!",
    LT_TrialToPaid_WelcomeDlg_Text              : "Thank you for your interest in our product. You are just one step away to create your account and get the full access to the platform.",
    LT_TrialToPaid_WelcomeDlg_Button_Continue   : "Continue",

    LT_Process_Label_Waiting4Conversion         : "Waiting for conversion...",

    LT_Error_SuspendedAccount_Trial             : "Your trial period has expired and your account has been deactivated. Please [ACTION_UPGRADE_ACCOUNT]upgrade your account[/ACTION_UPGRADE_ACCOUNT] if you'd like to continue using the service.",
    LT_Error_Account_Destroyed                  : "Your account has been destroyed. [TEXT_CONTACT_SUPPORT/]",

    LT_CustomSSL_Text_NotImplemented            : "Custom SSL for %(nodeName) is not supported. Consider using load balancer node as an SSL-proxy.",

    LT_ConfigManager_Button_CopyPath            : "Copy Path",
    LT_ConfigManager_OldBrowser_Info            : "Press Cmd/Ctrl+C to copy",

    LT_Task_Name_110                            : "Executing command for %(name) in %(env)",
    AutoRefill_ConfirmEdit                      : "Change sum of auto-refill payment from %(currentAmount) to %(pureAmount)?",

    LT_Error_EnvironmentClone_Timeout           : "An error occurred while trying to clone the node",

    LT_AppStoreCat_Dockers                      : "Docker Containers",

    // FILE_MANAGER_DOWNLOAD_NOT_EXISTS
    LT_E_Platform_2050                          : "File not exists.",

    // FILE_MANAGER_DOWNLOAD_FILE_SIZE_LIMIT
    LT_Error_MaximumFileSize                    : "File is too large. Download file size limit is %(size)",

    LT_Action_DownloadFile                      : "download file",

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Release: 4.10
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    LT_Units_sec                                : "sec",
    LT_NodeMission_Storage                      : "Storage Containers",
    LT_EnvWizard_Field_StorageLimits            : "Disk Limit",
    LT_EnvWizard_Pricing_Label_StorageLimit     : "Disk Limit per Node",

    LT_EnvWizard_PricingFixed_Resources         : "{0} RAM + {1} CPU + {2} Disk",
    LT_EnvWizard_PricingDetails_Clds            : "Cloudlets (RAM, CPU)",
    LT_EnvWizard_PricingDetails_Reserved        : "Reserved",
    LT_EnvWizard_PricingDetails_Disk            : "Disk Space",
    LT_EnvWizard_Link_PricingVideo              : "[URL_VIDEO_PRICING_MODEL]How to track your spendings?[/URL_VIDEO_PRICING_MODEL]",

    LT_Task_Name_115                            : "Setting disk size for the %(name) ID %(nodeid) node of %(env)",
    LT_Task_Name_116                            : "Setting disk size for %(name) nodes in %(env)",

    LT_EnvWizard_Warning_Cloudlets              : "The minimum cloudlet number for <b>%(node)</b> is <b><i>%(count)</b></i>.",
    LT_E_Platform_ENV_NODE_DISK_MIN_LIMIT       : "The minimum allowed disk size is <b>%(USER_QUOTA_NODE_DISK_MIN_LIMIT)</b>.",
    LT_E_Platform_ENV_NODE_DISK_MAX_LIMIT       : "The maximum available disk size per server is <b>%(USER_QUOTA_NODE_DISK_MAX_LIMIT)</b>. [TEXT_INCREASE_LIMITS/]",
    LT_E_Platform_ENV_STORAGE_NODE_DISK_MAX_LIMIT : "The maximum available disk size per Storage server is <b>%(USER_QUOTA_STORAGE_NODE_DISK_MAX_LIMIT)</b>. [TEXT_INCREASE_LIMITS/]",

    LT_Window_Title                             : "%(HOSTER_NAME) Dashboard",

    LT_Error_Install_Support                    : "Please, contact support to enable this possibility.",
    LT_Error_Install_Upgrade                    : "Please, upgrade your account to enable this possibility.",
    LT_Error_Solution_Docker_Enable             : "Custom Docker containers are not enabled for your account. [TEXT_INCREASE_LIMITS/]",
    LT_Error_Vds_Int_Ip_Disabled                : "Private IP address for VPS is not enabled for your account. [TEXT_INCREASE_LIMITS/]",
    LT_EnvEndpoints_NameNoInternalIpText        : "Unavailable for nodes without private IP address",

    LT_Menu_Toolbar_Tutorial                    : "Tutorial",
    LT_Menu_Toolbar_Api_Docs					: "API",

    LT_Common_Text_Manage                       : "Manage",

    LT_Menu_CreateEnvironment                   : "New environment",
    LT_Environments_Column_Tags                 : "Tags",
    LT_Environments_Owner_HelpTip               : "Owner: %(email)",
    LT_Environments_EnvGroupsBtn_Edit_HelpTip   : "Edit Env Groups",
    LT_Environments_EnvGroupsBtn_Add_Text       : "+ Add to Env Group",

    LT_Environments_NavItem_Root                : "Env Groups",
    LT_Environments_NavItem_Region              : "Region",
    LT_Environments_NavItem_SharedEnvs          : "Shared with Me",

    LT_Common_Button_CreateNew                  : "Create New",
    // LT_Environments_NavItem_EditGroup           : "Edit",
    // LT_Environments_NavItem_RemoveGroup         : "Remove",
    LT_Environments_NavItem_CreateSubGroup      : "Add Child",
    // LT_Environments_NavItem_ManageGroups        : "Manage..."

    LT_EnvGroups_Panel_Title                    :  "Environment Groups",
    LT_EnvGroups_Dlg_Title_Add                  :  "Add Group",
    LT_EnvGroups_Dlg_Title_Edit                 :  "Edit Group: %(name)",
    LT_EnvGroups_Dlg_Field_Parent               :  "Parent Group",
    LT_EnvGroups_Dlg_Field_Parent_EmptyText     :  "Type a name for new or select the existing",
    LT_EnvGroups_Dlg_Field_Environments         :  "Environments",
    LT_EnvGroups_Dlg_Field_Groups               :  "Groups",
    LT_EnvGroups_Selector_Title                 :  "Environment Groups: %(name)",
    LT_EnvGroups_W_NestingCharacter             :  "The \"%(separator)\" character should be only used to define Env Groups nesting.",

    LT_CustomSSL_Label_UpTo                     : "till",
    LT_CustomSSL_Label_Certificates             : "Valid",

    LT_Import_Code_Mode_Json                    : "JSON",
    LT_Import_Code_Mode_Yaml                    : "YAML",
    LT_ManifestImp_TabManifest                  : "JPS",
    LT_ManifestImp_TabManifest_Editor_EmptyText : "Input your JSON or YAML code here...",

    LT_E_Platform_DOWNLOAD_COUNT_LIMIT_REACHED  : "The maximum number of concurrent downloads has been reached. Please wait until the current downloads are finished to add new ones.",
    LT_E_Platform_SERVICE_INTERNAL_ERROR        : "An internal service error has occurred. [TEXT_CONTACT_SUPPORT/]",

    LT_ManifestImp_ManifestDesc                 : "Specify JSON or YAML manifest to automatically deploy the appropriate JPS package into environment with predefined topology and configurations.<br>Use <a target='_blank' href='%(href)'>%(PLATFORM_VENDOR_NAME) JPS Collection</a> to find the ready-to-go solution you need.",


    LT_EnvAlerts_Text_Type_OOMKiller            : "Out of memory (OOM) kill occurs",
    LT_EnvAlerts_Text_Type_OOMKillerCondition   : "OOM kill",
    LT_EnvTrHistory_Field_NodeGroup             : "Node group",
    LT_EnvTrHistory_Field_ResourceType          : "Trigger",
    LT_EnvTrHistory_Condition_OOM               : "Killed",
    LT_EnvTrHistory_OOM_Condition               : "OOM kill",
    LT_EnvTrHistory_Header_ProcessName          : "Process Name",
    LT_EnvTrHistory_Header_ProcessId            : "Process ID",
    LT_EnvTrHistory_Header_ProcessNodeId        : "Node ID",
    LT_EnvTrHistory_Details_Table_Title         : "Killed processes:",
    LT_EnvTrHistory_Filters_Title               : "Filters",
    LT_EnvAlerts_Notify_Immediately             : "Immediately",
    LT_EnvTrHistory_Column_Result               : "Info",

    LT_EnvMigration_TargetRegion_Validation     :  "Selected region is not available for migration",

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Release: 5.0.5
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    LT_Task_Name_117                            : "Switching engine for %(name) node(s) in %(env)",
    LT_ManifestImp_TabURL_UntrustedSource       : "Please ensure the manifest source is trusted to avoid malefactors impact",

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Release: 5.0.6
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    LT_EnvWizard_Tip_ChangeVersion              : "Change version",

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Release: 5.1
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    LT_EnvGroups_Dlg_Text_EmptyList             : "No items to display. To create a new group, type name for it and press Enter.",

    // actions: ACTION_SHOW_ENV_WIZARD, ACTION_SHOW_COLLABORATION_PANEL, ACTION_SHOW_MARKETPLACE
    LT_Environments_EmptyText                   : "<p>Let's get started!</p>[ACTION_SHOW_ENV_WIZARD]Create New Environment[/ACTION_SHOW_ENV_WIZARD] [ACTION_SHOW_COLLABORATION_PANEL]Collaborate on<br> Shared Environment[/ACTION_SHOW_COLLABORATION_PANEL] [ACTION_SHOW_MARKETPLACE]Deploy Solution<br> from Marketplace[/ACTION_SHOW_MARKETPLACE]",
    // actions: ACTION_SHOW_ENV_WIZARD, ACTION_ATTACH_ENVS_TO_GROUP
    LT_Environments_EnvGroup_EmptyText          : "<p>Start using this group now!</p> [ACTION_SHOW_ENV_WIZARD]Create New Environment[/ACTION_SHOW_ENV_WIZARD] [ACTION_ATTACH_ENVS_TO_GROUP]Add Environment<br> to This Group[/ACTION_ATTACH_ENVS_TO_GROUP] [ACTION_SHOW_MARKETPLACE]Deploy Solution<br> from Marketplace[/ACTION_SHOW_MARKETPLACE]",

    LT_BillingHistory_ExportToFile              : "Download CSV",
    LT_ErrorBillingHistory_ExportToFile         : "An error occurred while trying to download the file",
    LT_BillingHistory_IntervalNotValid          : "This interval can be used only for %(value) period",

    LT_Common_Text_Interval_Days                : "days",
    LT_Common_Text_Interval_Weeks               : "weeks",
    LT_Common_Text_Interval_Year                : "year",
    LT_Common_Text_Interval_Years               : "years",

    LT_Config_Tab_Title                         : "%(sType) : config",
    LT_Log_Tab_Title							: "%(sType) : log",
    LT_Statistics_Tab_Title                     : "%(sType) : statistics",
    LT_RedeployContainer_Logs_Tab_Title         : "%(sType) : redeploy",

    LT_Settings_Tab_Title                       : "Settings",
    LT_Tasks_Tab_Title                         	: "Tasks",


    LT_Menu_DeployToEnvironment_NoRights        : "Deployment to this environment is not available due to the limited collaboration permissions.",

    LT_AppStore_Error_ManifestIsCorrupted       : "An error occurred while trying to retrieve application data. Please ensure you've chosen the proper JPS file",

    LT_DockerSettings_Ports_HelpTip_Top         : "Ports %(ports) are opened by default. <br><br>Use [link-endpoints]Endpoints[/link-endpoints] to open any other port outside via Shared Load Balancer or use [link-docs-pubip]Public IP[/link-docs-pubip] to have direct access to all ports of your container." ,
    LT_DockerSettings_Ports_SchemeCaption       : "Environment Network",
    LT_DockerSettings_Ports_SchemeLegend_1      : "Open port by default",
    LT_DockerSettings_Ports_SchemeLegend_2      : "<span class='text-box'>Endpoint</span>&nbsp;randomly assigned port",
    LT_DockerSettings_Ports_SchemeLegend_3      : "Dead (closed) port by default",
    LT_DockerSettings_Ports_SchemeLegend_4      : "Shared Load Balancer",
    LT_DockerSettings_Ports_HelpTip_Bottom      : "Read [link-docs]documentation[/link-docs] to find out more details on managing Docker container ports.",

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Release: 5.2
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    LT_Task_Name_122                            : "Setting variables for %(name) node(s) in %(env)",
    LT_Menu_Toolbar_ConvertAccount              : "Upgrade account",

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Release: 5.3
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    LT_Log_Button_Download                      : "Download",
    LT_Log_Archive_CannotBeRead                 : "Archive files cannot be viewed. To see such file content, either download or open it via SSH.",
    LT_Deploy_VCS_Panel_Title                   : "Git / SVN",
    LT_Deploy_VCS_Panel_Archive                 : "Archive",
    LT_Deploy_VCS_Column_Name                   : "Name",
    LT_Deploy_VCS_Column_Url                    : "URL",
    LT_Deploy_VCS_Btn_Add_Project               : "Add Project",
    LT_Title_Git                                : "Git",
    LT_Title_SVN                                : "SVN",
    LT_Deploy_VCS_SSH_Empty_Text                : "Select...",
    LT_Deploy_VCS_Dlg_Deploy_Title              : "Deploy %(name)",
    LT_Common_Button_Deploy                     : "Deploy",
    LT_Common_Button_AddDeploy                  : "Add and Deploy",
    LT_AddBuild_Option_Existing                 : "Use the existing node",
    LT_AddBuild_Option_New                      : "Add a new node",
    LT_AddBuild_Option_New_Tip                  : "A new node will be added to the selected environment",
    LT_Deploy_VCS_Add_Dlg_Success               : "The project %(name) was successfully added.<br> Now you can deploy it",
    LT_Deploy_Grid_Empty_Text                   : "There are no projects to display",
    LT_Common_Button_BuildDeploy                : "Build and Deploy",
    LT_Deploy_Require_Maven_Text                : "A Maven node is required to build & deploy your project",
    LT_Deploy_Maven_AutoAdd_Text                : "A Maven node is required to build & deploy your project. It will be automatically added to the selected environment.",
    LT_Deploy_Title                             : "Deployment Manager",
    LT_Deploy_VCS_Title_AddProject              : "Add Git / SVN Project",
    LT_Deploy_VCS_Title_EditProject             : "Edit Git / SVN Project",
    LT_Deploy_VCS_Title_DeployProject           : "Deploy from Git / SVN",
    LT_Deploy_Archive_Title_DeployProject       : "Deploy archive",
    LT_Deploy_URL_Title_DeployProject           : "Deploy from URL",
    LT_Deploy_VCS_Post_Deploy_Hook              : "Post-Deploy Hook",
    LT_Deploy_VCS_Post_Deploy_Hook_Empty_Text   : "Enter your script",
    LT_Deploy_VCS_Confirm_Delete                : "Delete <b>%(name)</b> project?",
    LT_Deploy_VCS_Remove_Project_Error          : "An error occurred while trying to remove the project",
    LT_Deploy_VCS_Add_Project_Error             : "An error occurred while trying to add the project",
    LT_Deploy_VCS_Edit_Project_Error            : "An error occurred while trying to edit the project",
    LT_Deploy_VCS_Deploy_Project_Error          : "An error occurred while trying to deploy the project",
    LT_Task_Name_128                            : "Deploying %(projectName) project to %(env)",
    LT_Process_Label_Removing_Item              : "Removing...",
    LT_Deploy_Tip_AddProject                    : "Add a project",
    LT_Deploy_Tip_AddDeployProject              : "Add and Deploy a project",
    LT_Deploy_Tip_ApplyDeployProject            : "Apply changes and Deploy the project",
    LT_Deploy_Tip_ApplyProject                  : "Apply changed project settings",
    LT_Common_Button_Back                       : "Back",
    LT_Environments_Label_Deployments           : "Deployments",
    LT_Common_Title_Deploy                      : "Deploy",
    LT_Common_Text_Project						: "Project",
    LT_Common_Combo_SelectOrAdd_Text            : "Select existing or add a new one",
    LT_Deploy_AddNewProject_Rec                 : "Add new project",
    LT_Common_Label_SelectOrTypeNew             : "Select existing or type a new one",
    LT_UpdateProject_Interval                   : "Check and auto-deploy updates every",

    // LT_Common_Text_Action_Unavailable           : "This action is unavailable at the moment. Please wait until the current actions are finished.",

    LT_Pricing_Column_UnitHourPrice             : "%(sUnit) / hour",
    LT_Pricing_Column_UnitMonthPrice            : "%(sUnit) / month*",

    LT_Quotas_Text_ExternalIP                   : "Public IPv4 addresses.",
    LT_Quotas_Text_ExternalIPv6                 : "Public IPv6 addresses.",

    LT_Quotas_Text_ExtIPv4MaxCount              : "Maximum number of Public IPv4 addresses per environment.",
    LT_Quotas_Text_ExtIPv6MaxCount              : "Maximum number of Public IPv6 addresses per environment.",

    LT_Quotas_Text_ExtIPv4MaxCountPerNode       : "Maximum number of Public IPv4 addresses per node.",
    LT_Quotas_Text_ExtIPv6MaxCountPerNode       : "Maximum number of Public IPv6 addresses per node.",

    LT_OptionsCost_Text_IPv6_Desc               : "This is an external IPv6 address which is directly accessible from outside of the cluster. The charge is taken hourly.",

    LT_Common_Text_ExtIP                        : "Public IP",
    LT_Common_Text_ExtIPv4                      : "Public IPv4",
    LT_Common_Text_ExtIPv6                      : "Public IPv6",

    LT_EnvNodeSettings_Label_ExtIPv4            : "Number of attached Public IPv4 addresses",
    LT_EnvNodeSettings_Label_ExtIPv6            : "Number of attached Public IPv6 addresses",

    LT_Menu_AttachDetachIP                      : "Attach/Detach IP(s)",
    LT_Menu_DetachIP                            : "Detach IP",
    LT_Menu_DetachPrimaryIPRestricted           : "Primary IP should be detached last",

    LT_Confirm_DetachIP                         : "Detach <b>%(ip)</b> IP?",
    LT_Confirm_DetachIPs                        : "Detach all Public IPs from current node?",

    LT_Common_Title_NodeSettings    		    : "Node %(nodeId) Settings",

    LT_Common_Label_Copy2Clipboard              : "Copy to clipboard",
    LT_Common_Label_Copied                      : "Copied!",
    LT_Common_Label_Copy4OldBrowser             : "%(LT_ConfigManager_OldBrowser_Info)",

    LT_Task_Name_31	                            : "Attaching Public IP for %(name) to %(env)",
    LT_Task_Name_52	                            : "Detaching %(ip) Public IP from %(name) in %(env)",
    LT_Task_Name_127                            : "Setting the amount of Public [FORMAT_IP_TYPE]%(type)[/FORMAT_IP_TYPE] addresses to %(count) for %(name) node with ID %(nodeid) in %(env)",

    LT_Info_ExtIPCountUpdated                   : "Public [FORMAT_IP_TYPE]%(type)[/FORMAT_IP_TYPE] amount for <b>%(node)</b> node has been successfully updated.",
    LT_Info_ExtIPDetached                       : "Public IP %(ip) has been successfully detached from <b>%(node)</b> node.",
    LT_Info_ExtIPsDetached                      : "Public [FORMAT_IP_TYPE]%(type)[/FORMAT_IP_TYPE] has been successfully detached from <b>%(node)</b> node.",

    LT_Action_DetachIP                          : "detach IP %(ip) from %(node) node",
    LT_Action_DetachIPs                         : "detach IPs from %(node) node",
    LT_Action_SetExtIPCount                     : "update the amount of Public [FORMAT_IP_TYPE]%(type)[/FORMAT_IP_TYPE] for %(node) node",

    LT_AddonWarning_ConvertAcc                  : "Public IP addresses are available for billing users only. Please upgrade your account to use Public IP.",
    LT_AddonWarning_ContactSupport              : "You are not allowed to use Public IP address(es) due to your account restrictions. Please contact our support team to remove this limitation.",
    LT_AddonWarning_externalip                  : "Public IP will be added to your environment automatically.",

    LT_E_Platform_ENV_EXT_IP_REQUIRED           : "Public IP is required for the <b>%(node)</b> node.",

    LT_Common_Text_ExtIPNotAllowed              : "Public [FORMAT_IP_TYPE]%(type)[/FORMAT_IP_TYPE] addresses usage is  not allowed for your account.",
    LT_E_Platform_ENV_EXT_IPV4_NOT_ALLOWED      : "[TPL]LT_Common_Text_ExtIPNotAllowed, {type: 'EXT_IP_TYPE_V4'}[/TPL]",
    LT_E_Platform_ENV_EXT_IPV6_NOT_ALLOWED      : "[TPL]LT_Common_Text_ExtIPNotAllowed, {type: 'EXT_IP_TYPE_V6'}[/TPL]",

    LT_Common_Text_MaxExtIPPerEnv               : "The maximum amount of Public [FORMAT_IP_TYPE]%(type)[/FORMAT_IP_TYPE] addresses per environment is <b>%(maxcount)</b>. [TEXT_INCREASE_LIMITS/].",
    LT_E_Platform_ENV_EXT_IPV4_MAXCOUNT         : "[TPL]LT_Common_Text_MaxExtIPPerEnv, {type: 'EXT_IP_TYPE_V4', maxcount: 'QUOTA_ENV_EXT_IPV4_MAXCOUNT'}[/TPL]",
    LT_E_Platform_ENV_EXT_IPV6_MAXCOUNT         : "[TPL]LT_Common_Text_MaxExtIPPerEnv, {type: 'EXT_IP_TYPE_V6', maxcount: 'QUOTA_ENV_EXT_IPV6_MAXCOUNT'}[/TPL]",

    LT_Common_Text_MaxExtIPPerNode              : "The maximum amount of Public [FORMAT_IP_TYPE]%(type)[/FORMAT_IP_TYPE] addresses per server is <b>%(maxcount)</b>. [TEXT_INCREASE_LIMITS/].",
    LT_E_Platform_ENV_NODE_EXT_IPV4_MAXCOUNT    : "[TPL]LT_Common_Text_MaxExtIPPerNode, {type: 'EXT_IP_TYPE_V4', maxcount: 'QUOTA_ENV_NODE_EXT_IPV4_MAXCOUNT'}[/TPL]",
    LT_E_Platform_ENV_NODE_EXT_IPV6_MAXCOUNT    : "[TPL]LT_Common_Text_MaxExtIPPerNode, {type: 'EXT_IP_TYPE_V6', maxcount: 'QUOTA_ENV_NODE_EXT_IPV6_MAXCOUNT'}[/TPL]",

    LT_EnvMigration_Error_Title                 : "Environment %(envName) migration",

    TEXT_ENV_NODE_IP_CONTACT_SUPPORT            : "New IP addresses will be available soon. Please try again later or [ACTION_HOSTER_SUPPORT]contact support[/ACTION_HOSTER_SUPPORT].",
    TEXT_ENV_MIGRATION_CONTACT_SUPPORT          : "Please select another region or [ACTION_HOSTER_SUPPORT]contact support[/ACTION_HOSTER_SUPPORT].",

    LT_Common_Text_NoFreeIntIP                  : "There are no free IP addresses in the <b>%(region)</b> region at the moment.",
    LT_E_Platform_ENV_NO_FREE_INTERNAL_IP       : "%(LT_Common_Text_NoFreeIntIP) [TEXT_ENV_NODE_IP_CONTACT_SUPPORT/]",
    LT_E_EnvMigration_ENV_NO_FREE_INTERNAL_IP   : "%(LT_Common_Text_NoFreeIntIP) [TEXT_ENV_MIGRATION_CONTACT_SUPPORT/]",

    LT_Common_Text_NoFreeExtIP                  : "There are no free Public [FORMAT_IP_TYPE]%(type)[/FORMAT_IP_TYPE] in the <b>%(region)</b> region at the moment.",
    LT_E_Platform_ENV_NO_FREE_EXT_IPV4          : "[TPL]LT_Common_Text_NoFreeExtIP, {type: 'EXT_IP_TYPE_V4'}[/TPL] [TEXT_ENV_NODE_IP_CONTACT_SUPPORT/]",
    LT_E_Platform_ENV_NO_FREE_EXT_IPV6          : "[TPL]LT_Common_Text_NoFreeExtIP, {type: 'EXT_IP_TYPE_V6'}[/TPL] [TEXT_ENV_NODE_IP_CONTACT_SUPPORT/]",
    LT_E_EnvMigration_ENV_NO_FREE_EXT_IPV4      : "[TPL]LT_Common_Text_NoFreeExtIP, {type: 'EXT_IP_TYPE_V4'}[/TPL] [TEXT_ENV_MIGRATION_CONTACT_SUPPORT/]",
    LT_E_EnvMigration_ENV_NO_FREE_EXT_IPV6      : "[TPL]LT_Common_Text_NoFreeExtIP, {type: 'EXT_IP_TYPE_V6'}[/TPL] [TEXT_ENV_MIGRATION_CONTACT_SUPPORT/]",

    LT_E_Platform_ENV_EXT_IP_PRIMARY_DETACH_RESTRICTED : "Primary IP should be detached last",

    LT_EnvProgress_Clone_Title_Failed			: "Cloning of the <b>%(name)</b> environment has failed.",

    LT_DockerSettings_EnvVars_HelpTip           : "Read [URL_DOCS_DOCKER_ENV_VARS]documentation[/URL_DOCS_DOCKER_ENV_VARS] to find out more details on Docker container environment variables.",
    LT_DockerSettings_Links_HelpTip             : "Read [URL_DOCS_DOCKER_LINKS]documentation[/URL_DOCS_DOCKER_LINKS] to find out more details on Docker containers' linking.",
    LT_DockerSettings_Vols_HelpTip              : "Read [URL_DOCS_DOCKER_VOLUMES]documentation[/URL_DOCS_DOCKER_VOLUMES] to find out more details on Docker container volumes.",
    LT_DockerSettings_RunArgs_HelpTip           : "Read [URL_DOCS_DOCKER_RUN_ARGS]documentation[/URL_DOCS_DOCKER_RUN_ARGS] to find out more details on Docker container run options.",

    LT_TutorSlider_Text_PrAdvantages            : "Enjoy Pricing Advantages",

    LT_TutorSlider_Title_Benefits    	   	    : "The Benefits of %(PLATFORM_VENDOR_NAME) PaaS",
    LT_TutorSlider_Title_SaveMoney    	   	    : "Tune Your Resource Consumption",
    LT_TutorSlider_Title_Build    	   	        : "Build Your Application Topology",

    LT_TutorSlider_Build_Left_Container 	   	: "Container",
    LT_TutorSlider_Build_Left_Layer 	   	    : "Layer",
    LT_TutorSlider_Build_Left_Environment 	   	: "Environment",
    LT_TutorSlider_Build_Left_Application 	   	: "Application",

    LT_TutorSlider_Build_Right_Balancer 	   	: "Balancer (BL)",
    LT_TutorSlider_Build_Right_Compute 	   	    : "Compute (CP)",
    LT_TutorSlider_Build_Right_Database 	   	: "Database (DB)",
    LT_TutorSlider_Build_Right_Storage 	   	    : "Storage (ST)",

    LT_E_Platform_ENV_EXT_DOMAIN_NOT_ALLOWED    : "%(LT_ExtDomains_Error_Quota)",

    LT_Menu_Billing_Btn_Billing                 : "Billing",

    LT_EnvWizard_PricingDetails_RestRes         : "[link-storage]Disk Space[/link-storage] and [link-traffic]Traffic[/link-traffic] are charged based on consumption.",

    LT_Task_Name_133                            : "Swapping Public IPv4 between %(name) node with ID %(nodeid) in %(env) and %(targetNodeid)",

    LT_Pricing_Text_MonthHours                  : "* Based on a %(count)-hour month.",

    LT_Warning_Install_Note                     : "<b>Note:</b> The environment will be created with less resources than intended due to your account limits, thus its proper operability cannot be guaranteed.",
    
    LT_ConfigManager_FileAlreadyExists          : "The path <b>%(path)</b> already exists in the %(env) environment. The directory structure will be updated.",

    LT_Config_Text_LoadingError_402             : "The binary file cannot be viewed. To see such file content, either download or open it via SSH.",

    LT_Process_Label_AttachingIPs               : "Attaching IPs...",
    LT_Process_Label_DetachingIPs               : "Detaching IPs...",
    LT_Process_Label_UpdatingIPs                : "Updating the amount...",

    LT_Task_Name_118_NodeGroup	                : "Restarting node(s) %(name) of %(env)",
    LT_Task_Name_118_NodeId	                    : "Restarting %(name) ID %(nodeid) node of %(env)",
    LT_Task_Name_119_NodeGroup	                : "Resetting password for %(name) of %(env)",
    LT_Task_Name_119_NodeId	                    : "Resetting password for %(name) ID %(nodeid) node of %(env)",
    LT_Task_Name_120_NodeGroup	                : "Resetting password for %(name) of %(env)",
    LT_Task_Name_120_NodeId	                    : "Resetting password for %(name) ID %(nodeid) node of %(env)",
    LT_Task_Name_121_NodeGroup	                : "Restarting node(s) %(name) of %(env)",
    LT_Task_Name_121_NodeId	                    : "Restarting %(name) ID %(nodeid) node of %(env)",
    LT_Task_Name_123_NodeGroup                  : "Adding variables for %(name) node(s) in %(env)",
    LT_Task_Name_123_NodeId                     : "Adding variables for %(name) ID %(nodeid) node in %(env)",
    LT_Task_Name_124_NodeGroup                  : "Removing variables from %(name) node(s) in %(env)",
    LT_Task_Name_124_NodeId                     : "Removing variables from %(name) ID %(nodeid) node in %(env)",

    LT_Task_Name_129                            : "Creating scheduled account task using the %(script) script",
    LT_Task_Name_130                            : "Creating scheduled task for %(env) environment using the %(script) script",
    LT_Task_Name_131                            : "Removing scheduled task(s)",
    LT_Task_Name_132                            : "Editing scheduled task(s)",

    LT_Process_Label_WaitingAnotherProcess      : "Waiting for another process to complete...",


    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // LT_EmptyItem field is used for internal system purposes. Please do not edit it and leave as is.
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    LT_EmptyItem                                : ""
};


/*!
 * Ext JS Library 3.3.1
 * Copyright(c) 2006-2010 Sencha Inc.
 * licensing@sencha.com
 * http://www.sencha.com/license
 */
/**
 * List compiled by mystix on the extjs.com forums.
 * Thank you Mystix!
 *
 * English Translations
 * updated to 2.2 by Condor (8 Aug 2008)
 */

Ext.UpdateManager.defaults.indicatorText = '<div class="loading-indicator">Loading...</div>';

if(Ext.data.Types){
    Ext.data.Types.stripRe = /[\$,%]/g;
}

if(Ext.DataView){
    Ext.DataView.prototype.emptyText = "";
}

if(Ext.grid.GridPanel){
    Ext.grid.GridPanel.prototype.ddText = "{0} selected row{1}";
}

if(Ext.LoadMask){
    Ext.LoadMask.prototype.msg = "Loading...";
}

Date.monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

Date.getShortMonthName = function (month) {
    var sMonthName = Date.monthNames[month];

    if (sMonthName) {
        return sMonthName.substring(0, 3);
    }
};

Date.monthNumbers = {
    Jan : 0,
    Feb : 1,
    Mar : 2,
    Apr : 3,
    May : 4,
    Jun : 5,
    Jul : 6,
    Aug : 7,
    Sep : 8,
    Oct : 9,
    Nov : 10,
    Dec : 11
};

Date.getMonthNumber = function(name) {
    return Date.monthNumbers[name.substring(0, 1).toUpperCase() + name.substring(1, 3).toLowerCase()];
};

Date.dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

Date.getShortDayName = function(day) {
    return Date.dayNames[day].substring(0, 3);
};

Date.parseCodes.S.s = "(?:st|nd|rd|th)";

if(Ext.MessageBox){
    Ext.MessageBox.buttonText = {
        ok     : "OK",
        cancel : "Cancel",
        yes    : "Yes",
        no     : "No"
    };
}

if(Ext.util.Format){
    Ext.util.Format.date = function(v, format){
        if(!v) return "";
        if(!(v instanceof Date)) v = new Date(Date.parse(v));
        return v.dateFormat(format || "m/d/Y");
    };
}

if(Ext.DatePicker){
    Ext.apply(Ext.DatePicker.prototype, {
        todayText         : "Today",
        minText           : "This date is before the minimum date",
        maxText           : "This date is after the maximum date",
        disabledDaysText  : "",
        disabledDatesText : "",
        monthNames        : Date.monthNames,
        dayNames          : Date.dayNames,
        nextText          : 'Next Month (Control+Right)',
        prevText          : 'Previous Month (Control+Left)',
        monthYearText     : 'Choose a month (Control+Up/Down to change years)',
        todayTip          : "{0} (Spacebar)",
        format            : "m/d/y",
        okText            : "&#160;OK&#160;",
        cancelText        : "Cancel",
        startDay          : 0
    });
}

if(Ext.PagingToolbar){
    Ext.apply(Ext.PagingToolbar.prototype, {
        beforePageText : "Page",
        afterPageText  : "of {0}",
        firstText      : "First Page",
        prevText       : "Previous Page",
        nextText       : "Next Page",
        lastText       : "Last Page",
        refreshText    : "Refresh",
        displayMsg     : "Displaying {0} - {1} of {2}",
        emptyMsg       : 'No data to display'
    });
}

if(Ext.form.BasicForm){
    Ext.form.BasicForm.prototype.waitTitle = "Please Wait..."
}

if(Ext.form.Field){
    Ext.form.Field.prototype.invalidText = "The value in this field is invalid";
}

if(Ext.form.TextField){
    Ext.apply(Ext.form.TextField.prototype, {
        minLengthText : "The minimum length for this field is {0}",
        maxLengthText : "The maximum length for this field is {0}",
        blankText     : "This field is required",
        regexText     : "",
        emptyText     : null
    });
}

if(Ext.form.NumberField){
    Ext.apply(Ext.form.NumberField.prototype, {
        decimalSeparator : ".",
        decimalPrecision : 2,
        minText : "The minimum value for this field is {0}",
        maxText : "The maximum value for this field is {0}",
        nanText : "{0} is not a valid number"
    });
}

if(Ext.form.DateField){
    Ext.apply(Ext.form.DateField.prototype, {
        disabledDaysText  : "Disabled",
        disabledDatesText : "Disabled",
        minText           : "The date in this field must be after {0}",
        maxText           : "The date in this field must be before {0}",
        invalidText       : "{0} is not a valid date - it must be in the format {1}",
        format            : "m/d/y",
        altFormats        : "m/d/Y|m-d-y|m-d-Y|m/d|m-d|md|mdy|mdY|d|Y-m-d",
        startDay          : 0
    });
}

if(Ext.form.ComboBox){
    Ext.apply(Ext.form.ComboBox.prototype, {
        loadingText       : "Loading...",
        valueNotFoundText : undefined
    });
}

if(Ext.form.VTypes){
    Ext.apply(Ext.form.VTypes, {
        emailText    : 'This field should be an e-mail address in the format "user@example.com"',
        urlText      : 'This field should be a URL in the format "http:/'+'/www.example.com"',
        alphaText    : 'This field should only contain letters and _',
        alphanumText : 'This field should only contain letters, numbers and _'
    });
}

if(Ext.form.HtmlEditor){
    Ext.apply(Ext.form.HtmlEditor.prototype, {
        createLinkText : 'Please enter the URL for the link:',
        buttonTips : {
            bold : {
                title: 'Bold (Ctrl+B)',
                text: 'Make the selected text bold.',
                cls: 'x-html-editor-tip'
            },
            italic : {
                title: 'Italic (Ctrl+I)',
                text: 'Make the selected text italic.',
                cls: 'x-html-editor-tip'
            },
            underline : {
                title: 'Underline (Ctrl+U)',
                text: 'Underline the selected text.',
                cls: 'x-html-editor-tip'
            },
            increasefontsize : {
                title: 'Grow Text',
                text: 'Increase the font size.',
                cls: 'x-html-editor-tip'
            },
            decreasefontsize : {
                title: 'Reduce Text',
                text: 'Decrease the font size.',
                cls: 'x-html-editor-tip'
            },
            backcolor : {
                title: 'Text Highlight Color',
                text: 'Change the background color of the selected text.',
                cls: 'x-html-editor-tip'
            },
            forecolor : {
                title: 'Font Color',
                text: 'Change the color of the selected text.',
                cls: 'x-html-editor-tip'
            },
            justifyleft : {
                title: 'Align Text Left',
                text: 'Align text to the left.',
                cls: 'x-html-editor-tip'
            },
            justifycenter : {
                title: 'Center Text',
                text: 'Center text in the editor.',
                cls: 'x-html-editor-tip'
            },
            justifyright : {
                title: 'Align Text Right',
                text: 'Align text to the right.',
                cls: 'x-html-editor-tip'
            },
            insertunorderedlist : {
                title: 'Bullet List',
                text: 'Create a bulleted list.',
                cls: 'x-html-editor-tip'
            },
            insertorderedlist : {
                title: 'Numbered List',
                text: 'Create a numbered list.',
                cls: 'x-html-editor-tip'
            },
            createlink : {
                title: 'Hyperlink',
                text: 'Make the selected text a hyperlink.',
                cls: 'x-html-editor-tip'
            },
            sourceedit : {
                title: 'Source Edit',
                text: 'Switch to source editing mode.',
                cls: 'x-html-editor-tip'
            }
        }
    });
}

if(Ext.grid.GridView){
    Ext.apply(Ext.grid.GridView.prototype, {
        sortAscText  : "Sort Ascending",
        sortDescText : "Sort Descending",
        columnsText  : "Columns"
    });
}

if(Ext.grid.GroupingView){
    Ext.apply(Ext.grid.GroupingView.prototype, {
        emptyGroupText : '(None)',
        groupByText    : 'Group By This Field',
        showGroupsText : 'Show in Groups'
    });
}

if(Ext.grid.PropertyColumnModel){
    Ext.apply(Ext.grid.PropertyColumnModel.prototype, {
        nameText   : "Name",
        valueText  : "Value",
        dateFormat : "m/j/Y",
        trueText: "true",
        falseText: "false"
    });
}

if(Ext.grid.BooleanColumn){
    Ext.apply(Ext.grid.BooleanColumn.prototype, {
        trueText  : "true",
        falseText : "false",
        undefinedText: '&#160;'
    });
}

if(Ext.grid.NumberColumn){
    Ext.apply(Ext.grid.NumberColumn.prototype, {
        format : '0,000.00'
    });
}

if(Ext.grid.DateColumn){
    Ext.apply(Ext.grid.DateColumn.prototype, {
        format : 'm/d/Y'
    });
}

if(Ext.layout.BorderLayout && Ext.layout.BorderLayout.SplitRegion){
    Ext.apply(Ext.layout.BorderLayout.SplitRegion.prototype, {
        splitTip            : "Drag to resize.",
        collapsibleSplitTip : "Drag to resize. Double click to hide."
    });
}

if(Ext.form.TimeField){
    Ext.apply(Ext.form.TimeField.prototype, {
        minText : "The time in this field must be equal to or after {0}",
        maxText : "The time in this field must be equal to or before {0}",
        invalidText : "{0} is not a valid time",
        format : "g:i A",
        altFormats : "g:ia|g:iA|g:i a|g:i A|h:i|g:i|H:i|ga|ha|gA|h a|g a|g A|gi|hi|gia|hia|g|H"
    });
}

if(Ext.form.CheckboxGroup){
    Ext.apply(Ext.form.CheckboxGroup.prototype, {
        blankText : "You must select at least one item in this group"
    });
}

if(Ext.form.RadioGroup){
    Ext.apply(Ext.form.RadioGroup.prototype, {
        blankText : "You must select one item in this group"
    });
}
