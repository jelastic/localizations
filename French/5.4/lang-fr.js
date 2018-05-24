////////////////////////////////////////////////////////////////////////////////////////////////
// This file contains string resources of the Jelastic dashboard, English version.            //
// Newly added strings for every new release are marked with the comment "Release: N.N.N".    //
// Please do not edit the keywords of the strings and also be attentive to the html encoding. //
////////////////////////////////////////////////////////////////////////////////////////////////

var GLocal = {

    //
    // Common.
    //

    LT_Common_Button_Apply                        : "Appliquer",
    LT_Common_Button_Add                        : "Ajouter",
    LT_Common_Button_Delete                        : "Effacer",
    LT_Common_Button_Remove                        : "Supprimer",
    LT_Common_Button_Edit                        : "Éditer",
    LT_Common_Button_Create                     : "Créer",
    LT_Common_Button_Rename                     : "Renommer",
    LT_Common_Button_Save                        : "Sauvegarder",
    LT_Common_Button_Cancel                        : "Annuler",
    LT_Common_Button_Yes                        : "Oui",
    LT_Common_Button_No                         : "Non",
    LT_Common_Button_Settings                    : "Paramètres",
    LT_Common_Text_Notify                        : "Notifier",
    LT_Common_Text_Confirm                        : "Confirmer",
    LT_Common_Text_Refresh                        : "Actualiser",
    LT_Common_Text_Error                        : "Erreur",
    LT_Common_Text_UnknownError                    : "Erreur inconnue",
    LT_Common_Text_Yes                            : "Oui",
    LT_Common_Text_No                            : "Non",
    LT_Common_Text_Enable                        : "Activer",
    LT_Common_Text_Disable                        : "Désactiver",
    LT_Common_Text_NextStep                        : "Précédent",
    LT_Common_Text_PrevStep                        : "Suivant",
    LT_Common_Text_Month_Jan                    : "Jan",
    LT_Common_Text_Month_Feb                    : "Fév",
    LT_Common_Text_Month_Mar                    : "Mars",
    LT_Common_Text_Month_Apr                    : "Avr",
    LT_Common_Text_Month_May                    : "Mai",
    LT_Common_Text_Month_Jun                    : "Juin",
    LT_Common_Text_Month_Jul                    : "Juill",
    LT_Common_Text_Month_Aug                    : "Aoû",
    LT_Common_Text_Month_Sep                    : "Sept",
    LT_Common_Text_Month_Oct                    : "Oct",
    LT_Common_Text_Month_Nov                    : "Nov",
    LT_Common_Text_Month_Dec                    : "Déc",
    LT_Common_Text_All                            :"tous",
    LT_Common_Text_Node                            :"instance",
    LT_Common_Text_Message                        : "Message",

    LT_Common_Text_RequiredField                : "Champ obligatoire",
    LT_Common_Text_EmailField                    : "Ce champ doit contenir une adresse e-mail",

    LT_Common_Text_Email : "E-mail",

    //
    // Jelastic Application
    //

    LT_Application_Title                        : "Application Jelastic",
    LT_Application_Text_ProjectsEmpty           : "__vide__",

    LT_Panel_Title_Environments                 : "Environnements",
    LT_Environments_Column_Name                 : "Nom",
    LT_Environments_Column_Status               : "Statut",
    //LT_Environments_Column_Deployed             : "Déployé",
    LT_Environments_Column_Cloudlets            : "Cloudlets",
    LT_Environments_Column_Usage                : "Utilisation",
    //LT_Environments_Text_NotDeployed            : "Non déployé",
    //LT_Environments_Text_Deployed               : "%(count) archives déployées",
    LT_Environments_Text_OneDeployed            : "1 archive déployée",
    LT_Environments_Status_Running              : "En cours d'exécution",
    LT_Environments_Status_Stopped              : "Interrompu",
    LT_Environments_Status_Unknown              : "inconnu",
    LT_Environments_Confirm_DeleteContext        : "Effacer le contexte %(sName)?",
//    LT_Environments_Confirm_ResetDBPassword        : "Réinitialiser le mot de passe pour %(sType)?",
//    LT_Environments_Confirm_RestartNode         : "Redémarrer%(sType)?",

    LT_Environments_Validation_BusyDomain       : "Le nom de domaine %(domain) est déjà utilisé. Veuillez en essayer un autre.",
    LT_Environments_Validation_CheckingDomain   : "Vérification du domaine, merci de patienter...",

    LT_Panel_Title_Tasks                        : "Tâches",
    LT_Tasks_Column_Name                        : "Nom",
    LT_Tasks_Column_Status                      : "Statut",

    //
    // Hive IDE.
    //

    LT_Tab_Title_Start                            : "Démarrer",
    LT_Panel_Title_Messages                        : "Messages",
    LT_Tab_Title_Services                        : "Réponses",
    LT_Services_Column_Method                    : "Méthode",
    LT_Services_Column_Address                    : "Adresse méthode",
    LT_Services_Column_Time                        : "Réponse [ms]",
    LT_Services_Column_CpuTime                    : "CPU [ms]",
    LT_Services_Column_Result                    : "Code réponse",
    LT_Services_Column_Error                    : "Description",
    LT_Services_Column_In                        : "IN",
    LT_Services_Column_Out                        : "OUT",

    LT_Menu_Toolbar_Help                        : "Aide",
    LT_Menu_Toolbar_Support                        : "Assistance",
    LT_Menu_Toolbar_Docs                        : "Docs",
    LT_Menu_Toolbar_Video                        : "Vidéo",
    LT_Menu_Toolbar_Features                    : "Voter pour les fonctionnalités",

    LT_Menu_Toolbar_Signout                        : "Déconnexion",

    // Menu panel.
    LT_Menu_Settings                            : "Paramètres",

    LT_Menu_DeleteEnvironment                   : "Effacer environnement",
    LT_Menu_CloneEnvironment                       : "Dupliquer environnement",
    LT_Menu_EditEnvironment                       : "Changer la topologie de l'environnement",
    LT_Menu_RunApplication                      : "Ouvrir dans le navigateur",
    LT_Menu_Start                               : "Démarrer",
    LT_Menu_Stop                                : "Stop",
    LT_Menu_Statistics                          : "Statistiques",
    LT_Menu_Config                              : "Réglages",
    LT_Menu_Log                                 : "Journal",
    LT_Menu_Info                                : "Infos",
    LT_Menu_ToRootNode                          : "Ouvrir dans le navigateur",
    LT_Menu_RestartNode                         : "Redémarrer nœud",
    LT_Menu_Additionally                        : "Autres",
    LT_Menu_ResetPassword                        : "Réinitialiser mot de passe",
    LT_Menu_Solutions                           : "Solutions",

    //Settings tab
    LT_Settings_Title                             : "%(sAppName) : paramètres",
    LT_Settings_Label_Domains                      : "Domaines personnalisés",
    LT_Settings_Label_Accounts                      : "Gérer le compte",
    LT_Settings_Title_DomainBinding                  : "Affectation domaine",
    LT_Settings_Title_SwapDomains                  : "Échanger domaines",
    LT_Settings_Label_SwapDomains                  : "Choisissez l'environnement pour lequel vous souhaitez échanger vos domaines et cliquez sur le bouton Échanger",
    LT_Settings_Label_Bind                          : "Affecter",
    LT_Settings_Label_Swap                          : "Échanger",
    LT_Settings_Confirm_SwapDomains             : "Échanger les domaines entre les environnements %(envName) et%(targetName)?",

    LT_Settings_Text_UserExist                    : "L'utilisateur %(sUser) existe déjà. Merci de modifier les permissions existantes plutôt que d'ajouter un utilisateur.",
    LT_Settings_Validator_Domain                : "Ce champ devrait être un nom de domaine<br/> au format: \"www.exemple.com\"",

    //Deploy tab
    LT_Deploy_Title                             : "Gestionnaire de déploiement", // [%(sProjName)]",
    LT_Deploy_Label_DeployTo                    : "Déployer vers...",
    LT_Deploy_Label_DeployConfirm                : "Déployer l'archive%(sArchive) vers l'environnement %(sAppName)",
    LT_Deploy_Column_Name                       : "Nom",
    LT_Deploy_Column_Comment                    : "Description",
    LT_Deploy_Column_UploadDate                 : "Date de chargement",
    LT_Deploy_Column_Size                       : "Taille",
    LT_Deploy_Label_Error                       : "Erreur de chargement, veuillez réessayer.",
    LT_Deploy_Text_ChooseArchive                : "Choisir une archive dans le gestionnaire de déploiement.",
    LT_Deploy_Text_NotDeployed                  : "Non déployé",

    //Statistics tab
    LT_Statistics_Title                         : "%(sAppName) : %(sType) : statistiques",
    LT_Statistics_Button_AutoRefresh            : "Auto actualiser",
    LT_Statistics_Label_Time                    : "Temps",
    LT_Statistics_Text_Interval                 : "Intervalle",
    LT_Statistics_Text_Duration                 : "Durée",
    LT_Statistics_Text_IntervalMin              : "min",
    LT_Statistics_Text_IntervalHour             : "heure",
    LT_Statistics_Text_IntervalHours            : "heures",
    LT_Statistics_Text_IntervalDay              : "jour",
    LT_Statistics_Text_IntervalWeek             : "semaine",

    //Config tab
    LT_Config_Title                             : "%(sAppName) : %(sType) : Paramètres",
    LT_Config_Button_New                        : "Nouveau",
    LT_Config_Text_LoadingError                 : "Erreur de chargement",

    //Log tabs
    LT_Log_Title                                : "%(sAppName) : %(sType) : registre",
    LT_Log_Error                                : "Échec de la demande d'enregistrement: %(sError)",
    LT_ActionsLog_Title                         : "%(sAppName) : %(sType) : actions",
    LT_ActionsLog_Text_NodeId                   : "Identifiant nœud: %(sNode)",


    // Dialogs.
    LT_Signup_Label_Email                         : "E-mail",
    LT_Signup_Label_Password                    : "Mot de passe",
    LT_Signup_Label_Name                        : "Nom",
    LT_Signup_Label_Info                        : "Nous vous enverrons le lien d'activation après la création du compte. Pensez à vérifier votre dossier spams.",
    LT_Signup_Button_CreateAccount                : "Créer un compte",
    LT_Signup_Title_Dialog                        : "Nouveau compte",
    LT_Signin_Label_Email                         : "E-mail",
    LT_Signin_Label_Password                    : "Mot de passe",
    LT_Signin_Label_Info                        : "Prise en charge sans inscription des comptes Google [@gmail.com], Yahoo et Yandex.",
    LT_Signin_Label_RememberMe : "Se souvenir de moi",
    LT_Signin_Button_Enter                        : "Connexion",
    LT_Signin_Title_Dialog                        : "Accès développeur",
    LT_Signin_Label_ForgotPassword                 : "Mot de passe oublié ?",
    LT_Signin_Label_Support                     : "Assistance",
    LT_Signin_Label_Signup                         : "Inscription",
    LT_ChangePassword_Label_OldPassword            : "Mot de passe actuel",
    LT_ChangePassword_Label_NewPassword            : "Nouveau mot de passe",
    LT_ChangePassword_Label_ConfirmPassword        : "Confirmer mot de passe",
    LT_ChangePassword_Validation_Passwords        : "Les mots de passe ne sont pas identiques",
    LT_ChangePassword_Button_Change                : "Changer le mot de passe",
    LT_ChangePassword_Title_Dialog                : "Changer le mot de passe",
    LT_Upload_Title_Dialog                        : "Chargement",
    LT_Upload_Label_Local_File                    : "Fichier local",
    LT_Upload_Button_Browse                        : "Parcourir...",
    LT_Upload_Button_Upload                        : "Chargement",
    LT_Upload_Text_Invalid_Format                : "Veuillez ne charger que des fichiers ayant les extensions: %(sFormats)",
    LT_UploadArchive_Title_Dialog                : "Charger archive",
    LT_UploadArchive_Label_Empty_Text            : "Sélectionner une archive",
    LT_UploadFile_Title_Dialog : "Charger fichier",
    LT_UploadFile_Label_Empty_Text                : "Sélectionner un fichier",
    LT_DeployArchive_Title_Dialog                : "Déployer vers %(sAppName)",
    LT_DeployArchive_Button_Deploy                : "Déployer",
    LT_DeployArchive_Label_Context                : "Contexte",

    LT_EnvironmentSettings_Title_Dialog         : "Topologie de l'environnement",
    LT_EnvironmentSettings_Label_WhatIsThis     : "Qu'est ce que c'est ?",
    LT_EnvironmentSettings_Label_Name           : "Environnement",
    LT_EnvironmentSettings_Label_ComputeStack   : "Calculer pile",
    LT_EnvironmentSettings_Label_CloudletCount : "Cloudlets par instance",
    LT_EnvironmentSettings_Label_DatabaseSQL    : "Base de données SQL",
    LT_EnvironmentSettings_Label_DatabaseNoSQL  : "Base de données NoSQL",
    LT_EnvironmentSettings_Text_NotValidName    : "Nom d'environnement invalide",
    LT_DeleteEnvironment_Title_Dialog           : "Effacer environnement",
    LT_DeleteEnvironment_Label_Password            : "Mot de passe",

    LT_EnvironmentWizard_Label_HTTPRequests        : "Requêtes HTTP",
    LT_EnvironmentWizard_Label_Statics            : "Statiques",
    LT_EnvironmentWizard_Label_Balancer            : "Équilibreur",
    LT_EnvironmentWizard_Label_SQL                : "SQL",
    LT_EnvironmentWizard_Label_NoSQL            : "NoSQL",
    LT_EnvironmentWizard_Label_SQLTerms            : "1Go et 128 Mo de RAM gratuits",
    LT_EnvironmentWizard_Label_NoSQLTerms        : "1Go et 128 Mo de RAM gratuits",
    LT_EnvironmentWizard_Label_Cloudlets           : "Cloudlet(s)",
    LT_EnvironmentWizard_Label_Count            : "limite compte",
    LT_EnvironmentWizard_Label_PerInstance        : "par serveur d'application",
    LT_EnvironmentWizard_Label_Memory            : "mémoire",
    LT_EnvironmentWizard_Label_Mb                : "Mo",
    LT_EnvironmentWizard_Label_CPU                : "cpu",
    LT_EnvironmentWizard_Label_MHz                : "MHz",
    LT_EnvironmentWizard_Label_SSL              : "SSL",
    LT_EnvironmentWizard_Label_ApproxCost        : "(coût mensuel approximatif.)",
    LT_EnvironmentWizard_Label_BetaTitle        : "Restrictions de la phase de test",
    LT_EnvironmentWizard_Label_BetaRestrictions    : "4 instances informatiques par environnement <br/> 16 cloudlets par instance informatique<br/>"+
        "1 Go de disque dur par instance informatique<br/>3 environnements par compte<br/>",
    LT_EnvironmentWizard_Label_Name                : "Nom",

    LT_EnvironmentWizard_Hint_Instance            :     "<p class=\"dfn\">Besoin de plus d'instances?</p>"+
        "<p>Pendant la phase de test bêta, nous limitons à 2 le nombre d'instances informatiques. Chaque nœud est automatiquement redimensionné verticalement &mdash; si la charge augmente, plus de CPU et de RAM sont automatiquement ajoutés. Deux nœuds de redimensionnement devraient apporter assez de scalabilité et une disponibilité optimale pour la plupart des applications.</p>"+
        "<div class=\"horiz-scaling\">&nbsp;</div>"+
        "<p>Nous prévoyons d'ajouter la possibilité d'exécuter plusieurs instances et de fournir plus d'options de scalabilité horizontale dans une future mise à jour.</p>"+
        "<p>Si vous avez besoin de cette fonctionnalité en urgence, &mdash; veuillez <a href=\"http://support.jelastic.com\">nous contacter</a>. Nous aimerions en savoir plus sur votre application et essayer de vous aider.</p>",

    LT_EnvironmentWizard_Hint_Databaces            :   "<div class=\"dfn\">MariaDB &mdash; une offre spéciale de MariaDB et Jelastic</div>"+
        "<p class=\"indent\">MariaDB est un système de gestion de base de données qui remplace MySQL. Aucun changement ou conversion de données n'est nécessaire pour les applications MySQL existantes, elles s'exécuteront de la même manière sur MariaDB.</p>"+
        "<a href=\"http://mariadb.org/\" target=\"_blank\" class=\"logo\">%(logoImg)</a>"+
        "<p class=\"indent\">MariaDB a été développé par l'équipe d'architectes à l'origine de MySQL et est dirigé par <a target=\"_blank\" href=\"http://en.wikipedia.org/wiki/Michael_Widenius\">Michael \"Monty\" Widenius</a>, le fondateur de MySQL, MySQL Ab et de Monty Program Ab.</p>"+
        "<p class=\"indent\">Jelastic, avec le soutien des développeurs de MariaDB, prendra en charge vos bases de données MariaDB MySQL. En travaillant avec Jelastic, vous pouvez être assurés de recevoir continuellement l'assistance et les mises à jour de MariaDB.</p>",


    LT_RecoverPassword_Title_Dialog                : "Récupérer mot de passe",
    LT_RecoverPassword_Button_Recover           : "Récupération",
    LT_RecoverPassword_Label_Info               : "En cas d'oubli de votre mot de passe, nous pouvons vous en envoyer un nouveau sur l'adresse e-mail liée à votre compte.",

    LT_ChangeCloudletsCount_Title_Dialog        : "Changer la limite de cloudlets",
    LT_ChangeCloudletsCount_Label_PerInst          : "Par instance",
    LT_ChangeCloudletsCount_Label_Used            : "Utilisés",
    LT_ChangeCloudletsCount_Label_Limit            : "Limite",
    LT_ChangeCloudletsCount_Label_TotalEnv        : "Environnement total",
    LT_ChangeCloudletsCount_Label_Instance        : "instance",

    LT_Signout_Confirm_EnvironmenCreating        : "L'environnement est en cours de création. Êtes-vous sûr de vouloir vous déconnecter ?",

    // Process messages.

    LT_Process_Label_Clone                        : "Duplication de l'application...",
    //LT_Process_Label_Creating                    : "Création de %(sName)...",
    LT_Process_Label_Saving                        : "Sauvegarde...",
    LT_Process_Label_Removing                    : "Suppression de %(sName)...",
    LT_Process_Label_Waiting                    : "Attente...",
    LT_Process_Label_Deploying                     : "%(sName) en cours de déploiement...",
    LT_Process_Label_CheckSign                    : "Connexion au service d'authentification, merci de patienter...",

    LT_Process_Label_GetApps                    : "Chargement de vos données, merci de patienter...",
    LT_Process_Label_GenerateApp                : "Préparation de l'environnement de votre application, merci de patienter...",
    LT_Process_Label_DeleteApp                    : "Suppression de votre application, merci de patienter...",
    LT_Process_Label_RebuildApp                    : "Reconstruction de votre application, merci de patienter...",
    LT_Process_Label_RemoveField                : "Suppression du champ %(sName)...",
    LT_Process_Label_DefineType                    : "Création du type %(sName)...",
    LT_Process_Label_UndefineType                : "Suppression du type %(sName)...",
    LT_Process_Label_GetSolution                : "Chargement de la solution %(sAppid) ...",

    LT_Process_Label_Starting                   : "Démarrage...",
    LT_Process_Label_Restarting                 : "Redémarrage...",
    //LT_Process_Label_Stopping                   : "Arrêt...",
    LT_Process_Label_UploadingStatus            : "%(sUploaded) KB sur un total de%(sTotal) KB",
    LT_Process_Label_Loading                    : "Chargement...",
    LT_Process_Label_Deleting                   : "Effacement...",
    LT_Process_Label_Creating                   : "Création...",
    LT_Process_Label_Renaming                    : "Renommage...",
    LT_Process_Label_DeployingText              : "Déploiement...",
    LT_Process_Label_ResettingPass              : "Réinitialisation du mot de passe...",
    LT_Process_Label_Cloning                    : "Duplication",

    // Notify messages.
    LT_Notify_Title_Info                        : "Informations",
    LT_Notify_Label_NeedAppName                    : "Indiquez d'abord le nom de l'application.",
    LT_Notify_Label_NeedPassword                  : "Par mesure de sécurité, nous vous demandons d'entrer le mot de passe de votre compte Jelastic avant de continuer.",
    LT_Notify_Label_AutoSaved                    : "Sauvegarde auto à %(sTime)",
    LT_Notify_Label_CreateAccount                : "L'inscription a été effectuée avec succès. Veuillez vérifier vos e-mails pour le lien d'activation."
        + "<hr />Vérifiez les e-mails de l'adresse <a href='%(sEmailUrl)'>%(sEmailUrl)</a>",
    LT_Notify_Label_RecoverPassword             : "Un nouveau mot de passe a été envoyé sur l'adresse e-mail indiquée.",
    LT_Notify_Label_ChooseEnvironment           : "Choisissez l'environnement dans le panneau des environnements.",
    LT_Notify_Label_SelectFolder                : "Sélectionnez un dossier.",
    LT_Notify_Label_SelectItem                  : "Veuillez sélectionner un élément.",
    LT_Notify_Label_ContextExists               : "Le contexte %(sContext) est en cours d'utilisation.",
    LT_Notify_Label_FolderExists                : "Un dossier portant ce nom existe déjà.",
    LT_Notify_Label_FileExists                  : "Un fichier portant ce nom existe déjà.",
    LT_Notify_Label_WaitDeploying               : "Veuillez attendre la fin de la tâche de déploiement actuelle.",
    LT_Notify_Label_WaitContext                    : "Veuillez attendre la fin du déverrouillage du contexte actuel.",
    LT_Notify_Label_EnvironmenStopped           : "L'environnement %(envname) est arrêté. Lancez-le et réessayez",
    LT_Notify_Label_EnvironmenUnavailable       : "L'environnement %(envname) est indisponible. Veuillez réessayer ultérieurement",
    LT_Notify_Label_EnvironmenCreated            : "Environnement créé avec succès. Des informations détaillées vous ont été envoyées par e-mail.",
    LT_Notify_Label_EnvironmenLaunching            : "Création de l'environnement. Cela peut prendre plusieurs minutes.",
    LT_Notify_Label_EnvironmenCloning            : "Duplication de l'environnement '%(envName)'. Cela peut prendre plusieurs minutes.",
    LT_Notify_Label_EnvironmenCloned            : "L'environnement '%(envName)' a été dupliqué avec succès. Des informations détaillées vous ont été envoyées par e-mail.",
    LT_Notify_Label_ResetDBPasswordSuccess        : "Le mot de passe pour %(sType) a été réinitialisé avec succès."+
        "<hr />Le nouveau mot de passe a été envoyé à l'adresse e-mail liée à votre compte",
    LT_Notify_Label_ResetDBPasswordFailed       : "Échec de la réinitialisation du mot de passe pour %(sType) " +
        "<hr />Veuillez réessayer ou contactez<a target='_blank' style='text-decoration:underline' href='http://support.jelastic.com'>l'assistance</a>",
    LT_Notify_Label_DeleteEnvironment            : "Après la suppression de l'environnement %(envname) , toutes les données seront définitivement perdues!",
    LT_Notify_Label_DomainBound                    : "Nous associons votre domaine. Cela peut prendre plusieurs minutes.",
    LT_Notify_Label_DomainsSwap                    : "On échange les domaines %(envName) and %(targetName). Cela peut prendre plusieurs minutes.",

    LT_Notify_Label_DeprecatedBrowser            : "<div class='title'>Jelastic ne supporte pas officiellement votre navigateur actuel</div>"+
        "<div class='message'>Certaines fonctions pourraient ne pas fonctionner correctement dans votre navigateur. Nous recommandons l'utilisation d'un des navigateurs suivants avec Jelastic:</div>",

    // Tasks
    LT_Task_Status_Success                      : "Succès",
    LT_Task_Status_Failed                       : "Échec",
    LT_Task_Status_NullResponse                 : "Réponse vide",
    LT_Task_Status_UploadingSuccess             : "Succès [total %(sTotal) KB]",
    LT_Task_Status_ConfigurateNewProject        : "Configurer nouveau projet",
    LT_Task_GetProjects                         : "Atteindre projets",
    LT_Task_DeployArchiveTo                     : "Déployer l'archive%(sArchive) vers l'environnement %(sAppName)",
    LT_Task_UploadingFile                       : "Chargement de: %(file)",
    LT_Task_LoadArchives                        : "Charger archives pour le projet %(sProjectName)",
    LT_Task_DeployApplication                   : "Déployer l'application %(sAppName) vers %(sAppid)",
    LT_Task_CheckAuthentication                 : "Vérifier authentification",
    LT_Task_CreateEnvironment                   : "Créer environnement %(sAppName)",
    LT_Task_StartingEnvironment                 : "Démarrage de l'environnement %(sAppName)",
    LT_Task_StoppingEnvironment                 : "Arrêt de l'environnement %(sAppName)",
    LT_Task_RestartingEnvironment               : "Redémarrage de l'environnement %(sAppName)",
    LT_Task_DeleteApplication                   : "Supprimer l'application %(sAppName)",
    LT_Task_CloneApplication                       : "Dupliquer l'application %(sAppName)",
    LT_Task_CreateNewProject                    : "Créer nouveau projet %(sProjectName)",
    LT_Task_ChangingCloudletsCount : "Changer la limite de cloudlets pour %(sAppName) de %(prevCount) à %(newCount)",
    LT_Task_RenameContext                        : "Changement du nom du contexte %(oldContext) de %(sAppName) à %(newContext)",
    LT_Task_DeleteContext                        : "Suppression du contexte %(sContext) de %(sAppName)",
    LT_Task_RemoveLib                           : "Suppression de%(sArchive) de l'environnement %(sAppName)",
    LT_Task_ResetDBPassword                     : "Réinitialisation du mot de passe pour %(sType)",

    // Error messages.
    LT_Error_Label_AutoSaved                    : "Erreur de sauvegarde %(sTime)",
    LT_Error_Label_AccessDenied                    : "Cette action n'est pas disponible" +
        "<hr />Accès refusé.",

    //
    // Hivext Service error.
    //

    LT_E_Platform_501                             : "Format d'adresse e-mail invalide",
    LT_E_Platform_502                             : "L'adresse e-mail est déjà présente dans le système",
    LT_E_Platform_503                             : "L'adresse e-mail n'existe pas",
    LT_E_Platform_504                             : "Le mot de passe contient des caractères non pris en charge",
    LT_E_Platform_505                             : "La clé d'activation est invalide. Elle est invalide ou a déjà été utilisée.",
    LT_E_Platform_506                             : "L'adresse e-mail n'est pas enregistrée chez Jelastic. Veuillez entrer une adresse e-mail liée à un compte ou créer un nouveau compte Jelastic.",
    LT_E_Platform_601                             : "Le serveur e-mail est actuellement indisponible. Veuillez réessayer ultérieurement.",
    LT_E_Platform_701                             : "Erreur d'authentification",
    LT_E_Platform_702                             : "L'utilisateur n'est pas authentifié",
    LT_E_Platform_704                             : "Utilisateur bloqué",
    LT_E_Platform_707                            : "L'utilisateur spécifié n'existe pas. <br />Il s'agit peut-être d'une mauvaise saisie de l'identifiant ou du mot de passe ?",
    LT_E_Platform_801                            : "Mot de passe incorrect !",
    LT_E_Platform_904                            : "Vous avez atteint le nombre maximal d'applications pour un développeur.",
    LT_E_Platform_1001                             : "Type de données incompatible",
    LT_E_Platform_1002                             : "Un type de données avec le nom spécifié existe déjà",
    LT_E_Platform_1003                             : "Aucun type de données avec le nom spécifié",
    LT_E_Platform_1008                             : "Le champ spécifié est réservé",
    LT_E_Platform_1009                             : "Le champ spécifié n'existe pas",
    LT_E_Platform_1203                             : "Tentative d'écrire une fonction avec un type de données spécial",
    LT_E_Platform_1708                             : "Cette annotation n'est pas prise en charge. Veuillez vérifier le journal.",
    LT_E_Platform_2007                             : "Caractère interdit dans le nom du fichier.",

    LT_E_Platform_10001                            : "Accès limité aux beta testeurs et aux administrateurs",

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Review date : 07.08.2011
    // TODO : Sort all constants below after next review
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    LT_Menu_Packages                            : "Packages",
    LT_Log_Label_EmptyFile                      : "%(fileName) est vide",

    //Packages tab
    LT_Package_Title                            : "%(sAppName) : %(sType) : packages",
    LT_Package_Text_Loading                     : "Chargement...",
    LT_Package_Label_Install                    : "Installer",
    LT_Package_Label_Uninstall                  : "Désinstaller",
    LT_Package_Label_Sort                       : "Trier",

    LT_Upload_Label_UploadError                 : "Une erreur est survenue lors du chargement des fichiers",
    LT_Upload_Label_FilesCount                  : "Le nombre total de fichiers doit être inférieur à %(fileCount)",
    LT_Task_RestartingNode                      : "Restarting node %(sAppName) : %(sType)",
    LT_Environments_Status_Sleeping             : "En veille",

    // Notify messages.
    LT_Notify_Title_Warning                     : "Attention",
    LT_Notify_Title_Error                       : "Erreur",

    LT_EnvironmentSettings_E_NoRights           : "Vous n'êtes pas autorisé à modifier les paramètres de %(envname)",
    LT_EnvironmentSettings_E_NoUser             : "L'utilisateur %(sUser) n'existe pas.",

    LT_Error_Label_UserNoGroup                     : "Vous devez vous inscrire à la bêta Jelastic." +
        "<br><br>Vous serez redirigé sur la page d'accueil Jelastic après avoir cliqué sur OK. Veuillez y saisir votre adresse e-mail et cliquer sur Inscription." +
        "<br><br>Après la création d'un nouveau compte, vous recevrez un e-mail contenant les instructions d'activation pour la bêta.",

    LT_Task_Name_1                                : "Obtention des infos de %(env)",
    LT_Task_Name_3                                : "Suppression de l'environnement %(env)",
    LT_Task_Name_4                                : "Démarrage de l'environnement %(env)",
    LT_Task_Name_5                                : "Arrêt de l'environnement %(env)",
    LT_Task_Name_6                                : "Redémarrage de l'environnement %(env)",
    LT_Task_Name_7                                : "Redémarrage des nœuds %(name) de %(env)",
    LT_Task_Name_8                                : "Paramétrage du nombre de cloudlets pour %(env)",
    LT_Task_Name_9                                : "Déploiement du contexte %(context) vers %(env)",
    LT_Task_Name_10                                : "Suppression du contexte %(context) de %(env)",
    LT_Task_Name_11                                : "Changement du nom du contexte %(oldContext): %(newContext)",
    LT_Task_Name_12                                : "Ajout du nœud %(name) à %(env)",
    LT_Task_Name_13                                : "Ajout du nœud %(name) à %(env)",
    LT_Task_Name_14                                : "Ajout du nœud %(name) à %(env)",
    LT_Task_Name_15                                : "Obtention du journal pour %(env)",
    LT_Task_Name_16                                : "Lecture du journal pour %(env)",
    LT_Task_Name_17                                : "Liaison des nœuds dans %(env)",
    LT_Task_Name_18                                : "Remplacement des nœuds dans %(env)",
    LT_Task_Name_19                                : "Réinitialisation du mot de passe pour %(name) de %(env)",
    LT_Task_Name_20                                : "Duplication de %(srcenv) vers %(targetenv)",
    LT_Task_Name_21                                : "Installation du paquet dans %(env)",
    LT_Task_Name_22                                : "Désinstallation du paquet dans %(env)",
    LT_Task_Name_23                                : "Suppression du journal de %(env)",
    LT_Task_Name_24                                : "Suppression du nœud %(name) de %(env)",
    LT_Task_Name_25                                : "Ajout de %(count) nœud(s) de calcul à %(env)",
    LT_Task_Name_26                                : "Changement des paramètres de %(env)",
    LT_Task_Name_27                                : "Ajout du nœud %(name) à %(env)",
    LT_Task_Name_28                                : "Génération de %(project) dans %(env)",
    LT_Task_Name_29                                : "Génération de %(project) dans %(env)",
    LT_Task_Name_30                                : "Terminer",
    LT_Task_Name_31                                : "Annexation IP externe pour %(name) dans %(env)",
    LT_Task_Name_32                                : "Génération du cluster dans %(env)",
    LT_Task_Name_34                                : "Ajout du nœud %(name) à %(env)",
    LT_Task_Name_36                                : "Redémarrage des nœuds %(name) de %(env)",
    LT_Task_Name_38                                : "Ajout du nœud %(name) à %(env)",


    LT_Text_DatabaseInfo                        : "<p>Pour travailler avec la base de données, suivre ces étapes:<ol>"+
        "<li>Consultez vos e-mails pour obtenir votre <b>identifiant</b> et votre <b>mot de passe</b> pour l'utilisateur ROOT</li>"+
        "<li>Se connecter sur <a target=_blank href='%(url)'>" +
        "page admin:</a> utiliser<b>l'identifiant</b> et<b>le mot de passe</b>de l'utilisateur ROOT</li>" +
        "<li>Ici, vous pouvez créer votre base de données</li>"+
        "<li>Créez ensuite un nouvel utilisateur (définir<b>identifiant</b> et <b>mot de passe</b>)</li>"+
        "<li>Insérez cet <b>identifiant</b> et ce <b>mot de passe</b> dans le lien de connexion pour lier la base de données à l'application</li></ol><p>",

    LT_Text_NodeInfo_MoreInfo                   : "<p>Pour plus d'informations, se référer à notre <a target=_blank href='%(url)'> page de documentation</a></p>",

    LT_Common_Button_Clear                        : "Annuler",

    LT_Common_Button_FullScreen                    : "Plein écran",

    LT_Log_AlreadyEmpty                         :"%(file) est déjà vide !",

    LT_Common_Text_Common                        : "Commun",

    LT_Menu_AdminPanel                          : "Panneau de l'administrateur",

    LT_EnvironmentWizard_Label_ApplyingSettings : "Application des paramètres...",

    LT_SolutionWizard_Title                     : "JavaAppStore - Installation %(name)",

    LT_SolutionWizard_Error_SolutionNotExists   : "La solution n'existe pas !",


    LT_ActivateCoupon_Title_Dialog              : "Activation du bon de réduction",

    LT_ActivateCoupon_Label_PromoCode           : "Code promotionnel",

    LT_ActivateCoupon_Label_Info                : "Entrez votre code promotionnel et obtenez jusqu'à 4Go de RAM pour les serveurs de vos applications.",

    LT_ActivateCoupon_Button_Activate           : "Activer",

    LT_ActivateCoupon_Error_Activate            : "Code promo invalide !",

    LT_Proccess_Label_Activation                : "Activation...",

    LT_Notify_Label_CouponActivated             : "Activation réussie. . <br />  Vous pouvez maintenant obtenir jusqu'à 4 Go de RAM pour vos serveurs d'applications !",

    LT_BuildNode_Title_AddProject               : "Ajouter projet",
    LT_BuildNode_Title_EditProject              : "Editer projet",
    LT_BuildNode_Label_Build                    : "Monter",
    LT_BuildNode_Label_BuildDeploy              : "Monter et déployer",
    LT_BuildNode_Confirm_DeleteProject          : "Supprimer projet \"%(sName)\"?",
    LT_BuildNode_Confirm_BuildProject           : "Monter projet \"%(sName)\"?",
    LT_BuildNode_Confirm_BuildAndProject        : "Monter et déployer projet \"%(sName)\"?",
    LT_Proccess_Label_AddingProject             : "Ajout du projet...",
    LT_Proccess_Label_ChangeProject             : "Changement du projet...",
    LT_Process_Label_Building                   : "Monte...",
    LT_Process_Label_GettingProject             : "Obtenir projet...",

    LT_Common_Text_Name                         : "Nom",
    //LT_Common_Text_Path                         : "URL",
    LT_Common_Text_Login                        : "Connexion",
    LT_Common_Text_Password                     : "Mot de passe",
    LT_Common_Text_Environment                  : "Environnement",
    LT_Common_Text_Context                      : "Contexte",
    LT_Common_Text_Repository                    : "Référentiel",

    // LT_Signin_Label_Registration                : "<b>Nous venons de vous adresser par e-mail le mot de passe</b> de votre compte. Si vous n'avez pas reçu cet e-mail, veuillez vérifier l'adresse e-mail saisie et consultez vos dossiers spams / divers. Si vous ne pouvez toujours pas accéder à votre compte, contactez nous à <a class=\"email\" href=\"%(HOSTER_TRIAL_SUPPORT)\">%(text)</a>",

    LT_Process_Label_Signing                    : "Connexion...",
    LT_Process_Label_SigningOut                    : "Déconnexion...",

    LT_Common_Label_Balance                     : "Solde de l'utilisateur",
    LT_DeployArchive_InvalidContext             : "Nom de contexte invalide",

    LT_Billing_Title                            : "Historique de facturation",
    LT_Billing_Column_Env                       : "Environnement",
    LT_Billing_Column_Event                     : "Nom de l'événement",
    LT_Billing_Column_Cost                      : "Coût",
    LT_Billing_Column_Usage                     : "Utilisation payante",
    LT_Billing_Label_OverallCost                : "Coût total",

    LT_Common_Text_StartDate                    : "Démarrer",
    LT_Common_Text_EndDate                        : "Fin",
    LT_Common_Text_Interval                        : "Intervalle",
    LT_Common_Text_Close                        : "Fermer",
    LT_Common_Text_Items                        : "élément(s)",

    LT_Common_Text_Interval_3600                : "heure",
    LT_Common_Text_Interval_86400               : "jour",
    LT_Common_Text_Interval_604800              : "semaine",
    LT_Common_Text_Interval_2592000             : "mois",

    LT_Environments_Validation_ErrorDomain      : "Une erreur s'est produite pendant la vérification du domaine. Veuillez réessayer ultérieurement.",

    LT_Statistics_Label_UpdateData              : "Une erreur est survenue lors de la mise à jour des données statistiques pour l'environnement '%(envName)'",

    LT_E_Platform_99                             : "Une erreur inconnue est survenue. Veuillez réessayer ultérieurement, Nous nous excusons pour la gêne occasionnée.",
    LT_Error_Label_ServiceUnavailable           : "Le service est indisponible. Veuillez réessayer ultérieurement, Nous nous excusons pour la gêne occasionnée.",

    LT_ChangePwd_Error_WrongPassword            : "Mot de passe incorrect !",
    LT_ChangePwd_Text_Success                   : "Le mot de passe a été modifié avec succès.",
    LT_Menu_Toolbar_Coupon                      : "Activer bon de réduction",
    LT_Common_Text_Clone                        : "Dupliquer",
    LT_Common_Text_Prev                         : "Précédent",
    LT_Common_Text_Next                         : "Suivant",
    LT_Common_Text_URL                          : "URL",
    LT_Common_Text_Comment                      : "Description",
    LT_BugReport_Title                          : "Rapport d'erreurs Jelastic",
    LT_BugReport_Text_Intro                     : "Pour nous aider à diagnostiquer et à résoudre le problème, vous pouvez nous adresser un rapport d'erreur.",
    LT_BugReport_Text_SentSuccess               : "Le rapport a été envoyé avec succès. Merci !",
    LT_GOut_Label_SendReport                    : "Envoyer rapport",
    LT_Upload_Validation_URL                    : 'Ce champ devrait contenir une URL au format <br/>'+
        '"http://www.exemple.com/",<br/>'+
        '"ftp://www.exemple.com/" ou <br/>'+
        '"ftp://login:pass@www.exemple.com/"',
    LT_Upload_FileNotFound                      : "Fichier introuvable !",
    LT_Process_Label_Uploading                    : "Chargement...",
    LT_Upload_EmptyURL                          : "http://... ou ftp://...",
    LT_BugReport_Label_Comment                  : "Description",
    LT_BugReport_Label_Details                  : "Détails",
    LT_BugReport_Label_SendReport               : "Envoyer rapport",
    LT_Common_Text_Install                      : "Installer",
    LT_Common_Text_General                      : "Général",
    LT_Common_Text_Topology                     : "Topologie",
    LT_Common_Text_Version                      : "Version",
    LT_Common_Text_Category                     : "Catégorie",
    LT_Common_Text_Updated                      : "Actualisé",
    LT_Common_Text_Price                        : "Prix",
    LT_Common_Text_Description                  : "Description",
    LT_Common_Text_Errors                       : "Erreurs",
    LT_Common_Text_FulScreen                    : "Plein écran",
    LT_Common_Text_Branch                       : "Branche",
    LT_Common_Text_Right                        : "Droite",
    LT_Common_Text_Summary                      : "Sommaire",
    LT_RowEditor_CommitChangesText              : "Vous devez valider ou annuler vos modifications",
    LT_DeployArchive_EmptyText                  : "Sélectionnez un contexte",
    LT_ConfigManager_NewFolder                  : "Nouveau dossier",
    LT_ConfigManager_NewConfig                  : "NouveauFichier_",
    LT_ConfigManager_NewDir                     : "NouveauRép",
    LT_Topology_Requests                        : "Requêtes",
    LT_EnvWizard_IPv4                           : "Public IPv4",
    //LT_EnvWizard_BuildNode                      : "Monter nœud ",

    //LT_EnvWizard_AppLogic                       : "Logique d'application",
    //LT_EnvWizard_SqlDatabase                    : "Bases de données SQL",
    //LT_EnvWizard_NoSqlDatabase                  : "Bases de données NoSQL",
    LT_EnvWizard_VScaling                       : "Scalabilité verticale",
    //LT_EnvWizard_CloudletsLimit                 : "Limite de cloudlets",
    LT_EnvWizard_Software                       : "Logiciel",
    LT_EnvWizard_JdkVersion                     : "Version JDK",
    LT_EnvWizard_HScaling                       : "Scalabilité horizontale",
    LT_EnvWizard_Instances                      : "Instances",

    LT_Units_Kb                                 : "Ko",
    LT_Units_Mb                                 : "Mo",
    LT_Units_Gb                                 : "Go",

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Added : 11.01.2012
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//    LT_EnvWizard_Hint_Ssl                       : "Activer SSL",
//    LT_EnvWizard_Hint_Balancer                  : "Équilibreur",
//    LT_EnvWizard_Hint_Compute                   : "REC - Runtime Execution Container",
//    LT_EnvWizard_Hint_HScaling                  : Scalabilité horizontale",
//    LT_EnvWizard_Hint_AppServers                : "Type et version des serveurs de l'application",
//    LT_EnvWizard_Hint_JDK                       : "Version JDK",
//    LT_EnvWizard_Hint_PHP                       : "Version PHP",
//    LT_EnvWizard_Hint_Build                     : "Monter nœud ",
//    LT_EnvWizard_Hint_Sql                       : "Base de données SQL",
//    LT_EnvWizard_Hint_NoSql                     : "Base de données NoSQL",

    LT_EnvWizard_Warning_Common                 : "<span class=\"attention\">Attention !</span> La configuration actuelle de certains composants peut être irréparable ou affecter les performances.",

    LT_EnvWizard_ApacheModule                   : "Module",

    LT_EnvironmentWizard_Hint_BuildNode            :   "<div class=\"dfn\"><span class=\"gray\"></span>Soumettre &mdash; Build &mdash; Déployer flux d'informations</div>" +
        "<img src=\"./jelastic/env/images/topology/build-process.png\" width=\"507\" height=\"133\">" +
        "<div class='labels'>" +
        "<div class='ide'><span>IDE</span><p>Soumettre au référentiel</p></div>" +
        "<div class='svn'><span>Référentiel</span><p>SVN ou Git</p></div>" +
        "<div class='build'><span>Monter nœud </span><p>Monter et déployer vers environnement</p></div>" +
        "<div class='env'><span>Environment</span><p>Envoi du code à tous les nœuds</p></div>" +
        "</div>",

    LT_Common_Text_Language                     : "Langue",
    LT_Signin_Label_ResetPassword                 : "Réinitialiser mot de passe",

    LT_Upload_Error_MaxSize                     : "La taille maximale de fichier depuis un ordinateur local est %(size). Tentez de charger le fichier à partir d'une URL.",
    LT_Upload_Error_Upload                       : "Une erreur est survenue lors du chargement des fichiers: %(msg)",

    LT_BuildNode_Warning_NameExist              : "Un projet portant ce nom existe déjà !",
    LT_BuildNode_Warning_InvalidName            : "Nom de projet invalide",
    LT_Common_Text_InvalidData                  : "Données invalides",


    ////////////////////////////////////////////////////////////

    LT_Warning_Label_Browser_Title              : "Votre navigateur actuel n'est pas pris en charge par la plateforme",
    LT_Warning_Label_Browser_Message            : "Certaines fonctions pourraient ne pas fonctionner correctement. Nous recommandons l'utilisation des navigateurs suivants avec Hidora:",

    LT_DeployArchive_Label_SelectContext        : "Choisissez un des contextes existants ou cliquez sur Nouveau.",
//    LT_DeployArchive_Label_SelectDeployment     : "Sélectionner w.",

    LT_ConfigManager_NewFile                    : "Nouveau fichier",

    LT_EnvWizard_Label_GetTariffs               : "Obtenir tarifs...",

    LT_Tasks_Column_Date                        : "Date",

    LT_Units_ms                                 : "ms",
    LT_Statistics_Label_RAM                     : "Utilisation RAM",
    LT_Statistics_Label_CPU                     : "Utilisation CPU",
    LT_Statistics_Label_HDD                     : "Utilisation du disque",

    LT_Statistics_Chart_Title                   : "%(label), [%(unit)]",

    LT_Menu_Toolbar_ConvertAccount              : "Mettre le compte %(groupName) à niveau",
    LT_Menu_Billing_ViewStat                    : "Afficher statistiques",
    LT_Menu_Billing_BillStat                    : "Facturation / statistiques",
    LT_Menu_Billing_RefillAccount               : "Recharger le solde",

    LT_Error_Template                           : "Une erreur est survenue lors %(action)",
    LT_Action_Deploy                            : "du déploiement de l'archive",
    LT_Action_BindExtDomain                     : "de la liaison d'un domaine externe",
    LT_Action_RemoveExtDomain                   : "de la suppression d'un domaine externe",
    LT_Action_SwapExtDomains                    : "de l'échange de domaines externes",
    LT_Action_CreateEnv                         : "de la création de l'environnement",
    LT_Action_DeleteEnv                         : "de l'effacement de l'environnement",
    LT_Action_StartEnv                          : "du démarrage de l'environnement",
    LT_Action_StopEnv                           : "de l'arrêt de l'environnement",
    LT_Action_CloneEnv                          : "de la duplication de l'environnement",
    LT_Action_ResetDbPass                       : "de la réinitialisation du mot de passe",
    LT_Action_SaveFile                          : "de la sauvegarde du fichier",
    LT_Action_CreateDir                         : "de la création du répertoire",
    LT_Action_CreateFile                        : "de la création du fichier",
    LT_Action_RenameFile                        : "du renommage du fichier",
    LT_Action_DeleteFile                        : "de la suppression du fichier",
    LT_Action_Upload                            : "du chargement du fichier",
    LT_Action_Upload                            : "du chargement des fichiers",
    LT_Action_RenameContext                     : "du renommage du contexte",
    LT_Action_DeleteContext                     : "de la suppression du contexte",
    LT_Action_RestartNode                       : "du redémarrage du nœud ",
    LT_Action_Build                             : "du montage du projet",
    LT_Action_GetLogs                           : "de l'obtention du journal",
    LT_Action_ReadLog                           : "de la lecture du journal",
    LT_Action_RemoveLog                         : "de la suppression du journal",
    LT_Action_ClearLog                          : "de l'effacement du journal",
    LT_Action_ResetPassword                     : "de la réinitialisation du mot de passe",
    LT_Action_ChangePassword                    : "du changement du mot de passe",
    LT_Action_ActivateCoupon                    : "de l'activation du bon de réduction",
    LT_Action_CreateSolution                    : "de la création de la solution",
    LT_Action_ChangeTopology                    : "du changement de la topologie",
    LT_Action_AddProject                        : "de l'ajout du projet",
    LT_Action_EditProject                       : "de l'édition du projet",
    LT_Action_LoadFiles                         : "du chargement des fichiers",

    // LT_Config_NotSelected                       : "Veuillez sélectionner un fichier dans le panneau de gauche.",

    LT_Units_MHz                                 : "MHz",

    LT_EnvWizard_Btn_Refill                     : "Recharger",

    LT_Error_NotBillingUser                     : "Une erreur est survenue lors de la récupération des informations de votre compte. Veuillez contacter notre équipe d'assistance.",

    LT_Menu_Billing_RefreshBalance              : "Rafraichir solde",

    //TODO: remove LT_Error_Label_UserNoGroup from all localization files!
    LT_Error_Label_UserHasNoHXGroups            : "Vous devez être un utilisateur Jelastic enregistré pour vous connecter.",

    LT_Error_SuspendedAccount_Billing           : "Votre compte a été suspendu temporairement en raison de fonds insuffisants. Veuillez recharger votre compte pour continuer à utiliser Jelastic.",

    LT_Menu_Toolbar_SendEmail                    : "Envoyer e-mail",
    LT_Menu_Toolbar_SupportForum                : "Contacter assistance",

    LT_SendEmail_Title                          : "Envoyer un e-mail",
    LT_SendEmail_Text_SentSuccess               : "L'e-mail a été envoyé avec succès. Merci !",

    LT_Common_Button_Send                       : "Envoyer",
    LT_Billing_Label_ExternalIP                 : "IP externe",
    LT_BugReport_Text_YourComment               : "Décrivez l'origine / la cause de cette erreur...",

    LT_SignupDlg_Label_Signup                   : "Inscrivez-vous !",
    LT_SignupDlg_Label_Info                     : "<b>Inscrivez-vous gratuitement !</b> En vous inscrivant, vous confirmez avoir lu et accepté les  <a href=\"%(sTermsUrl)\" target=\"_blank\">Conditions de service</a> et notre <a href=\"%(sPolicyUrl)\" target=\"_blank\">Politique de confidentialité</a>.",

    LT_Signin_Label_SignupFailed                : "<b>Echec de l'enregistrement du compte</b>. Nous pensons que cela est dû à des problèmes de réseau - veuillez réessayer dans quelques minutes. En cas d'échec de votre seconde tentative, adressez-nous un e-mail à <a class=\"email\" href=\"%(HOSTER_TRIAL_SUPPORT)\">%(text)</a> et nous ferons le nécessaire.",
    //LT_Signin_Label_SuspendedAccount            : "Votre compte a été suspendu pour violation des <a href=\"%(sTermsUrl)\" target=\"_blank\"> Conditions de service. Pour plus d’informations, contactez-nous à <a class=\"email\" href=\"mailto:%(sSupportEmail)\">%(sSupportEmail)</a>",
    LT_Signin_Label_SuspendedAccount            : "Votre compte a été suspendu. Veuillez contacter l'assistance via le portail <a href=\"%(HOSTER_SUPPORT)\" target=\"_blank\">%(HOSTER_NAME)</a> pour toute question relative à cette suspension.",
    LT_Process_Label_SigningUp                    : "Inscription...",

    LT_ResetPswdDlg_Label_ResetFailed            : "Une erreur est survenue lors de la réinitialisation de votre mot de passe. Nous pensons que cela est dû à des problèmes de réseau - veuillez réessayer dans quelques minutes. En cas d'échec de votre seconde tentative, veuillez nous contacter à <a class=\"email\" href=\"%(HOSTER_TRIAL_SUPPORT)\">%(text)</a>",
    LT_ResetPswdDlg_Label_NotRegistered         : "Cette adresse e-mail n'est pas présente dans notre système. Veuillez vérifier l'orthographe de l'adresse e-mail ou <a action=\"signup\">créer</a> un nouveau compte.",
    LT_Error_Label_AuthFailed                     : "E-mail ou mot de passe incorrect. Vous pouvez <a action=\"reset-password\">réinitialiser votre mot de passe</a>.",

    //LT_Quotas_Title                             : "Système de quotas",
    LT_Quotas_Column_Quota                      : "Quotas",
    LT_Quotas_Column_Trial                      : "Essai",
    //LT_Quotas_Column_Billing                    : "Facturation",

//    LT_Quotas_Label_Activate                    : "Activer",
//    LT_Quotas_Label_MaxEnvCount                 : "Nombre d'environnements max",
//    LT_Quotas_Text_MaxEnvCount                  : "Le nombre maximum d'environnements que l'on peut créer.",
//    LT_Quotas_Label_MinBalance                  : "Solde minimal",
//    LT_Quotas_Text_MinBalance                   : "La somme d'argent minimale dans votre compte pour pouvoir créer votre environnement.",
//    LT_Quotas_Label_MaxCPRecCount               : "Quantité max de conteneurs (REC)",
//    LT_Quotas_Text_MaxCPRecCount                : "Le nombre maximum de conteneurs que l'on peut ajouter à un environnement.",
//    LT_Quotas_Label_MaxCloudlets                : "Nombre max de cloudlets par conteneur (REC)",
//    LT_Quotas_Text_MaxCloudlets                 : "Le nombre maximum de cloudlets que l'on peut installer sur chaque conteneur (REC).",
//    LT_Quotas_Label_HA                          : "Haute disponibilité",
//    LT_Quotas_Text_HA                           : "La possiblité d'utiliser la haute disponibilité.",
//    LT_Quotas_Label_ExternalIP                  : "IP externe",
//    LT_Quotas_Text_ExternalIP                   : "La possibilité d'utiliser une adresse IP externe.",

    LT_Quotas_Label_Available                   : "Disponible",
    LT_Quotas_Label_NoLimit                     : "Illimité",
    LT_Quotas_Label_NotAvailable                : "Indisponible",

    LT_Pricing_Title                            : "Prix",
    LT_Pricing_Column_Containers                : "Conteneurs",
//    LT_Pricing_Column_CldlPrice                 : "Prix pour <b>1 cloudlet</b>",
//    LT_Pricing_Column_CapacityPrice             : "Prix pour <b>1 stockage<b>",
    LT_Pricing_Column_Service                   : "Service",
    LT_Pricing_Column_MonthPrice                : "Prix pour <b>1 heure</b>",

    LT_Menu_Billing_Quotas                      : "Quotas et tarifs",

    LT_Notify_Title_Question                    : "Question",
    LT_Notify_Label_UserGroupChanged            : "Votre type de compte a été changé en '%(sGroup)'. Vous devez actualiser la page pour appliquer les changements. Voulez-vous le faire maintenant ?",

    LT_Process_Label_Refreshing                 : "Actualisation...",

    LT_EnvWizard_AboutCurrency                  : "Les prix sont en %(currency)",

    LT_Menu_Billing_Balance_Total               : "Solde",
    LT_Menu_Billing_Balance_Cash                : "Argent disponible",
    LT_Menu_Billing_Balance_Bonus               : "Bonus",

    LT_Notify_Label_NoFreeHardware              : "Nous n'avons pas de matériel disponible en ce moment. Le nouveau matériel sera ajouté prochainement. Veuillez réessayer dans quelques heures.",

    LT_Environments_Column_ExternalIP           : "IP externe",

    LT_Common_Text_DoNotShowDialog              : "Ne plus afficher cette boîte de dialogue.",

    LT_RefillDlg_Text_HowToRefill               : "Cliquez sur <b>Recharger compte</b>pour ouvrir votre compte chez votre hébergeur web. Utilisez les identifiants reçus par e-mail lors de la conversion pour vous connecter et recharger votre compte. %(sMoreInfo)",
    LT_RefillDlg_Label_MoreInfo                 : "Des instructions détaillées sur la recharge du compte peuvent être trouvées sur <a href='%(sUrl)' target='_blank'>notre page de documentation</a>.",

    LT_Menu_Toolbar_Community                   : "Aller sur la communauté",

    LT_Quotas_Label_EnvSleep                    : "Mode veille automatique",
    LT_Quotas_Text_EnvSleep                     : "Le nombre d'heures pendant lesquelles l'environnement n'a reçu aucun accès et a été automatiquement mis en veille.",

    LT_SolutionDlg_Title                        : "Confirmer l'installation de %(name)",
    LT_SolutionDlg_WelcomeMsg                   : "Bonjour %(email). Nous sommes ravis de votre intérêt pour notre produit.",
    LT_SolutionDlg_MoreInfo                     : "Plus d'informations à",
    LT_SolutionDlg_JustClickInstall             : "Pour cela, cliquez simplement sur \"Installer\"",
    LT_SolutionDlg_PleaseWait                   : "Merci de patienter pendant l'installation du package...",
    LT_SolutionDlg_Deploy                       : "En cours de déploiement",
    LT_SolutionDlg_Config                       : "Configuration de l'environnement",
    LT_SolutionDlg_ApplicationSettings          : "Paramètres de l'application",
    LT_SolutionDlg_ChooseEnvironment            : "Choisir environnement",

    LT_Error_Solution_LoadData                  : "Une erreur est survenue en essayant d'obtenir les données de la solution.",

    LT_Action_GetEnvs                           : "obtenir environnements",

    LT_Units_GHz                                 : "GHz",

    LT_EnvWizard_Label_Mode_Basic               : "Basique",
    LT_EnvWizard_Label_Mode_Expert              : "Expert",

    //LT_EnvWizard_Cache                          : "Cache",
    //LT_EnvWizard_VDS                            : "VPS élastique",

    LT_EnvWizard_Label_Topology_Balancer        : "Equilibrage",
    LT_EnvWizard_Label_Topology_Compute         : "App. Serveurs",
    LT_EnvWizard_Label_Topology_Cache           : "Cache",
    LT_EnvWizard_Label_Topology_Sql             : "SQL",
    LT_EnvWizard_Label_Topology_NoSql           : "NoSQL",
    LT_EnvWizard_Label_Topology_VDS             : "VPS",
    LT_EnvWizard_Label_Topology_Build           : "Monter",
    LT_EnvWizard_Label_Topology_SSL             : "SSL",

    LT_EnvWizard_Label_Topology_Addons          : "Add-ons",
    LT_EnvWizard_Label_Topology_Storage         : "Espace disque",
    LT_EnvWizard_Label_Topology_Servers         : "Serveurs",

    LT_EnvWizard_SSL_Jelastic                   : "SSL Jelastic",
    LT_EnvWizard_SSL_Custom                     : "SSL personnalisé",
    LT_EnvWizard_SSL_About_Custom               : "Pour le moment, le SSL n'est disponible que pour les URLs Jelastic. Le SSL pour les domaines personnalisés est en cours de développement et sera intégré dans une prochaine mise à jour.",

    LT_EnvWizard_Scaling                        : "Scalabilité",
    LT_EnvWizard_Scaling_Vertical               : "(Verticale)",
    LT_EnvWizard_Scaling_Vert_Horz              : "(Verticale & Horizontale)",
    LT_EnvWizard_Scaling_Nodes                  : "nœud(s)",
    LT_EnvWizard_CloudletsLimit                 : "Limite de cloudlets",
    LT_EnvWizard_Engine                         : "SDK",

    LT_EnvWizard_Ballons_From                   : "De",
    LT_EnvWizard_Ballons_AutoScaling            : "Scalabilité automatique",
    LT_EnvWizard_Ballons_Cloudlet               : "cloudlet",
    LT_EnvWizard_Ballons_Cloudlets              : "cloudlet(s)",
    LT_EnvWizard_Ballons_PerHour                : "par heure",
    LT_EnvWizard_Ballons_UpTo                   : "jusqu’à",

    //LT_EnvWizard_AppServers                     : "Serveurs de l'application",


//    LT_EnvWizard_W_MaxvInstances_Trial          : "Les environnements d'essai sont limités à %(count) instances de serveurs d'application. <a action='upgrade' target='_blank'>Mettre à niveau maintenant</a> pour supprimer cette limitation.",



    LT_EnvWizard_Warning_DeleteStorage          : "Après la suppression du stockage, toutes les données seront définitivement perdues !",


    LT_EnvWizard_Label_WizardMode               : "Mode assistant:",

    LT_EnvWizard_Hint_Balancer                  : "Distribue automatiquement le trafic entrant de l'application sur plusieurs nœuds.",
    LT_EnvWizard_Hint_Compute                   : "Les machines virtuelles vers lesquelles vous déployez votre application. Après la création de l'environnement, vous pouvez configurer les serveurs pour charger des bibliothèques ou changer les fichiers de configuration.",
    LT_EnvWizard_Hint_Cache                     : "Memcached - un stockage clé-valeur en mémoire pour des petits morceaux de données arbitraires (chaînes, objets) venant d'appels de base de données, d'API ou de l'affichage de la page.",
    LT_EnvWizard_Hint_Sql                       : "Machine virtuelle avec base de données SQL du type que vous sélectionnez.",
    LT_EnvWizard_Hint_NoSql                     : "Machine virtuelle avec base de données NoSQL du type que vous sélectionnez.",
    LT_EnvWizard_Hint_Build                     : "Nœud expert qui peut monter vos projets dans le Cloud. Après la création de l'environnement, il est possible de configurer le nœud pour ajouter un projet GIT ou SVN.",
    //LT_EnvWizard_Hint_SSL                       : "Certificat SSL pour les connexions HTTPS à votre environnement. L'accès HHTPS aux environnements ayant des domaines personnalisés n'est pas encore disponible et sera ajouté dans notre prochaine version.",

    LT_EnvironmentWizard_Hint_Cloudlets            :
//        "Définit la quantité <i>maximale</i> de ressources que le serveut peut recevoir. Un <span class=\"dfn\">Cloudlet</span> &mdash; est une quantité de mémoire et de puissance prédéfinie allouée à un serveur."+
//        "%(illustration_1)"+
//        "<p>Un cloudlet est équivalent à environ 128 Mo de RAM et 200 MHZ de CPU.Les coudlets sont assignés de manières dynamique aux applications à tout moment en fonction de la charge et dans les limites spécifiées.</p>"+
//        "%(illustration_2)"+
        "<div class='dfn'>Vous ne payez que ce que vous utilisez.</div>" +
        "<p> Jelastic alloue automatiquement la quantité adéquate de cloudlets à chaque application selon ses besoins en ressources, mais sans dépasser le nombre maximum que vous avez spécifié.</p>"+
        "%(illustration_3)",

    LT_Statistics_Label_NetInInt                : "Consommation entrées internes",
    LT_Statistics_Label_NetOutInt               : "Consommation sorties internes",
    LT_Statistics_Label_NetInExt                : "Consommation entrées externes",
    LT_Statistics_Label_NetOutExt               : "Consommation sorties externes",

    LT_Menu_Toolbar_AboutTrialLimitations       : "En savoir plus sur les limitations en période d'essai",
    LT_Menu_Toolbar_AboutPricing                : "Informations tarifaires",
    LT_Menu_Toolbar_ResourceUsage               : "Afficher les statistiques d'utilisation récente des ressources",

    LT_Quotas_Title                             : "Limitations du compte",
    LT_Quotas_Column_Limitation                 : "Limitation",
    LT_Quotas_Column_Billing                    : "Compte complet",
    LT_Quotas_Label_Current                     : "Actuel",

    LT_Quotas_Label_Activate                    : "Activer",
    LT_Quotas_Text_MaxEnvCount                  : "Nombre maximal d'environnements que vous pouvez créer.",
//    LT_Quotas_Text_MaxCPRecCount                : "Nombre maximal de serveurs d'application par environnement.",
//    LT_Quotas_Text_MaxCloudlets                 : "Taille maximale d'un serveur en cloudlets (un cloudlet = %(CLOUDLET_RAM) MB RAM, %(CLOUDLET_CPU) MHz CPU core).",
    LT_Quotas_Text_HA                           : "Option de configuration de cluster haute disponibilité",
    LT_Quotas_Text_ExternalIP                   : "Adresses IP publiques.",

    LT_Pricing_Column_CldlPrice                 : "Prix pour <b>1 cloudlet / heure</b>",
    LT_Pricing_Column_CapacityPrice             : "Prix pour <b>1 Go de stockage / heure</b>",

    LT_Task_Name_33                                : "Modification du fichier de configuration dans %(env)",
    LT_Task_Name_37                                : "Désactivation de la réplication dans %(env)",

    LT_Text_CacheInfo                           :
        "<p>Pour travailler avec le nœud  memcached, utilisez les informations suivantes:<ol>"+
        "<li>Vérifiez vos e-mails pour obtenir le lien de votre nœud  memcached ou obtenez-le dans la chaîne ci-dessous:</br>"+
        "- <a target=_blank href='%(url)'>%(url)</a><br/><br/></li>"+
        "<li>Vous pouvez vous connecter au nœud  memcached à l'aide du code donné en exemple ou en utilisant des bibliothèques<br/>que vous pouvez trouver sur les sites ci-dessous:</li></ol></p>",

    LT_Text_CacheInfo_Links :
        "<p>- Clients memcached Java:<br/>"+
        "<a target=_blank href='http://code.google.com/p/spymemcached/'>http://code.google.com/p/spymemcached</a><br/>"+
        "<a target=_blank href='http://www.whalin.com/memcached'>http://www.whalin.com/memcached</a><br/>"+
        "<a target=_blank href='http://code.google.com/p/javamemcachedclient'>http://code.google.com/p/javamemcachedclient</a><br/>"+
        "<a target=_blank href='http://code.google.com/p/memcache-client-forjava'>http://code.google.com/p/memcache-client-forjava</a><br/>"+
        "<a target=_blank href='http://code.google.com/p/xmemcached'>http://code.google.com/p/xmemcached</a></p>" +
        "<p>- Intégrations:<br/>" +
        "<a target=_blank href='http://code.google.com/p/simple-spring-memcached'>http://code.google.com/p/simple-spring-memcached</a><br/>"+
        "<a target=_blank href='http://code.google.com/p/memcached-session-manager'>http://code.google.com/p/memcached-session-manager</a><br/>"+
        "<a target=_blank href='http://code.google.com/p/memcached/wiki/Clients'>http://code.google.com/p/memcached/wiki/Clients</a></p>",


    LT_Balloons_Label_Have_Used                 : "J'ai déjà utilisé la plateforme",
    LT_Balloons_DeploySuccess_Text              : "Félicitations ! Ouvrons maintenant votre application  !",

    LT_Balloons_Tip_Close                       : "Fermer ce conseil",
    LT_Balloons_Tip_Stop                        : "Arrêter le tutoriel",

    LT_Menu_Toolbar_Tutorial                    : "Afficher le tutoriel Jelastic",


    LT_Billing_Label_ForTrial                   : "(version d'essai)",

    LT_Common_Text_Traffic                      : "Trafic",

    LT_BuildNode_Warning_HasNotCompute          : "Impossible de déployer l'environnement sans nœud  de calcul.",

    LT_Notify_Label_NoFreeIps                   : "Plus d'IP publiques disponibles en ce moment. Les nouvelles IP publiques seront bientôt disponibles. Veuillez réessayer ultérieurement.",

    LT_Process_Label_LoadingUserData            : "Chargement des données utilisateur...",

    LT_CustomSSL_Label                          : "SSL personnalisé",
    LT_CustomSSL_Label_Download                 : "télécharger",
    LT_CustomSSL_Label_ServerKey                : "Clé serveur",
    LT_CustomSSL_Label_CACertificate            : "Certificat intermédiaire (CA)",
    LT_CustomSSL_Label_DomainCertificate        : "Certificat de domaine",
    LT_CustomSSL_Label_Certificates             : "Certificats",
    LT_CustomSSL_Label_Domains                  : "Domaines",

    LT_CustomSSL_Text_WrongEnv                  : "Cette fonctionnalité pourrait ne pas fonctionner correctement dans la configuration actuelle de votre environnement. <a action='configure'>Cliquez ici pour le paramétrer.</a>.",
    LT_CustomSSL_Text_EditMode                  : "Tous les serveurs d'application de l'environnement actuel vont redémarrer.",
    LT_CustomSSL_Text_WrongCerts                : "Une erreur est survenue lors de l'activation du SSL personnalisé. Veuillez vérifiez les certificats actuels et réessayer.",

    LT_CustomSSL_Error_GetState                 : "Une erreur est survenue lors du chargement des statistiques SSL.",
    LT_CustomSSL_Error_Enable                   : "Une erreur est survenue lors de l'activation du SSL personnalisé.",
    LT_CustomSSL_Error_Disable                  : "Une erreur est survenue lors de la désactivation du SSL personnalisé.",

    LT_Common_Button_Configure                  : "Configurer",
    LT_Common_Button_Change                     : "Changer",

    LT_Process_Label_Processing                 : "Traitement...",

    //LT_EnvWizard_Hint_SSL                       : "Certificat SSL pour les connexions HTTPS à votre environnement. Nous vous informons que l'accès HTTPS aux environnements ayant des domaines personnalisés n'est pas encore disponible et sera ajouté dans notre prochaine version.",
    LT_EnvWizard_Hint_SSL                       : "Certificat SSL pour les connexions HTTP à votre environnement.",

    //LT_EnvWizard_Label_EnvSettings              : "Paramètres environnement",
    LT_EnvWizard_Text_SLL_Reqs                  : "Activer la connexion SSL pour votre application à l'aide d'un certificat SSL wildcard Jelastic. [link]En savoir plus[/link]",
    LT_EnvWizard_Text_CustomSLL_Reqs            : "Téléchargez un certificat personnalisé dans votre environnement pour permettre la connexion SSL. [link]En savoir plus[/link]",
    LT_EnvWizard_Label_Requirements             : "Prérequis",
    //LT_EnvWizard_AppServer                      : "Serveur de l'application",
    LT_EnvWizard_Label_Adjust                   : "Réglages",

    // LT_Task_EnableCustomSSL                     : "Installation des certificats SSL dans %(env)",
    // LT_Task_DisableCustomSSL                    : "Suppression des certificats SSL de %(env)",

    LT_EnvWizard_Label_BuySSLCertificate        : "Acheter un certificat SSL",

    LT_Common_Text_Update                       : "Mise à jour depuis %(type)",
    LT_Context_Confirm_UpdateProject            : "Mettre à jour le projet \"%(sName)\"?",

    LT_DeployArchive_Warning_VCSContext         : "Ce contexte est déjà en cours d'utilisation par un projet SVN/GIT.",

    LT_Action_UpdateProject                     : "mettre projet à jour",
    LT_Action_GetProject                        : "atteindre projet",
    LT_Action_RemoveProject                     : "supprimer projet",

    LT_Task_Name_39                                : "Mise à jour du contexte de %(project) dans %(env)",

    LT_Environments_Text_Deployed               : "%(count) projets déployés",

    LT_Process_Label_Updating                    : "Mise à jour...",

    LT_Common_Confirm_Delete                    : "Supprimer <b>%(name)</b>?",
    LT_Common_Confirm_Save                      : "Enregistrer %(name)?",

    LT_CustomSSL_Text_ServerKey                 : "Une clé serveur est une clé privée de chiffrement/déchiffrement utilisée par le serveur.",
    LT_CustomSSL_Text_CACertificate             : "Une Autorité de certification (CA) est une entité qui émet des certificats digitaux vérifiant la propriété d'une clé publique par le titulaire nommé du certificat.",
    LT_CustomSSL_Text_DomainCertificate         : "Un certificat de domaine est un document électronique attribué par l'Autorité de certification qui vérifie qu'un candidat ait le droit d'utiliser un nom de domaine spécifique.",
    LT_CustomSSL_Label_UpTo                     : "jusqu’à",

    LT_Common_Text_CheckoutNow                  : "Commander maintenant",
    LT_Common_Text_UpdateNow                    : "Mettre à jour maintenant",

    LT_Error_UpdateVCSProject_AuthFailed        : "L'authentification a échoué lors de la mise à jour du projet %(project) dans %(env). Vérifiez à nouveau les paramètres du projet.",
    LT_Error_UpdateVCSProject_WrongConfig       : "Une erreur est survenue lors de la mise à jour du projet %(project) dans %(env). Vérifiez à nouveau les paramètres du projet.",
    LT_Error_UpdateVCSProject_NotExist          : "Une erreur est survenue lors de la mise à jour du projet %(project) dans %(env). Le projet n'existe pas.",

    LT_Error_EditProject_Exist                  : "Un projet portant le nom %(project) existe déjà.",
    LT_Error_EditProject_UnknownType            : "Impossible de traiter le projet - type non pris en charge.",

    LT_Environments_Validation_Domain_Length    : "La longueur du domaine doit être inférieure à %(maxLength).",

    LT_DeployArchive_InvalidPath                : "Nom de chemin invalide",

    LT_Environments_Status_0                    : "Inconnu",
    LT_Environments_Status_1                    : "En cours d'exécution",
    LT_Environments_Status_2                    : "Interrompu",
    LT_Environments_Status_3                    : "Lancement...",
    LT_Environments_Status_4                    : "En veille",
    LT_Environments_Status_5                    : "Suspendu",
    LT_Environments_Status_6                    : "Création...",
    LT_Environments_Status_7                    : "Duplication",

    LT_Action_ReadFile                          : "lire fichier",

    LT_Menu_CloneEnvironment_NoRights           : "Vous n'avez pas les autorisations nécessaires pour dupliquer cet environnement.",
    LT_Menu_DeleteEnvironment_NoRights          : "Vous n'avez pas les autorisations nécessaires pour supprimer cet environnement.",

    LT_Environments_Validation_ShortDomain      : "La longueur du domaine doit être supérieure à 4 caractères.",

    TrialToPaid_InvoiceTo                       : "Facturer à:",
    TrialToPaid_FirstName                       : "Prénom",
    TrialToPaid_LastName                        : "Nom",
    TrialToPaid_CompanyName                     : "Dénomination sociale",
    TrialToPaid_VatNumber                       : "Numéro de TVA",
    TrialToPaid_StreetAddress                   : "Adresse postale",
    TrialToPaid_City                            : "Ville",
    TrialToPaid_Country                         : "Pays",
    TrialToPaid_State                           : "Etat",
    TrialToPaid_Zip                             : "Code postal",
    TrialToPaid_Phone                           : "Téléphone",
    TrialToPaid_PhoneCountry                    : "pays",
    TrialToPaid_PhoneArea                       : "région",
    TrialToPaid_PhoneNumber                     : "numéro de téléphone",

    TrialToPaid_AgreeCheck                      : "J'ai lu et accepté les[link]Conditions d'utilisation[/link]",
    TrialToPaid_Next                            : "Suivant",
    TrialToPaid_GettingUserInfo                 : "Obtention des informations utilisateur...",

    LT_Action_GetUserInfo                       : "obtenir informations utilisateur",
    LT_Action_ConvertAccount                    : "convertir compte",
    LT_Action_AddPaymentMethod                  : "ajouter nouveau mode de paiement",
    LT_Action_DelPaymentMethod                  : "supprimer mode de paiement",
    LT_Action_SetDefPayMethod                   : "définir mode de paiement par défaut",
    LT_Action_DisableAutoRefill                 : "désactiver recharge auto",
    LT_Action_ViewInvoices                      : "voir factures",

    Refill_FraudCheck                           : "Vous devez valider des tests de sécurité complémentaires pour effectuer votre paiement.",
    Refill_UnknownServicePlan                   : "Plan de service inconnu !",
    Refill_SelectPaymentMethod                  : "Veuillez sélectionner le mode de paiement souhaité",
    Refill_Confirm                              : "Recharger votre compte de %(withTaxes) (%(pureAmount) + %(taxesSum) TVA) en utilisant %(payMethod) ?",
    Refill_ApprovedThank                        : "Nous vous remercions pour votre paiement",
    Refill_ApprovedReceived                     : "Nous avons bien reçu votre paiement, %(amount) ont été ajoutés à votre solde.",
    Refill_ApprovedEmailed                      : "La facture correspondante vous sera envoyée par e-mail pour vos dossiers.",
    Refill_CreditDebit                          : "Carte bancaire",
    Refill_PayPal                               : "Paiement Paypal",
    Refill_TransactionDeclined                  : "Le paiement a été refusé",
    Refill_ThankNotify                          : "Merci pour votre paiement !,  Nous vous confirmerons rapidement la réception de ce paiement.",
    Refill_SumAdjustment                        : "Ajustement du montant",
    Refill_SubmitPayment                        : "Effectuer paiement",
    Refill_PayOptions                           : "Options de paiement",
    Refill_TopUp                                : "Montant de la recharge",
    Refill_PlusVat                              : "+ TVA à %(percent)%",
    Refill_TotalPayable                         : "Total à payer:",
    Refill_Existing                             : "Utiliser méthode de paiement existante",

    PayManager_Title                            : "Méthodes de paiement",
    PayManager_ChooseDefault                    : "Choisir votre méthode de paiement par défaut",
    PayManager_ConfirmDelete                    : "Supprimer %(name)?",
    PayManager_AddPayMethod                     : "Ajouter une nouvelle méthode de paiement",
    PayManager_SubmitNew                        : "Vous devez [link]effectuer un paiement[/link]pour enregistrer vos nouvelles informations de paiement",
    PayManager_SetDefault                       : "Définir %(name) comme votre méthode de paiement par défaut ?",

    AutoRefill_Title                            : "Recharger automatiquement",
    AutoRefill_Active                           : "La recharge automatique est activée." +
        "[link]Cliquez ici pour désactiver la recharge auto[/link], ou modifiez les paramètres ci-dessous si nécessaire",

    AutoRefill_When                             : "Quand recharger",
    AutoRefill_Weekly                           : "Toutes les semaines (chaque lundi)",
    AutoRefill_Monthly                          : "Tous les mois (le 1er de chaque mois)",
    AutoRefill_LessThan                         : "Solde inférieur à %(currency)",
    AutoRefill_Confirm                          : "Recharger automatiquement de %(withTaxes) (%(pureAmount) + %(taxesSum) TVA) en utilisant %(payMethod) ?",
    AutoRefill_Disabled                         : "La recharge auto a été désactivée avec succès",
    AutoRefill_ConfirmDisable                   : "Désactiver la recharge auto ?",

    BillingMenu_AutoRefill                      : "Configurer recharge auto",
    BillingMenu_ViewInvoices                    : "Voir factures",

    SendMessage_From                            : "De",
    SendMessage_To                              : "À",
    SendMessage_Subject                         : "Objet",

    LT_Error_UrlNotValid                        : "URL invalide !",
    LT_Environments_Tooltip_Text_Deployed       : "Déployer vos paquets WAR depuis le panneau Gestion déploiement.",

    LT_SolutionDlg_Success                      : "L'application %(name) a été déployée vers Jelastic avec succès.",

    TrialToPaid_CreateAccount                  : "Mettre à niveau",
    TrialToPaid_CreateAccountHint              : "Cliquez sur le bouton Créer compte pour mettre votre compte d'essai Jelastic à niveau",
    TrialToPaid_Submit                         : "Envoyer",

    //LT_Quotas_Label_MinBalance                  : "Solde minimal",
    LT_Quotas_Text_MinBalance                   : "La somme d'argent minimale dans votre compte pour pouvoir créer votre environnement.",
    LT_Quotas_Text_TrialPeriod                  : "La période pendant laquelle vous pouvez utiliser votre compte d'essai.",
    LT_Quotas_Text_TrialBonus                   : "Les bonus gratuits mis à votre disposition avec le compte d'essai",

    LT_Error_RecoverPass                        : "Adresse e-mail incorrecte",
    LT_Error_AuthFailed                         : "Echec de l'authentification",
    LT_BuildNode_Warning_InvalidLogin           : "Identifiants invalides",
    LT_BuildNode_Warning_InvalidPath            : "Chemin invalide",

    LT_EnvWizard_Label_FIXED                    : "Résolu",
    LT_EnvWizard_Label_FLEXIBLE                 : "Flexible",
    LT_EnvWizard_Label_HYBRID                   : "Hybride",

    LT_EnvWizard_PriceSlider_Cloudlets_Now      : "Maintenant: %(value)",
    LT_EnvWizard_PriceSlider_Cloudlets_Next     : "Prochain: %(value)",

    LT_EnvWizard_PriceSlider_Cloudlets          : "%(value) cloudlets",
    LT_EnvWizard_PriceSlider_CurrDiscount       : "Votre réduction: %(value)",
    LT_EnvWizard_PriceSlider_NextDiscount       : "Prochaine réduction: %(value)",

    LT_EnvWizard_Pricing_From                   : "de",
    LT_EnvWizard_Pricing_To                     : "à",
    LT_EnvWizard_Pricing_Price                  : "prix",

    LT_EnvWizard_Pricing_Resources              : "Ressources",
    LT_EnvWizard_Pricing_ResourcesClds          : "(cloudlets)",

    LT_EnvWizard_Pricing_TotalReserved          : "Total de cloudlets réservés",
    LT_EnvWizard_Pricing_TotalDynamic           : "Total de cloudlets dynamiques",
    LT_EnvWizard_Pricing_PerMonth               : "par mois",

    LT_EnvWizard_Pricing_SavingReserved         : "Vous économisez %(value) en utilisant des cloudlets réservés",
    LT_EnvWizard_Pricing_SavingDynamic          : "Vous économisez %(value) en utilisant des cloudlets dynamiques",
    LT_EnvWizard_Pricing_SaveRsvdByMonth        : "/mois",

    LT_EnvWizard_Pricing_ShowDetails            : "Détails des coûts",
    //LT_EnvWizard_Pricing_DetailedInfo           : "Informations détaillées sur les tarifs",


    LT_EnvWizard_Options                        : "Options",

    LT_EnvWizard_Ballons_Reserved               : "Réservés",
    LT_EnvWizard_Ballons_Dynamic                : "Limite de scalabilité",

    LT_Error_Rename_Context                     : "Le contexte n'existe pas",
    LT_Incorrect_ItemName                       : "Nom de l'élément incorrect",

    LT_Pricing_Label_Hour                       : "/heure",
    LT_Pricing_Label_Discount                   : "réduction",
    LT_Pricing_Label_ReservedRes                : "Coudlets réservés",
    LT_Pricing_Label_DynamicRes                 : "Cloudlets dynamiques",


    LT_EnvWizard_Ballons_Discount               : "Réduction",

//    LT_PackageDescription_ftp                   : "Gestion des protocoles FTP/FTPS pour le déploiement des applications vers Jelastic.",
    LT_Pricing_Text_ReservedRes                 : "Ces cloudlets sont réservés à l'avance à l'aide de l'assistant topologie.<br.>Vous payez toujours pour les cloudlets réservés qui sont configurés, même si vous utilisez moins de ressources.<br/>Le niveau de réduction est égal à la somme de tous les cloudlets réservés par environnement.",
    LT_Pricing_Tetx_DynamicRes                  : "Ressources de scalabilité dynamiques instantanées pour votre application. Vous ne payez que pour les cloudlets dynamiques que vous utilisez. Utilisez la limite de scalabilité dans l'assistance topologie pour définir le maximum autorisé par serveur. <br />Le niveau de remise correspond à la somme totale de tous les cloudlets dynamiques utilisés par environnement.",

    LT_Pricing_Discount_Title                   : "RAM / CPU",
    LT_SoftCost_Title                           : "Logiciel",
    //LT_SoftCost_Text_Description                : "<p>L'utilisation de piles logicielles est gratuite chez Jelastic !</p><p>Vous ne payez que les ressources utilisées mais pas l'ajout de logiciels libres à votre environnement.</p>",

    LT_Confirm_ResetFtpPassword                 : "Réinitialiser mot de passe pour FTP ?",
    LT_Confirm_UninstallApp                     : "Désinstaller l'application ?",

    LT_Process_Label_Uninstalling               : "Désinstallation...",


    LT_Addons_Title                             : "%(sAppName) : %(sType) : add-ons",
    LT_Menu_Addons                              : "Add-ons",

    LT_AddonShortDescription_ftp                : "Gestion des protocoles FTP/FTPS pour le déploiement des applications vers Jelastic.",
    LT_AddonDescription_ftp                     : "<p>File Transfer Protocol (FTP) est un protocole de réseau standard utilisé pour transférer des fichiers d'un hôte à un autre via un réseau en TCP.</p><p>Le FTP sécurisé avec SSL (FTPS) est utilisé pour sécuriser des transmissions. Il masque l'identifiant, le mot de passe et crypte le contenu.</p>",
    LT_AddonWarning_externalip                  : "Ipv4 Public sera automatiquement ajouté à votre environnement",

    LT_E_Platform_4071                          : "\"l'archive%(archive)\" ne peut être déployée vers le contexte \"%(context)\" car elle est endommagée. Vérifiez l'archive à nouveau et réessayez.",
    LT_E_Platform_4072                          : "\"l'archive%(archive)\" ne peut être déployée vers le contexte \"%(context)\" car elle est vide. Vérifiez l'archive à nouveau et réessayez.",

    LT_EnvWizard_JelasticSSL                    : "SSL Jelastic",
    //LT_EnvWizard_Extra                          : "Extra",

    LT_SolutionDlg_AdditionalInfo               : "Confirmer l'installation de %(name)<br />pour commencer à l'utiliser.",

    LT_AddonFtp_InstallSuccess                  : "FTP a été installé avec succès. Vos identifiants vous ont été envoyés par e-mail.",
    LT_AddonFtp_ResetPassword                   : "Votre mot de passe FTP a été modifié avec succès et vous a été envoyé par e-mail.",
    LT_AddonWarning_ConvertAcc                  : "Les adresses IPv4 publiques sont uniquement disponibles sur les comptes payants. Veuillez mettre à niveau pour supprimer cette limite.",
    LT_AddonWarning_ContactSupport              : "Les limites de votre compte ne vous permettent pas d'ajouter IPv4 public. Contactez l'assistance pour supprimer cette limite.",

    LT_Task_FTP_ResetPassword                   : "Réinitialisation du mot de passe pour %(pkg) de (env)",

    LT_Billing_Column_IntTraffic                : "Trafic interne",

    AutoRefill_Checkbox                         : "Recharge auto quand mon solde <span class='min-threshold'> est inférieur à %(minThreshold)</span>",

    LT_EnvWizard_Pricing_UseReserved            : "Vous pouvez <span class='orange-text'>économiser </span> en utilisant des Cloudlets réservés",

    LT_Pricing_Column_Discount                  : "Réduction",
    LT_Pricing_Column_PerHour                   : "Par heure",
    LT_Pricing_Column_CostPerReserved           : "Coût par Cloudlet réservé",
    LT_Pricing_Column_CostPerDynamic            : "Coût par Cloudlet dynamique",
    LT_Pricing_Column_ReservedCloudlets : "Coudlets réservés",
    LT_Pricing_Column_DynamicCloudlets          : "Cloudlets dynamiques",
    LT_Pricing_Label_Cloudlet                   : "cloudlet",

    LT_DiscCost_Title                           : "Espace disque",
    LT_DiscCost_Column_Storage                  : "Espace disque utilisé",

    LT_DiscCost_Text_Description                : "<dfn>L'espace disque</dfn> est facturé toutes les heures par Go utilisé dans votre environnement.",

    LT_NetworkCost_Title                        : "Trafic",
    LT_NetworkCost_Column_ExtTraffic            : "Trafic externe le mois dernier",
    LT_NetworkCost_Text_Description             : "Le<dfn>trafic</dfn> utilisé est facturé toutes les heures. Le niveau de remise est basé sur le montant de trafic externe utilisé par environnement le mois précédent.",
    LT_NetworkCost_Text_InternalDesc            : "Le trafic interne est entièrement gratuit !",

    LT_OptionsCost_Title                        : "Options",
    LT_OptionsCost_Column_Count                 : "Compte",
    LT_OptionsCost_Label_IP                     : "IP publique",
    LT_OptionsCost_Text_IP_Desc                 : "Adresse IP externe accessible directement depuis l'extérieur du cluster. Les frais sont calculés toutes les heures.",
    LT_OptionsCost_Label_JelasticSSL            : "SSL Hidora",
    LT_OptionsCost_Text_JSSL_Desc               : "Ce protocole établit une connexion sécurisée entre votre client et votre environnement Jelastic. Les frais sont calculés toutes les heures.",

    LT_Pricing_Label_PerMonth                   : "par mois",
    LT_Pricing_Label_Free                       : "GRATUIT",
    LT_Pricing_Column_UnitHourPrice             : "Prix par %(sUnit) / heure",
    LT_Pricing_Column_UnitMonthPrice            : "Prix par %(sUnit) / mois*",
    LT_Pricing_Column_UnitMonthFree             : "Gratuit / mois*",
    LT_Pricing_Column_UnitHourFree              : "Gratuit / heure",
    LT_Pricing_Column_PricePerHour              : "Prix / heure",
    LT_Pricing_Column_PricePerMonth             : "Prix / mois*",
    LT_Pricing_Column_PricePer                  : "Prix par %(sUnit)",

    LT_DiscCost_Column_FreeTpl                  : "jusqu'à %(value)",
    LT_NetworkCost_Column_FreeTpl               : "jusqu'à %(value)",

    LT_Pricing_Text_MonthHours                  : "* Basé sur un mois de 730 heures.",


    LT_NotConnected                             : "<b>Non connecté.</b> Connexion en %(time)… [link]Essayer maintenant/link]",

    TrialToPaid_MiddleName                      : "Deuxième prénom",
    TrialToPaid_RCR                             : "RCR",
    TrialToPaid_Type                            : "Type",
    TrialToPaid_CustomerPhysical                : "Personnel",
    TrialToPaid_CustomerOrganization            : "Entreprise",
    TrialToPaid_CustomerEntrepreneur            : "Entrepreneur",

    TrialToPaid_Title                           : "Mettre à niveau vers un compte payant",
    TrialToPaid_SelectPayType                   : "Sélectionner la méthode de paiement:",

    TrialToPaid_SliderDescription               : "<p>L'utilisation horaire des ressources est débitée du solde d'un compte prépayé.</p><p>Utilisez le curseur pour sélectionner le montant à verser:</p>",
    Refill_ContactUs                            : "[link]Contactez-nous/link] pour envisager un mode de paiement alternatif",

    LT_ConfigManager_SaveOnInstance             : "Enregistrer uniquement pour l'instance en cours",
    LT_ConfigManager_Confirm_SaveOnInstance     : "Enregistrer %(name) seulement pour %(instance)?",
    LT_ConfigManager_Confirm_SaveAll            : "Enregistrer %(name) pour toutes les instances?",

    LT_BuildNode_AutoUpdate                     : "Vérifier et auto-déployer les mises à jour",
    LT_BuildNode_Interval                       : "Vérifier toutes les (min)",

    LT_SearchField_HowDoI                       : "Comment faire pour ... ?",

    LT_Environments_Status_1001                 : "Effacement...",

    LT_Common_Button_TryAgain                    : "Réessayer",

    LT_DeleteEnvironment_Error_Template         : "Echec de la suppression de l'environnement %(envname): %(error).",
    LT_DeleteEnvironment_Error_WrongPswd        : "mot de passe invalide",

    LT_DeleteEnvironment_Text_ResetPswd         : "Mot de passe oublié ?<br />Cliquez sur <a action=\"reset-password\">réinitialiser mot de passe</a> pour en obtenir un nouveau.",

    LT_Task_Name_42                                : "Obtention de la liste des fichiers pour %(env)",
    LT_Task_Name_46                                : "Copie du fichier sur %(env)",
    LT_Task_Name_49                                : "Envoi du fichier sur %(env)",


    LT_Config_Text_LoadingError_401             : "Le fichier est trop volumineux pour être lu.",
    LT_Config_Text_LoadingError_402             : "Le fichier binaire ne peut pas être lu.",

    LT_Menu_Deployment                          : "Déploiement",
    TrialToPaid_ProceedAccount                  : "Continuer",
    AutoRefill_NoPaymentMethods                 : "Aucune méthode de paiement n'est configurée. Veuillez en configurer une avant d'activer la recharge auto.",

    LT_Deployment_AppDeploymentType             : "Type de déploiement de l'application",

    LT_Process_Label_ChangingDT                    : "Modification du type...",
    LT_DeployArchive_Label_DeployConfirm        : "Votre application sera disponible sur %(environment), continuer ?",
    LT_DeployArchive_Label_SelectDeployment     : "Sélectionner le type de déploiement prédéfini Ruby pour votre application",

    LT_ConfigManager_SaveForAllInstances        : "Sauvegarder pour toutes les instances",

    LT_Process_Label_Installing                 : "Installation de %(name)...",
    LT_Notify_Label_ApplicationInstalled        : "L'application a été installée avec succès. Des informations détaillées vous ont été envoyées par e-mail.",
    LT_Action_InstallApp                        : "installer application",

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Release: 1.9.3
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    LT_Error_StartBlockedEnv                    : "Impossible de lancer cet environnement car son propriétaire est bloqué.",
    LT_Error_NotEnoughDiskSpace                 : "L'espace disque de votre environnement \"%(env)\" est saturé.\nVeuillez [link]contacter l'assistance[/link] pour l'augmenter.",
    LT_Error_Platform_4078                      : "Impossible de télécharger le fichier \"%(archive)\"avec cette URL. Vérifiez l'URL et réessayez.",


    LT_EnvSettings_Confirm_RemoveShare          : "Supprimer le compte %(sEmail) ?",

    LT_Action_DeleteArchive                     : "supprimer archive",
    PayManager_NoPaymentMethods                 : "Pas de méthodes de paiement disponibles",
    LT_Common_Text_DontAskNextTime              : "Ne pas me redemander",

    LT_Common_Error_LoadData                    : "Erreur de chargement des données",

    LT_Settings_Text_WrongEnv                   : "Vous devez ajouter un nœud de calcul ou un équilibreur de charge à votre environnement pour que cette fonctionnalité agisse correctement. <a action='configure'>Cliquez ici pour paramétrer votre environnement</a>.",

    LT_Billing_Column_Name                      : "Nom",
    LT_Billing_Column_FixedCld                  : "Coudlets réservés",
    LT_Billing_Column_FlexibleCld               : "Cloudlets dynamiques",

    LT_Billing_Text_UnfundBonus                 : "Le solde complémentaire a été facturé.",
    LT_Billing_Text_UnfundBalance               : "Le solde principal a été facturé.",

    LT_Task_Name_52                                : "L’adresse IP va être détachée de %(name) dans %(env)",
    LT_Task_Name_53                                : "Arrêt des nœuds %(name) dans %(env)",
    LT_Task_Name_54                                : "Démarrage des nœuds %(name) dans %(env)",

    LT_Task_Name_55                                : "Ajout du projet %(project) à %(env)",
    LT_Task_Name_56                                : "Édition du projet %(project) dans %(env)",
    LT_Task_Name_57                                : "Suppression du projet %(project) à %(env)",

    LT_Task_Name_58                                : "Ajout du projet %(project) à %(env)",
    LT_Task_Name_59                                : "Suppression du projet %(project) à %(env)",
    LT_Task_Name_60                                : "Édition du projet %(oldproject) dans %(env)",

    LT_Task_Name_61                             : "Liaison du domaine %(extdomain) avec %(env)",

    LT_Task_Name_62                             : "Installation des certificats SSL dans %(env)",
    LT_Task_Name_63                             : "Suppression des certificats SSL de %(env)",

    LT_Task_Name_64                             : "Suppression du domaine %(extdomain) de %(env)",
    LT_Task_Name_65                             : "Echange des domaines entre %(env) et %(targetenv)",

    LT_Environments_Error_StatusIsSet           : "Le statut de l'environnement <b>%(env)</b> ne lui permet pas d'effectuer cette action.",

    LT_Error_SuspendedAccount                   : "Votre compte a été désactivé. Veuillez contacter l'assistance pour toute question relative à cette désactivation.",

    LT_ConfigManager_FileNotExists              : "Le chemin vers <b>%(path)</b> dans%(env) n'existe pas. La structure du répertoire sera mise à jour.",
    LT_ConfigManager_UpdateDirectory            : "Le chemin vers <b>%(path)</b> dans%(env) n'existe pas. Veuillez actualiser la structure du répertoire.",
    LT_Notify_ConnectionProblems                : "Le serveur n'a pas pu être atteint. Il peut s'agir d'une erreur provisoire ou le serveur peut être hors-service.\n Fermez cette fenêtre et actualisez votre navigateur",

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Release: 2.0.0
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    LT_Menu_Toolbar_AccountSettings             : "Paramètres",

    LT_AccountSettings_Title                    : "Paramètres du compte",

    LT_SSH_Keys_List_Empty_Text                 : "Vous n'avez pas encore ajouté de clés publiques.",

    LT_SSH_Keys_Editor_Field_Title              : "Titre",
    LT_SSH_Keys_Editor_Field_Fingerprint        : "Empreintes",
    LT_SSH_Keys_Editor_Field_PublicKey          : "Clé",
    LT_SSH_Keys_Editor_Button_Add               : "Ajouter clé",

    LT_SSH_Keys_Confirm_Delete                  : "Supprimer la clé %(title) ?",

    LT_SSH_Keys_Error_GetKeys                   : "Une erreur est survenue lors du chargement d'une clé SSH.",
    LT_SSH_Keys_Error_AddKey                    : "Une erreur est survenue lors de l'ajout d'une clé SSH.",
    LT_SSH_Keys_Error_RemoveKey                 : "Une erreur est survenue lors de la suppression d'une clé SSH.",

    LT_E_Platform_6001                          : "Cette clé publique SSH existe déjà. Veuillez en essayer un autre.",
    LT_E_Platform_6002                          : "Une clé publique SSH portant le titre %(title) existe déjà. Veuillez utiliser un autre titre pour votre clé.",

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Release: 2.1.0
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    LT_EnvWizard_Info_FutureEngine              : "A venir ! La prise en charge de ce langage de programmation sera ajoutée dans de futures mises à jour.",

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Release: 2.2.0
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    LT_Process_Label_ConfirmRelation            : "Confirmation de l’invitation...",

    LT_UserSettings_Item_Collaboration          : "Collaboration",
    LT_UserSettings_Item_UserManagement         : "Gérer le compte",
    LT_UserSettings_Item_SharedWithMe           : "Partagé avec moi",

    LT_UserMng_Button_Invite                    : "Inviter",
    LT_UserMng_Button_Edit                      : "Éditer",
    LT_UserMng_Button_Unlink                    : "Supprimer le lien",

    LT_UserMng_EnvsGrid_Title                   : "Environnements partagés",
    LT_UserMng_Column_Env                       : "Environnement",
    LT_UserMng_Column_Role                      : "Changer topologie / accès SSH",

    LT_UserMng_Label_AllEnvs                    : "tous les environnements",

    LT_UserMng_Editor_Title                     : "Inviter utilisateur",
    LT_UserMng_Editor_Title_Edit                : "Utilisateur lié",
    LT_UserMng_Editor_Field_DisplayName         : "Afficher nom",
    LT_UserMng_Editor_Field_Role                : "Autoriser l'utilisateur à créer de nouveaux environnements",

    LT_UserMng_Info_SendInvite                  : "L'invitation de l'utilisateur %(email) a été envoyée avec succès.",
    LT_UserMng_Confirm_UnlinkUser               : "Fin du partage de tous les environnements partagés avec l'utilisateur <b>%(name)</b>. Supprimer le lien avec l'utilisateur  ?",
    LT_UserMng_Confirm_UnshareEnv               : "Ne plus partager les environnements sélectionnés ?",
    LT_UserMng_Warning_UserLinked               : "L'utilisateur %(email) est déjà lié à votre compte.",
    LT_UserMng_Warning_InviteYourSelf           : "Vous ne pouvez pas vous inviter.",
    LT_UserMng_Error_GetUsers                   : "Une erreur est survenue lors du chargement de la liste des utilisateurs liés.",
    LT_UserMng_Error_GetUserEnvs                : "Une erreur est survenue lors du chargement de la liste des environnements des utilisateurs liés.",
    LT_UserMng_Error_UnlinkUser                 : "Une erreur est survenue lors de la suppression du lien avec un utilisateur.",
    LT_UserMng_Error_SendInvite                 : "Une erreur est survenue lors de l'envoi d'une invitation à l'utilisateur %(email).",
    LT_UserMng_Error_ChangeRole                 : "Une erreur est survenue lors du changement des droits pour l'utilisateur %(email).",
    LT_UserMng_Error_ChangeDisplayName          : "Une erreur est survenue lors du changement du nom de l'utilisateur %(email).",
    LT_UserMng_Error_SetPermission              : "Une erreur est survenue lors de la mise à jour de la liste des environnements partagés avec l'utilisateur %(email).",
    LT_UserMng_Error_RemovePermission           : "Une erreur est survenue lors de la suppression des environnements partagés pour l'utilisateur %(email).",

    LT_UserMng_HelpTip                          : "Veuillez lire cette [link]documentation[/link] pour en savoir plus sur la collaboration avec les autres comptes.",

    LT_UserRelations_Column_Email               : "E-mail",
    LT_UserRelations_Column_DisplayName         : "Afficher nom",
    LT_UserRelations_Column_Role                : "Autorisé à créer des environnements",

    LT_UserRelations_Button_Edit                : "Editer nom",
    LT_UserRelations_Button_Leave               : "Quitter",

    LT_UserRelations_Confirm_UnlinkUser         : "Souhaitez-vous mettre fin à la collaboration avec l'utilisateur  <b>%(name)</b> ?",
    LT_UserRelations_Error_UnlinkUser           : "Une erreur est survenue lors de l'arrêt de la collaboration avec l'utilisateur  <b>%(name)</b>.",
    LT_UserRelations_Error_ConfirmInvite        : "Une erreur est survenue lors de la confirmation de l'invitation.",

    LT_EnvOwnerSelector_Title                   : "Propriétaire de l'environnement",
    LT_EnvOwnerSelector_Field_Owner             : "Propriétaire",
    LT_EnvOwnerSelector_Label_Me                : "Moi",

    LT_EnvOwnerSelector_Button_Next             : "Suivant",

    LT_EnvOwnerSelector_Error_GetOwnerData      : "Une erreur est survenue lors du chargement des données propriétaire.",
    LT_EnvOwnerSelector_Error_OwnerMaxEnvsCount : "L'utilisateur a atteint le nombre maximum d'environnements définis par défaut dans Jelastic.",
    LT_EnvOwnerSelector_Error_InactiveOwner     : "Le statut actuel de l'utilisateur ne permet pas la création d'environnements.",
    LT_EnvOwnerSelector_Error_NotAdmin          : "Les restrictions de votre compte ne permettent pas la création d'un environnement par cet utilisateur.",
    LT_EnvOwnerSelector_Error_CreateOff         : "Les restrictions de votre compte ne vous permettent pas de créer un environnement.",
    LT_EnvOwnerSelector_Error_MaxEnvsCount      : "Vous avez atteint le nombre maximum d'environnements définis par défaut dans Jelastic.",

    LT_Process_Label_LoadingData                : "Chargement des données...",

    LT_Environments_Column_Owner                : "Propriétaire",
    LT_Environments_Column_Owner_Text_Me        : "moi",

    LT_E_Platform_901                           : "L'environnement <b>%(envname)</b> n'existe pas.",

    LT_Menu_NoRights                            : "Vous ne disposez pas des permissions nécessaires pour effectuer cette action.",

    LT_EnvSharing_Column_User                   : "E-mail",
    LT_EnvSharing_Column_Role                   : "Changer topologie / accès SSH",

    LT_EnvSharing_HelpTip                       : "Utilisez [settings]le panneau de configuration[/settings]pour gérer les collaborateurs. Veuillez lire cette [link-docs]documentation[/link-docs] pour en savoir plus sur la collaboration avec les autres comptes.",

    LT_EnvSharing_Warning_AlreadyShared         : "Cet environnement est déjà partagé avec ce compte.",
    LT_EnvSharing_Error_GetUsers                : "Une erreur est survenue lors du chargement des utilisateurs de l'environnement %(envName).",
    LT_EnvSharing_Info_InvitationSend           : "L'invitation a été envoyée avec succès à l'utilisateur %(email).",
    LT_EnvSharing_Confirm_UnshareEnv            : "Annuler le partage de l'environnement actuel pour les utilisateurs sélectionnés ?",
    LT_EnvSharing_Error_ChangeOwner             : "Vous ne pouvez pas définir les autorisations pour le propriétaire de cet environnement.",
    LT_EnvSharing_Error_SetPermission           : "Une erreur est survenue lors de la mise à jour des partages pour l'environnement %(envName).",

    LT_EnvWizard_Label_Owner                    : "Propriétaire",

    LT_EnvWizard_Warning_NoRights               : "Vous ne disposez pas des autorisations nécessaires pour éditer la topologie de cet environnement.",

    LT_DeployArchive_Label_DeployInfo           : "Après le déploiement, votre application sera disponible à",

    LT_EnvSettings_Item_Info                    : "Infos",

    LT_EnvInfo_Title                            : "Environnement: %(envName)",
    LT_EnvInfo_Field_Owner                      : "Propriétaire",
    LT_EnvInfo_Field_Creator                    : "Créateur",
    LT_EnvInfo_Field_CreateDate                 : "Date de création",

    LT_Error_LoadEnvInfo                        : "Une erreur est survenue lors du chargement des informations de l'environnement.",
    LT_Error_UserNoRights                       : "Vous n'avez pas les autorisations nécessaires pour permettre à l'environnement %(envName) d'effectuer cette action.",
    LT_Error_OwnerCreateOff                     : "Les restrictions de votre compte ne vous permettent pas de créer un environnement pour le compte %(userName).",
    LT_Error_EnvNotShared                       : "L'environnement <b>%(envName)</b> n'est plus partagé avec vous.",

    LT_EnvWizard_BalancerRequired               : "Équilibreur",
    LT_DeployArchive_Warning_VCSSingleContext   : "Le contexte racine est en cours d'utilisation par un projet SVN/GIT.",
    LT_DeployArchive_Warning_EnvNotRunning      : "L'environnement ne fonctionne pas.",
    LT_DeployArchive_Warning_EnvIsBusy          : "L'environnement est occupé par un autre processus.",

//    LT_EnvWizard_W_MaxvInstances_TrialRegistered: "Votre compte limite le nombre d'instances de serveurs d'application à %(count) par environnement. Veuillez <a action='refill' target='_blank'>recharger</a> votre solde pour supprimer cette limitation.",


    LT_Menu_Applications                        : "Marketplace",

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Release: 2.3.0
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    LT_Process_Label_ConfirmEnvTransfer         : "Transfert de l'environnement...",

    LT_EnvSettings_Item_ChangeOwner             : "Changer de propriétaire",

    LT_EnvTransfer_Title                        : "Transfert d'environnement : %(envName)",
    LT_EnvTransfer_Button_SendRequest           : "Envoyer requête",
    LT_EnvTransfer_Button_CancelRequest         : "Annuler la requête",

    LT_EnvTransfer_HelpTip                      : "Veuillez lire cette [link]documentation[/link] pour en savoir plus sur le transfert d'environnement.",
    LT_EnvTransfer_HelpTip_NotOwner             : "Une action de transfert ne peut être effectuée que par le propriétaire de l'environnement. Veuillez lire cette [link]documentation[/link] pour obtenir plus de détails.",

    LT_EnvTransfer_Text_RequestSent             : "Un e-mail de demande de transfert a été envoyé à l'utilisateur <b>%(email)</b> le %(date) pour lui demander d'approuver la prise de possession de cet environnement.",
    LT_EnvTransfer_Info_SendRequest             : "La demande de transfert pour l'utilisateur <b>%(email)</b> a été envoyée avec succès.",
    LT_EnvTransfer_Error_SendRequest            : "Une erreur est survenue lors de l'envoi d'une demande de transfert à l'utilisateur <b>%(email)</b>.",
    LT_EnvTransfer_Error_UserNotActive          : "Le transfert de l'environnement <b>%(envName)</b> n'est pas autorisé en raison du statut du compte <b>%(email)</b>.",
    LT_EnvTransfer_Error_QuotaLimitReached      : "Le transfert de l'environnement <b>%(envName)</b> n'est pas autorisé en raison des restrictions du compte <b>%(email)</b>.",
    LT_EnvTransfer_Error_OnlyBilling            : "L'environnement peut seulement être transféré au compte de facturation.",
    LT_EnvTransfer_Error_AlreadyTransferring    : "L'environnement <b>%(envName)</b> est en cours de transfert.",
    LT_EnvTransfer_Error_UserLimitReached       : "Le transfert d'environnement n'est pas autorisé en raison des restrictions de votre compte.",
    LT_EnvTransfer_Error_UserQuotaEnvsCount     : "Le transfert d'environnement n'est pas autorisé en raison des restrictions de votre compte: le nombre d'environnements a atteint son maximum.",
    LT_EnvTransfer_Error_UserQuotaNodeCount     : "Le transfert d'environnement n'est pas autorisé en raison des restrictions de votre compte: le nombre de conteneurs par environnement a atteint son maximum.",
    LT_EnvTransfer_Error_UserQuotaCloudlet      : "Le transfert d'environnement n'est pas autorisé en raison des restrictions de votre compte: le nombre de cloudlets par conteneur a atteint son maximum.",
    LT_EnvTransfer_Error_UserQuotaHA            : "Le transfert d'environnement n'est pas autorisé en raison des restrictions de votre compte: Restriction de l'utilisation de la haute disponibilité.",
    LT_EnvTransfer_Error_UserQuotaExtIp         : "Le transfert d'environnement n'est pas autorisé en raison des restrictions de votre compte: Restriction de l'utilisation d'IP externes.",
    //LT_EnvTransfer_Error_UserQuotaVds           : "Le transfert d'environnement n'est pas autorisé en raison des restrictions de votre compte: L'usage d'un VPS est restreint.",

    LT_EnvTransfer_Info_SuccessTransfer         : "L'environnement <b>%(envName)</b> a été transféré sur votre compte avec succès.",
    LT_EnvTransfer_Error_ConfirmRequest         : "Une erreur est survenue lors de la confirmation de demande de transfert d'environnement.",
    LT_EnvTransfer_Confirm_CancelRequest        : "Souhaitez-vous annuler la demande de transfert de l'environnement <b>%(envName)</b> à l'utilisateur  %(email) ?",
    LT_EnvTransfer_Info_CancelRequest           : "La demande de transfert de l'environnement <b>%(envName)</b> a été annulée avec succès.",
    LT_EnvTransfer_Error_CancelRequest          : "Une erreur est survenue lors de l'annulation de la demande de transfert de l'environnement <b>%(envName)</b> .",

    LT_Warning_UseUserEmail                     : "Vous ne pouvez pas indiquer votre adresse e-mail dans ce champ.",
    LT_Error_LoadData                           : "Une erreur est survenue lors du chargement des données",

    LT_Task_Name_69                             : "Demande de transfert de l'environnement <b>%(env)</b> à %(email)",
    LT_Task_Name_70                             : "L'environnement <b>%(env)</b> a été transféré à votre compte avec succès",

    LT_Info_EnvAdded                            : "L'environnement <b>%(env)</b> a été ajouté à votre compte.",

    LT_E_Platform_703                           : "L'utilisateur <b>%(email)</b> n'existe pas.",

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Release: 2.4.0
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    LT_Error_AddItem                            : "Une erreur est survenue lors de la création de l'élément %(name).",
    LT_Error_EditItem                           : "Une erreur est survenue lors de l'édition de l'élément %(name).",
    LT_Error_RemoveItem                         : "Une erreur est survenue lors de la suppression de l'élément %(name).",
    LT_Error_SaveItem                           : "Une erreur est survenue lors de la sauvegarde de l'élément %(name).",
    LT_Error_ItemNotExist                       : "L'élément <b>%(name) n'existe pas.",
    LT_Error_NodeNotExist                       : "Le nœud <b>%(node)</b> n'existe pas dans l'environnement.",

    LT_Warning_RecheckData                      : "Certaines données ne sont pas valides, veuillez vérifier vos saisies.",

    LT_Common_Confirm_DeleteItems               : "Supprimer les éléments sélectionnés ?",
    LT_Common_Confirm_SaveChanges               : "Enregistrer modifications ?",

    LT_Common_Text_MultipleField                : "La valeur doit être un multiple de %(value)",
    LT_Common_Text_From                         : "De",
    LT_Common_Text_To                           : "À",
    LT_Common_Text_Interval_Custom              : "personnaliser...",

    LT_Common_Button_Enable                     : "Activer",
    LT_Common_Button_Disable                    : "Désactiver",
    LT_Common_Button_UndoChanges                : "Annuler modifications",

    // LT_HelpTip_Common                           : "Veuillez lire cette [link]documentation[/link] pour obtenir plus de détails.",
    LT_HelpTip_Access_AdminOwner                : "Cette action ne peut être effectuée que par l'administrateur ou le propriétaire d'un environnement. Lire la [link]documentation[/link] pour obtenir plus de détails.",

    LT_EnvSettings_Item_Triggers                : "Contrôle",
    LT_EnvSettings_Item_Alerts                  : "Alertes de charge",
    LT_EnvSettings_Item_HScaling                : "Scalabilité horizontale auto",

    LT_EnvAlerts_HelpTip                        : "Les alertes sont envoyées au propriétaire de l'environnement et aux utilisateurs avec qui il est partagé. Lire la [link]documentation[/link] pour obtenir plus de détails.",

    LT_EnvAlerts_Column_Name                    : "Nom",
    LT_EnvAlerts_Column_Condition               : "Condition",

    LT_EnvAlerts_Field_Name                     : "Nom",
    LT_EnvAlerts_Field_Node                     : "Type de nœud ",
    LT_EnvAlerts_Field_Type                     : "Chaque fois que",
    LT_EnvAlerts_Field_TypeCondition            : "Egal à",
    LT_EnvAlerts_Field_TypeConditionUnits       : "%",
    LT_EnvAlerts_Field_Period                   : "Pendant au moins",
    LT_EnvAlerts_Field_PeriodUnits              : "minutes",

    LT_EnvAlerts_Text_Type_Cloudlets            : "Cloudlets (Mémoire, CPU)",
    LT_EnvAlerts_Text_Type_Memory               : "Mémoire",
    LT_EnvAlerts_Text_Type_CPU                  : "CPU",
    LT_EnvAlerts_Text_Type_Disk                 : "Espace disque",
    LT_EnvAlerts_Text_Type_INodes               : "nœuds d'index",

    LT_EnvAlerts_Editor_Title                   : "Ajouter alerte",
    LT_EnvAlerts_Editor_Title_Edit              : "Editer alerte",

    LT_EnvScaling_Label_CPU                     : "CPU",
    LT_EnvScaling_Label_Memory                  : "Mémoire",
    LT_EnvScaling_Label_RemoveNodes             : "Supprimer nœuds",
    LT_EnvScaling_Label_AddNodes                : "Ajouter nœuds",
    LT_EnvScaling_Label_UsageCPU                : "Utilisation CPU",
    LT_EnvScaling_Label_UsageMemory             : "Utilisation mémoire",
    LT_EnvScaling_Label_Duration                : "Durée",

    LT_EnvScaling_Field_Enabled                 : "Activé",
    LT_EnvScaling_Field_UpCondition             : "Dès que le chargement est supérieur à: %(value)",
    LT_EnvScaling_Field_DownCondition           : "Dès que le chargement est inférieur à: %(value)",

    LT_EnvScaling_Field_NodesBy                 : "nœuds par",
    LT_EnvScaling_Field_Count                   : "compte",
    LT_EnvScaling_Field_EmailNotification       : "Envoyer notification par e-mail",

    LT_EnvScaling_Error_AlreadyExist            : "L'auto scalabilité horizontale est déjà configurée pour l'environnement <b>%(envName)</b>. Veuillez actualiser les données pour voir les paramètres actuels.",

    LT_EnvTrHistory_Field_Type                  : "Type",
    LT_EnvTrHistory_Field_Period                : "Période",

    LT_EnvTrHistory_Text_Type_Alerts            : "Alertes de charge",
    LT_EnvTrHistory_Text_Type_Scaling           : "Scalabilité horizontale",

    LT_EnvTrHistory_Column_Date                 : "Date",
    LT_EnvTrHistory_Column_Action               : "Action",
    LT_EnvTrHistory_Column_Name                 : "Nom",
    LT_EnvTrHistory_Column_Condition            : "Condition",
    LT_EnvTrHistory_Column_Result               : "Résultat",

    LT_EnvTrHistory_Title_Details               : "Détails",

    LT_EnvTrHistory_Label_Success               : "Succès",
    LT_EnvTrHistory_Label_Failed                : "Échec",

    LT_EnvTrHistory_Label_AddNodes              : "Ajouter nœuds",
    LT_EnvTrHistory_Label_RemoveNodes           : "Supprimer nœuds",
    LT_EnvTrHistory_Label_Notification          : "Envoyer notification",

    LT_EnvTrHistory_Label_LoadingValue          : "Charger valeur",
    LT_EnvTrHistory_Label_Status                : "Statut",
    LT_EnvTrHistory_Label_NodeCount             : "Nombre de nœuds",
    LT_EnvTrHistory_Label_Error                 : "Erreur",

    LT_Statistics_Button_AutoScaling            : "Scalabilité horizontale automatique",

    LT_SolutionDlg_ConfirmTitle               : "Confirmer l'installation de %(name)",

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Release: 2.5.0
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    LT_Quotas_Text_MaxEnvNodesCount             : "Nombre maximal de nœuds par environnement.",
    //LT_Quotas_Text_MaxSameNodesCount            : "Nombre maximal de nœuds identiques par environnement.",



    LT_Environments_Confirm_RestartNode         : "Redémarrer le nœud %(sType) ayant l'identifiant %(sNodeId)?",
    LT_Environments_Confirm_RestartNodes        : "Redémarrer les nœuds %(sType) ?",

    LT_Environments_Confirm_ResetNodePassword    : "Réinitialiser le mot de passe du nœud %(sType) ayant l'identifiant %(sNodeId)?",
    LT_Environments_Confirm_ResetNodesPassword  : "Réinitialiser le mot de passe pour les nœuds %(sType) ?",

    LT_Menu_RestartNodes                        : "Redémarrer nœuds",

    LT_Task_Name_71                                : "Réinitialisation du mot de passe pour le nœud %(name) ID %(nodeid) de %(env)",
    LT_Task_Name_72                                : "Redémarrage du nœud %(name) ID %(nodeid) de %(env)",
    LT_Task_Name_73                                : "Ajout de %(count) nœuds %(name) à %(env)",

    LT_Environments_Label_Contexts              : "Contextes",
    LT_Environments_Label_Projects              : "Projets",
    LT_Environments_Label_NodeId                : "ID nœud :",

    LT_InstanceSelector_Node                    : "nœud ",

    LT_Menu_ChangeDisplayName                   : "Définir alias",

    LT_Common_Text_Domain                       : "Domaine",

    LT_Signin_Label_SignupRestrictedEmail        : "<b>Echec de l'inscription</b>. %L'adresse e-mail (restrictedEmail) n'est pas autorisée à s'inscrire. Veuillez utiliser une autre adresse e-mail ou nous contacter à <a action='contact' href=\"%(HOSTER_TRIAL_SUPPORT)\" target='_blank'>%(text)</a> pour obtenir de l'aide.",
    LT_Error_RestrictedEmail                    : "L'e-mail <b>%(restrictedEmail) n'est pas autorisé.",

    LT_UserRelations_Error_NoRelation           : "L'utilisateur %(email) a été dissocié de votre compte.",

    LT_UserMng_Info_InviteConfirmed             : "Félicitations ! Vous avez rejoint la collaboration avec succès.",

    LT_Menu_Toolbar_Api_Docs                    : "Docs API",

    LT_Signin_Label_Registration_Title            : "<div class='title'>Nous venons d'envoyer  votre mot de passe à %(email)</div>" +
        "<div class='note'>Allez sur votre boîte mail, copiez le à partir de l'e-mail de bienvenue et collez-le ci-dessous.</div>",

    LT_Signin_Label_Activation_Title            : "<div class='title'>Nous venons d'envoyer votre lien d'activation à %(email)</div>" +
        "<div class='note'>Cliquez dessus dans votre boîte mail pour compléter votre inscription.</div>",

    LT_Signin_Label_Registration                : "<div class='separator'></div><div class='steps-ct'>" +
        "Si vous <b>ne recevez pas l'e-mail de bienvenue d'ici quelques minutes, veuillez:"+
        "<ol class='steps'>" +
        "<li>Consulter vos dossiers Spams / Corbeille,</li>" +
        "<li>Vous assurer de la validité de l'adresse e-mail <b>%(email)</b>. En cas de faute de frappe, <a action=\"signup\">cliquez ici</a>pour vous réinscrire,</li>" +
        "<li>Utiliser la fonctionnalité <a action=\"reset-password\">de réinitialisation du mot de passe</a>,</li>" +
        "<li>Si vous ne pouvez toujours pas accéder à votre compte, contactez-nous à<a class=\"email\" href=\"%(HOSTER_TRIAL_SUPPORT)\">%(text)</a></li>" +
        "</ol></div>",

    LT_SolutionDlg_AddonSuccess                 : "%(name) a été installé avec succès.",

    LT_AppStoreCat_Blogs                         : "Blogs",
    LT_AppStoreCat_MicroBlogs                    : "Micro Blogs",
    LT_AppStoreCat_PortalsCMS                    : "Portails / SGC",
    LT_AppStoreCat_Forums                        : "Forums",
    LT_AppStoreCat_Galleries                     : "Galeries de photos",
    LT_AppStoreCat_Wikis                         : "Wikis",
    LT_AppStoreCat_SocialNetworking              : "Réseaux sociaux",
    LT_AppStoreCat_AdManagement                  : "Gestion publicitaire",
    LT_AppStoreCat_Mails                         : "E-mails",
    LT_AppStoreCat_Polls                         : "Sondages et enquêtes",
    LT_AppStoreCat_ProjectManagement             : "Gestion de projets",
    LT_AppStoreCat_ECommerce                     : "E-Commerce",
    LT_AppStoreCat_ERP                           : "ERP",
    LT_AppStoreCat_CustomerSupport               : "Service client",
    LT_AppStoreCat_Educational                   : "Education",
    LT_AppStoreCat_Music                         : "Musique",
    LT_AppStoreCat_Video                         : "Vidéo",
    LT_AppStoreCat_FileManagement                : "Gestion des fichiers",
    LT_AppStoreCat_Others                        : "Autres",

    LT_SolutionDlg_Prepare                      : "Préparation de l'environnement",
    LT_AppStore_Action_ResetPassword            : "Réinitialiser mot de passe",
    LT_AppStore_Action_Remove                   : "Supprimer",

    LT_AppStoreCat_Popular                       : "Populaire",
    LT_AppStoreCat_CloudTools                    : "Outils Cloud",
    LT_AppStoreCat_Accounting                    : "Comptabilité",
    LT_AppStoreCat_Analytics                     : "Analytique",
    LT_AppStoreCat_AppServer                     : "Serveur de l'application",
    LT_AppStoreCat_BinRepository                 : "Référentiel binaire",
    LT_AppStoreCat_BugTracking                   : "Suivi des bugs",
    LT_AppStoreCat_Bundles                       : "Paquets",
    LT_AppStoreCat_BusinessIntelligence          : "Informatique décisionnelle",
    LT_AppStoreCat_CodeReview                    : "Révision du code",
    LT_AppStoreCat_Collaboration                 : "Collaboration",
    LT_AppStoreCat_ContinuousIntegration         : "Intégration continue",
    LT_AppStoreCat_Crm                           : "CRM",
    LT_AppStoreCat_DevTools                      : "Outils développeur",
    LT_AppStoreCat_DocManagement                 : "Gestion des documents",
    LT_AppStoreCat_Ecm                           : "ECM",
    LT_AppStoreCat_MobileDev                     : "Développement mobile",
    LT_AppStoreCat_NewsAggregator                : "Agrégateur d'informations",
    LT_AppStoreCat_Planning                      : "Planning",
    LT_AppStoreCat_TranslationTools              : "Outils de traduction",
    LT_AppStoreCat_Vcs                           : "Contrôle de version",
    LT_AppStoreCat_Games                         : "Jeux",
    LT_AppStoreCat_RSS                           : "RSS",
    LT_AppStoreCat_DBTools                       : "DB Tools",
    LT_AppStoreCat_GuestBooks                    : "Livres d'or",
    LT_AppStoreCat_Calendars                     : "Calendriers",

    LT_Error_Label_UserNotActivated              : "L'adresse e-mail saisie n'est pas activée dans le système. Il est possible <a action=\"resend-activation\">d'envoyer à nouveau l'e-mail d'activation</a>.",

    LT_SignupDlg_Label_ResendInfo                : "Si vous n'avez pas reçu l'e-mail d'activation, nous pouvons en envoyer un autre à l'adresse em-ail liée à votre compte.",
    LT_SignupDlg_Label_Resend                    : "Renvoyer",
    LT_Process_Label_ResendingActivation         : "Envoi de l'e-mail d'activation...",
    LT_Notify_Label_ResendingActivation          : "Un nouveau lien d'activation a été envoyé à l'adresse e-mail saisie.",

    LT_Process_Label_Register                     : "Inscription d'un nouveau compte...",
    LT_Process_Label_Signout                     : "Déconnexion...",
    LT_Process_Label_GetProjects                 : "Chargement des environnements...",
    LT_Error_Label_UserExist                     : "L'adresse e-mail saisie est déjà enregistrée dans le système. Vous pouvez <a action=\"reset-password\">réinitialiser votre mot de passe</a>.",

    LT_EnvScaling_HelpTip                        : "Configurez les déclencheurs ci-dessous pour ajouter et supprimer automatiquement les nœuds web/d'application de votre environnement selon la consommation de ressources. Chaque nœud a les mêmes paramètres de cloudlets que les nœuds web ou d'application existants. Veuillez lire cette [link]documentation[/link] pour obtenir plus de détails.",
    LT_EnvScaling_Error_QuotaReached             : "Les restrictions de votre compte ne permettent pas de sauvegarder la configuration actuelle: le nombre de conteneurs par environnement dépasse le maximum.",
    LT_Error_WrongActivationKey                  : "La clé de validation n'est plus valide.",
    LT_EnvTransfer_Error_NotValidKey             : "La requête de transfert n'est plus valide.",

    LT_EnvScaling_Field_ScaleUpTo                : "Augmenter jusqu'à",
    LT_EnvScaling_Field_ScaleDownTo              : "Réduire jusqu'à",

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Release: 3.0.0
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    LT_SSH_Keys_Title                           : "Porte-clés SSH",
    LT_SSH_Key_Public                           : "Public",
    LT_SSH_Key_Private                          : "Privé",
    LT_SSH_Keys_Editor_Title_Public             : "Ajouter clé publique",
    LT_SSH_Keys_Editor_Title_Private            : "Ajouter clé privée",
    LT_SSH_Keys_Editor_Title_Preview            : "Clé SSH",
    LT_Use_Authentication                       : "Utiliser authentification",
    LT_Common_Access_Type                       : "Type d'accès",
    LT_Common_Select_Key                        : "Sélectionner clé",
    LT_Common_Type_Password                     : "Entrer mot de passe",
    LT_SSH_Public_Keys_List_Title               : "Clés SSH publiques",
    LT_SSH_Private_Keys_List_Title              : "Clés SSH privées",
    LT_SSH_Public_Keys_HelpTip                  : "Veuillez utiliser votre client SSH: [link-ssh-uri]ssh %(sshLogin)@%(sshDomain) -p %(sshPort)[/link-ssh-uri]<br/>Les paramètres SSH seront appliqués au compte. Consultez cette [link-docs]documentation[/link-docs] pour en savoir plus sur l'accès SSH à vos environnements.",
    LT_SSH_Private_Keys_HelpTip                 : "Clés SSH privées pour accès aux répertoires GIT. <br/> Consultez cette [link-docs]documentation[/link-docs] pour plus d'informations sur l'accès à distance à vos projets via SSH.",
    LT_SSH_General_HelpTip                      : "<b>Le protocole SSH (Secure Shell Handler)</b> permet d’établir la connexion sécurisée entre le client et le serveur.<br/>Pour fournir cette possibilité, Jelastic utilise l’infrastructure [link-overview]Passerelle SSH[/link-overview].<br/><br/>Vous pouvez ajouter vos clés S<b>publiques</b> et <b>privées</b> selon vos besoins:<br/><ul><li>Les clés privées sont nécessaires pour [link-git-ssh]vous connecter à votre compte GIT[/link-git-ssh] afin de pouvoir dupliquer et mettre à jour le projet hébergé à partir de votre référentiel distant.</li><li>Les clés publiques sont nécessaires pour établir la connexion SSH [link-docs]vers votre compte/un conteneur distinct[/link-docs] dans l'environnement. Remarque: la disponibilité d'utilisation des clés SSH publiques dépend des paramètres de votre hébergeur. Veuillez contacter [link-support]l'assistance[/link-support] pour plus d'informations.</li></ul>",
    LT_Common_Text_Path                         : "Chemin",
    LT_BuildNode_Warning_InvalidUrl             : "URL invalide",
    LT_SSH_Keys_Access                          : "Accès SSH",
    LT_SSH_Path_Example                         : "https://... git://... ftp://... exemple.com:repo...",
    LT_Task_Name_68                             : "Ajout de la clé SSH %(title)",

    LT_EnvWizard_Label_Docker                   : "Conteneur",
    LT_EnvWizard_Label_Topology_Docker          : "Conteneurs Docker",
    LT_EnvWizard_Label_Topology_Extra           : "Extra",
    LT_EnvWizard_Hint_Dockers                   : "",
    LT_EnvWizard_Button_SelectDocker            : "Sélectionner conteneur",

    LT_Task_Name_74                                : "Ajout du nœud  %(displayname) à %(env)",
    LT_Task_Name_76                                : "Définition du montant de cloudlets pour le nœud %(name) portant l'identifiant  %(nodeid) dans %(env)",

    LT_AppStore_Auth_Title                      : "Autorisation",

    LT_AppStore_Label_Custom                    : "personnalisé",

    LT_Confirm_RemoveApp                        : "Supprimer application ?",
    LT_AppStore_Error_RemoveApp                 : "Une erreur est survenue lors de la suppression de l'application",
    LT_AppStore_Error_AddApp                    : "Une erreur est survenue lors de l'ajout de l'application",

    LT_SolutionDlg_Label_Env                    : "Environnement",
    LT_SolutionDlg_Label_EnvNew                 : "nouveau",
    LT_SolutionDlg_Label_EnvExisting            : "existant",

    LT_DockerRegistry_EmptyText                 : "[registre/]namespace/image",

    LT_DockerRegistry_W_NotFound                : "Image saisie introuvable. Veuillez vérifier vos saisies et réessayer.",
    LT_DockerRegistry_E_NotFound                : "Une erreur est survenue lors du chargement des données image.",

    LT_Action_GetDockerTemplateTags             : "obtenir modèles de balises de conteneur Docker",
    LT_DockerSelector_Button_Select             : "Sélectionner",

    LT_DockerSelector_Title_Selected            : " (%(count)) sélectionnés",

    LT_Common_Button_Submit                     : "Envoyer",

    LT_E_Platform_4081                          : "Impossible d'afficher l'image sélectionnée. Veuillez contacter le support technique pour obtenir de l'aide.",
    LT_E_Platform_2348                          : "Une erreur est survenue lors de l'installation des packages de logiciels dans le conteneur.",

    LT_EnvWizard_Hint_VDS                       : "Un Serveur dédié virtuel réglé dynamiquement avec accès racine complet, qui est capable d'héberger et d'exécuter n'importe quel code. Vous pouvez établir une connexion SSH au serveur en utilisant une adresse IP publique ou une passerelle SSH",
    LT_Text_VdsInfo                             :
        "<p>Pour travailler avec le nœud Elastic VPS<b>en attachant une adresse IP externe</b>, vous devez suivre les étapes suivantes:<ol>"+
        "<li>Obtenir votre <b>identifiant</b>, <b>mot de passe</b> et votre adresse <b>IP publique</b> dans l'e-mail reçu</li>"+
        "<li><a target=_blank href='%(url)'>Etablir la connexion SSH</a> à votre serveur</li>" +
        "<li>Rentrer les informations d'identification demandées dans la console ouverte</li></ol><p>" +
        "<p>Pour travailler avec le nœud Elastic VPS <b> avec une IP interne</b>, il faut la connecter au SSH via la <a href=\"%(JelasticSSHGate)\">Passerelle SSH Helastic</a></p>",

    LT_Menu_Applications_Applications           : "Applications",

    LT_ExportEnv_Title                          : "Export",
    LT_ExportEnv_Export_Btn                     : "Export",
    LT_ExportEnv_List_Title                     : "Copies d'environnement exportées",
    LT_ExportEnv_List_Empty_Text                : "Vous n'avez pas encore exporté d'environnements",
    LT_ExportEnv_Dlg_Title                      : "Export d'environnements",
    LT_ExportEnv_Dlg_TopologySettings           : "Paramètres topologie",
    LT_ExportEnv_Dlg_PrivateData                : "Données privées",
    LT_ExportEnv_Dlg_ConfigurationFiles         : "Fichiers de configuration",
    LT_ExportEnv_Dlg_TopologySettings_Tip       : "Paramètres de la topologie de l'environnement et des nœuds, configurés dans l'assistant environnement",
    LT_ExportEnv_Dlg_PrivateData_Tip            : "Répertoires contenant les fichiers de vos applications déployées et les données stockées dans vos serveurs de banques de données",
    LT_ExportEnv_Dlg_ConfigurationFiles_Tip     : "Les fichiers de configuration, accessibles via le Gestionnaire de configuration sur le tableau de bord et les paramètres des projets GIT/SVN (ex liens de référentiels, informations d'identification, clés privées SSH liées",
    LT_ExportEnv_Dlg_Warning_CompleteImport     : "Compléter l'import de la copie de l'environnement exporté vers la plateforme cible avant de supprimer l'original",
    LT_ExportEnv_Dlg_Description                : "Vous allez exporter l'environnement  <b>%(envName)</b>",
    LT_ExportEnv_Dlg_Select                     : "Choisissez ce qui doit être exporté:",
    LT_ExportEnv_Settings_DetailsTips           : "Veuillez lire cette [link-docs]documentation[/link-docs] pour obtenir plus de détails sur l'exportation de vos environnements.<BR>" +
        "<b>Remarque</b>: toutes les archives des environnements exportés sont stockées dans votre espace disque, qui est facturé selon les tarifs de votre hébergeur.",
    LT_ExportEnv_Error_GetEnvs                  : "Une erreur est survenue lors de l'obtention de la liste des environnements exportés",
    LT_ExportEnv_Confirm_DeleteEnv              : "Supprimer l'archive exportée le %(date) pour %(envName)?",
    LT_ExportEnv_Error_DeleteEnv                : "Une erreur est survenue lors de la suppression de l'archive exportée pour %(envName)",
    LT_ExportEnv_LinkTip_DownloadManifest       : "Télécharger manifeste",
    LT_ExportEnv_Error_DownloadManifest         : "Une erreur est survenue lors du téléchargement du manifeste",
    LT_Process_Label_Exporting                  : "Export...",
    LT_Task_Name_75                             : "Export de l'env %(env)",
    LT_Task_Name_77                             : "Décompactage de %(source) vers %(env)",
    LT_Menu_ImportEnvironment                   : "Importation",
    LT_Environments_Status_9                    : "Export...",
    LT_Action_ExportEnv                         : "exporter environnement",
    LT_Notify_Label_EnvironmentExported            : "L'environnement %(envName) a été exporté.",
    LT_ExportEnv_ViewFiles_Btn                  : "Voir fichiers",

    LT_Import_InstallDlg_Text                   : "Vous allez importer l'environnement <b>%(envName)</b>, qui a été exporté depuis %(oldHost).<BR> Date de l'export : %(date)",
    LT_Import_InstallDlg_MoreInfo               : "Plus d'infos à <a target='_blank' href='%(href)'>%(href)</a>",
    LT_Import_SuccessDlg_Title                  : "Votre environnement '%(envName)' a été importé dans Jelastic avec succès",
    LT_Import_SuccessDlg_Note                   : "<b>Remarque</b>: pour être en mesure de fonctionner, l'environnement importé peut nécessiter une nouvelle configuration adaptée aux paramètres du nouvel hébergeur (comme une IP publique). <br/><br/><div class=\"more-info\">Plus d'informations : [link]%(href)[/link]</div>",
    LT_Build_Failed_Warning                     : "Une erreur est survenue lors du montage du projet. Assurez-vous que le type de projet soit correct.",
    LT_Menu_NewEnvironment                      : "Nouvel environnement",
    LT_SolutionWizard_Error_ManifestIsCorrupted : "Une erreur est survenue lors de l'importation de l'environnement. Assurez vous d'avoir choisi le bon fichier pour les données de l'environnement exporté.",

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Release: 3.1
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    LT_Auto_Resolve_Conflict                    : "Résoudre les conflits automatiquement",
    LT_Environments_Validation_InvalidLength    : "Le nom de domaine doit être supérieur à %(nLength) caractères.",

    LT_E_Platform_6000                          : "Clé SSH invalide. Vérifiez la clé et réessayez.",
    //LT_Notify_Label_VPSQuotaMismatch            : "La création d'un nœud Elastic VPS avec ces paramètres est impossible en raison des restrictions de votre compte. Veuillez contacter l'assistance à<a action='contact' href=\"%(HOSTER_SUPPORT)\" target='_blank'>%(HOSTER_NAME) portal</a>.",

    LT_AppStore_Add_Custom_Docker               : "Ajouter nouvelle image",
    LT_AppStore_Add_Custom_Docker_HelpTip       : "Si l'image requise fait partie du registre central, n'entrez pas le nom de registre ((ex <span class='highlighted'>jelastic/tomcat8</span>). Sinon, indiquez-le au début de l'identifiant de l'image. (eex <span class='highlighted'>server.com/images/image_name</span>).<br>La liste de toutes les balises d'images disponibles est obtenue automatiquement, ce qui vous permettra de sélectionner celle dont vous avez besoin lors d'une installation ultérieure.",

    LT_AppStore_SearchField_EmptyTx             : "Saisir nom application",
    LT_AppStore_SearchField_EmptyResults        : "Aucun résultat trouvé",
    LT_AppStore_Search_W_EmptyResults           : "Pas de résultats !<br>Veuillez réessayer avec d'autres termes de recherche",

    LT_EnvWizard_Config                         : "Configuration",

    LT_DockerSettings_Item_Links                : "Liens",
    LT_DockerSettings_Item_EnvVars              : "Variables",
    LT_DockerSettings_Item_Ports                : "Ports",

    LT_DockerSettings_Links_Column_Node         : "nœud ",
    LT_DockerSettings_Links_Column_Alias        : "Alias",
    LT_DockerSettings_Links_HelpTip             : "Consultez la [link]documentation[/link] pour en savoir plus sur la liaison des conteneurs Docker.",
    LT_DockerSettings_Links_Confirm_Remove      : "Supprimer les liens sélectionnés ?",
    LT_DockerSettings_Links_W_NoNodes           : "Il n'y a aucun nœud  à associer.<br>Veuillez ajouter plus de nœuds pour obtenir cette possibilité.",
    LT_DockerSettings_Links_W_PropertyExists    : "Un lien avec cet alias existe déjà !",

    LT_DockerSettings_EnvVars_Column_Name       : "Nom",
    LT_DockerSettings_EnvVars_Column_Value      : "Valeur",
    LT_DockerSettings_EnvVars_W_PropertyExists  : "Un élément portant ce nom existe déjà !",
    LT_DockerSettings_EnvVars_E_GetVars         : "Une erreur est survenue lors du chargement des variables de l'environnement.",
    LT_DockerSettings_EnvVars_HelpTip           : "Consultez la [link]documentation[/link] pour en savoir plus sur les variables d'environnement des conteneurs Docker.",
    LT_DockerSettings_EnvVars_Confirm_Remove    : "Supprimer les variables sélectionnées ?",

    LT_DockerSettings_RunArgs_E_GetArgs         : "Une erreur est survenue lors du chargement des arguments de lancement.",

    LT_DockersPanel_Item_QuickStart             : "Démarrage rapide",
    LT_DockersPanel_Item_Custom                 : "Personnalisé",

    LT_DockersPanel_Search_EmptyTx              : "Saisir le nom de l'image",
    LT_DockersPanel_Search_W_EmptyResults       : "Pas de résultats !<br>Veuillez réessayer avec d'autres termes de recherche",

    LT_SolutionDlg_Docker_Installing            : "Installation %(name)",

    LT_W_Only_AlphaNum                          : "Ce champ doit contenir uniquement des lettres et des chiffres.",
    LT_W_Only_AlphaNumDash                      : "Ce champ doit contenir uniquement des lettres, des chiffres et _.",

    LT_AppStoreCat_ClusteredDBs                 : "Cluster de bases de données",
    LT_AppStore_Action_Uninstall                : "Désinstaller",

    LT_Menu_RDP                                 : "Bureau à distance",
    LT_Menu_RDPResetPassword                    : "Réinitialiser mot de passe du bureau à distance",


    LT_EnvironmentWizard_Dialog_WinCloudletsChanged : "En raison de la modification du nombre de cloudlets, les nœuds Windows vont être redémarrés. Voulez-vous vraiment appliquer les modifications ?",

    LT_HelpTip_Env_Required                     : "Au moins un nœud (sauf conteneurs Docker) doit être ajouté à votre environnement pour que cette fonctionnalité agisse correctement. [link]Cliquez ici pour paramétrer votre environnement[/link].",
    LT_EnvScaling_Tip                           : "Consultez cette [link]documentation[/link]pour savoir comment configurer automatiquement la scalabilité horizontale pour tous les nœuds sauf nœuds de calcul ou nœud  équilibreur.",

    LT_EnvWizard_Licences                       : "Licences",

    LT_LicencesCost_Text_Description            : "Le coût d'utilisation des piles logicielles dépend des tarifs de votre hébergeur.<br>Si une pile est gratuite, vous ne paierez que les ressources utilisées et pas l'ajout des logiciels à votre environnement.",

    LT_Billing_Label_SoftwareCost               : "%(nodeName) Licence",

    //LT_Notify_Label_MaxEnvCount                 : "Vous avez atteint le nombre maximal d'environnements pour votre type de compte.",
    LT_NodeMission_Cp                           : "Serveurs de l'application",
    LT_NodeMission_Bl                           : "Equilibrage",
    LT_NodeMission_Sqldb                        : "Bases de données SQL",
    LT_NodeMission_Nosqldb                      : "Bases de données NoSQL",
    LT_NodeMission_Cache                        : "Cache",
    LT_NodeMission_Build                        : "Monter nœud ",
    LT_NodeMission_Docker                       : "Conteneurs Docker",
    LT_NodeMission_Vds                          : "VPS élastique",

    LT_W_NotAllowedChars                        : "Ce champ contient des caractères interdits [%(chars)].",

    LT_HelpTip_Env_CPRequired                   : "Vous devez ajouter un nœud de calcul à votre environnement pour que cette fonctionnalité agisse correctement. [link]Cliquez ici pour paramétrer votre environnement[/link].",
    LT_HelpTip_Docker_FeatureComingSoon         : "Cette fonctionnalité sera bientôt disponible pour les conteneurs Docker. Lire la [link]documentation[/link] pour obtenir plus de détails.",

    LT_EnvScaling_Tip_RestrictedNodes           : "Les limites de votre compte ne vous permettent pas d'ajouter plus d'un nœud  similaire (même type) dans un environnement; cette fonctionnalité nécessite au moins deux de ces nœuds pour être efficace. Veuillez [link-support]contacter l'assistance[/link-support] pour supprimer cette limitation.",

    LT_Text_RDPInfo                             : "<p>Suivez les étapes suivantes pour vous connecter au nœud en RDP:</p><ol>"+
        "<li>Consulter vos e-mails pour obtenir <b>l'adresse d'hébergement</b>du nœud  et vos informations<b>d'identification</b></li>"+
        "<li>Ouvrir le<b>client RDP</b> sur votre bureau:<br>" +
        "  <ol style=\"list-style: none; margin-left: 10px;\"><li>pour Linux: KRDC, Remina </li>" +
        "  <li>pour Windows: Bureau à distance</li>" +
        "  <li>pour Mac OS X: Microsoft Remote Desktop</li>" +
        "</ol></li>" +
        "<li> Etablir la connexion au serveur (%(rdpLink)) en utilisant les identifiants RDP reçus</li></ol>" +
        "<p>Pour plus de détails, consultez notre [link]documentation[/link]</p>",

    LT_CustomSSL_Text_ActiveState               : "Le SSL personnalisé est actuellement activé. <a action='disable'>Cliquez ici pour désactiver le SSL personnalisé</a>, ou modifiez les paramètres ci-dessous pour effectuer des changements.",
    LT_CustomSSL_Text_InactiveState             : "Le SSL personnalisé est actuellement désactivé. <a action='enable'>Cliquez ici pour activer le SSL personnalisé</a>, ou modifiez les paramètres ci-dessous pour effectuer des changements.",

    LT_Environments_Confirm_RestartContainer    : "Redémarrer le conteneur %(sType) ayant l'identifiant D %(sNodeId) ?",
    LT_Environments_Confirm_RestartContainers   : "Redémarrer les conteneurs %(sType) ?",

    LT_Menu_RestartContainer                    : "Redémarrer conteneur",
    LT_Menu_RestartContainers                   : "Redémarrer conteneurs",

    LT_EnvWizard_Button_EditDockerConfig         : "Éditer",

    LT_Text_WinDeployInfo                       :"<p> Vous pouvez déployer directement votre projet à partir de Visual Studio IDE en utilisant l`outil WebDeploy:</p><ol>" +
        "<li>Créer votre profil de publication</li>" +
        "<li>Indiquez les informations suivantes dans l’onglet Connexion :<ol>" +
        "  <li style=\"list-style: none; margin-left: 10px;\"> Méthode de publication: Web Deploy</li>"+
        "  <li style=\"list-style: none; margin-left: 10px;\">Service URL - %(deployLink)</li>" +
        "  <li style=\"list-style: none; margin-left: 10px;\">Site/application - Site web par défaut/{nom_de_votre_app}</li>" +
        "  <li style=\"list-style: none; margin-left: 10px;\">Identifiant - reçu par email</li>" +
        "  <li style=\"list-style: none; margin-left: 10px;\">Mot de passe - reçu par email</li></ol></li>" +
        "<li>Cliquez sur Publier  !</li></ol>" +
        "<p>Pour plus de détails, consultez notre [link]documentation[/link]</p>",

    LT_Menu_WinDeploy                           : "Infos de publication",

    LT_Windows_Confirm_DeployToRoot_Msg          : "Cette application sera installée dans \"Site internet par défaut\".<br> " +
        "La plupart des applications sont installées dans un dossier <br> situé sous la racine comme \"Site internet par défaut/blog\". <br>Confirmez-vous cet emplacement ?",
    LT_Windows_Confirm_RootUndeploy_Msg         : "Tous les projets déployés seront supprimés en cas de suppression du contexte ROOT. En êtes vous certain ?",

    LT_SSH_Keys_List_Private_Empty_Text         : "Vous n'avez pas encore ajouté de clés privées.",

    LT_Task_Name_35                                : "Réinitialisation du mot de passe pour le nœud %(name) ID %(nodeid) de %(env)",
    LT_Task_Name_79                             : "Réinitialisation du mot de passe pour %(name) de %(env)",

    LT_SolutionWizard_Error_FilesNotAvailable   : " Une erreur est survenue lors de l'importation de l'environnement. Assurez-vous que l'environnement d'origine ayant les sources de données nécessaires existe toujours et essayez d'importer la nouvelle copie exportée de cet environnement",

    LT_SolutionWizard_Error_EnvTypeNotAllowed   : "Une erreur est survenue lors du réglage de l'environnement avec les paramètres requis: soit les types de nœuds nécessaires ne sont pas pris en charge par la plateforme actuelle, soit votre type de compte restreint leur usage",

    LT_Process_Label_GettingSolution            : "Récupération des données...",

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Release: 3.3
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    LT_EnvWizard_Confirm_IgnoreChanges          : "Tous les changements effectués seront perdus, continuer ?",
    LT_EnvWizard_Action_Migrate                 : "Migration...",

    LT_QuotasPricing_Title                      : "Quotas et tarifs",
    LT_QuotasPricing_Item_Regions               : "Régions",
    LT_QuotasPricing_Item_Pricing               : "Prix",

    LT_EnvRegions_HelpTip                       : "Consultez la [link]documentation[/link] pour en savoir plus sur les environnements par régions.",

    LT_EnvRegionSelector_Item_Info              : "Détails supplémentaires...",
    // type "[link]More details...[/link]" in the string above if you'd like this drop-down list's item at the topology wizard being referring to the "DOCS_ENV_REGIONS" link instead of opening the Quotas & Pricing frame

    LT_EnvMigration_Title                       : "Migrer environnement : %(envName)",
    LT_EnvMigration_Field_CurrentRegion         : "Région actuelle",
    LT_EnvMigration_Field_TargetRegion          : "Région cible",
    LT_EnvMigration_Field_TargetRegion_EmptyText: "Sélectionner une région...",
    LT_EnvMigration_Button_Submit               : "Vérifier et migrer",

    LT_EnvMigration_Error_NoHardware            : "Aucun matériel n’est actuellement disponible dans la région <b>%(region)</b>. Veuillez essayer une autre région.",
    LT_EnvMigration_Error_NoFreeIps             : "Aucune adresse IP publique n’est disponible dans la région <b>%(region)</b> en ce moment. Veuillez essayer une autre région.",
    LT_EnvMigration_Error_Failed                : "Une erreur est survenue lors de la migration de l'environnement <b>%(envname)</b> vers la région <b>%(region)</b>.",
    LT_EnvMigration_Info_Success                : "L'environnement <b>%(envName)</b> a été migré avec succès vers la région %(region).",

    LT_EnvMigration_HelpTip                     : "Consultez la [link]documentation[/link] pour en savoir plus sur la migration d'environnements.",
    LT_EnvMigration_HelpTip_NoRegions           : "Aucune région n'est actuellement disponible pour la migration. Veuillez contacter l'assistance pour obtenir plus d'informations.",

    LT_Action_ValidateRegion                    : "valider la région %(region)",

    LT_EnvSettings_Item_Migration               : "Migration",

    LT_Environments_Status_10                   : "Migration en cours...",
    LT_Environments_Status_11                   : "Endommagé",

    LT_Task_Name_83                             : "Migration de l'environnement %(env) vers la région %(hngroupname)",

    LT_HelpTip_Access_Owner                     : "Cette action ne peut être effectuée que par le propriétaire d'un environnement. Lire la [link]documentation[/link] pour obtenir plus de détails.",

    LT_SolutionDlg_Label_EnvRegion              : "Région",
    LT_SolutionDlg_Label_Environment            : "Environnement",

    LT_Import_InstallDlg_ConfirmTitle           : "Confirmer l'importation de l'environnement %(envName)",
    LT_Import_InstallDlg_Button_Import          : "Importation",

    LT_Common_Text_Region                        : "Région",

    LT_Task_Name_2                                : "Création de l'environnement %(env)",
    // add the %(hngroupname) placeholder to the string above if you'd like to show the info about a region in the corresponding task

    LT_Notify_Label_HardwareOnMaintenance       : "Le matériel est actuellement en cours de maintenance.",
    LT_Notify_Label_RegionOnMaintenance         : "Le matériel de la région <b>%(region)</b> est actuellement en cours de maintenance. Veuillez essayer une autre région.",

    LT_Region_Tip_Maintenance                   : "Le matériel de la région est en cours de maintenance.",

    "LT_Region_DisplayName_default_hn_group"    : "Bern",
    "LT_Region_ShortDescription_default_hn_group": "Emplacement: Switzerland / Bern-1",
    "LT_Region_Description_default_hn_group"    : "<ul><li>Emplacement: Switzerland / Bern</li><li>Domaine: %(domain)</li><li>HW Vendor: TYAN</li></ul><p>Moteur d'application disponible:</p><ul data-type=\"check\"><li>Java, PHP, Ruby, .NET, Node.js, Python</li><ul data-type=\"check\"><li>Docker® Conteneurs</li></ul>",
    
    "LT_Region_DisplayName_vz7"     : "Bern DC",
    "LT_Region_ShortDescription_vz7": "Emplacement: Switzerland / Bern-2",
    "LT_Region_Description_vz7"     : "<ul><li>Emplacement: Switzerland / Bern</li><li>Domaine: %(domain)</li><li>HW Vendor: TYAN</li></ul><p>Moteur d'application disponible:</p><ul data-type=\"check\"><li>Java, PHP, Ruby, Node.js, Python</li><ul data-type=\"check\"><li>Native Docker® Conteneurs</li></ul>",
    
    //"LT_Region_DisplayName_vz7_2"     : "Bern DC",
    "LT_Region_ShortDescription_vz7_2": "Emplacement: Switzerland / Bern-2",
    "LT_Region_Description_vz7_2"     : "<ul><li>Emplacement: Switzerland / Bern</li><li>Domaine: %(domain)</li><li>HW Vendor: TYAN</li></ul>Serveurs à faibles performances dédiés aux utilisateurs Trial </li></ul>",


    LT_Settings_Label_Endpoints                      : "Points d'arrivée",
    LT_EnvEndpoints_Column_Name                 : "Nom",
    LT_EnvEndpoints_Column_Node                 : "nœud ",
    LT_EnvEndpoints_Column_PublicPort           : "Port public",
    LT_EnvEndpoints_Column_PrivatePort          : "Port privé",
    LT_EnvEndpoints_Column_Protocol             : "Protocole",
    LT_EnvEndpoints_Column_AccessUrl            : "URL d'accès",
    LT_EnvEndpoints_AddEndpoint_Error             : "Une erreur est survenue lors de l'ajout du point d'arrivée %(name)",
    LT_EnvEndpoints_RemoveEndpoint_Error         : "Une erreur est survenue lors de la suppression du point d'arrivée %(name)",
    LT_EnvEndpoints_GetEndpoints_Error             : "Une erreur est survenue lors de l'obtention de la liste des points d'arrivée",
    LT_EnvEndpoints_Confirm_RemoveEndpoint      : "Supprimer le point d'arrivée %(name) ?",
    LT_EnvEndpoints_EditEndpoint_Error          : "Une erreur est survenue lors de l'édition du point d'arrivée %(name)",
    LT_EnvEndpoints_PortValidationHint          : "Ce port est occupé",
    LT_EnvEndpoints_NameValidationHint          : "Ce nom est déjà pris",
    LT_EnvEndpoints_Editor_Title                : "Ajouter point d'arrivée",
    LT_EnvEndpoints_Editor_Title_Edit           : "Éditer point d'arrivée",
    LT_EnvEndpoints_NameNotValid                : "Nom invalide",
    LT_Task_Name_80                             : "Ajout du point d'arrivée %(endpoint)",
    LT_Task_Name_81                             : "Édition du point d'arrivée %(name)",
    LT_Task_Name_82                             : "Suppression point d'arrivée",
    LT_EnvEndpoints_NameEmptyText               : "Entrer ou sélectionner un nom...",
    LT_EnvEndpoints_PublicPortEmptyText         : "Réglage automatique",
    LT_EnvEndpoints_AccessUrlEmptyText          : "%(url):{public_port}",
    LT_EnvEndpoints_NameDisabledQtipText        : "Vous avez atteint le nombre maximal de ports mappés autorisés pour ce nœud ",


    LT_Statistics_Label_NetLimit                : "Limite externe",
    LT_Statistics_Label_DiskLimit               : "Limite espace disque",
    LT_Statistics_Label_DiskCommonLimit         : "Limite",
    LT_Statistics_Label_IopsLimit               : "Limite IOPS",
    LT_Statistics_Label_CpuLimit                : "Limite CPU",
    LT_Statistics_Label_RamLimit                : "Limite RAM",
    LT_Statistics_Label_Iops                    : "Utilisation IOPS",

    LT_ExportEnv_Error_EnvDeleted               : "Impossible d'afficher les fichiers - l'environnement a été supprimé",
    LT_Notify_Label_EnvExportRestricted         : "Vous ne pouvez pas exporter l'environnement <b>%(envName)</b>. Veuillez contacter l'assistance pour plus d'informations.",

    LT_EnvMigration_Confirm_Migration           : "Veuillez confirmer la migration de l'environnement <b>%(envname)</b> vers la région <b>%(region)</b>.",
    LT_EnvMigration_Field_OnlineMigration       : "Live migration",
    LT_EnvMigration_Mark_OnlineMigration        : "LM",
    LT_EnvMigration_Field_OnlineMigration_Tip   : "La migration en direct permet de déplacer vos projets sans redémarrer les conteneurs et permet d’éviter des temps d’arrêt pendant cette opération. [link]Plus d’informations...[/link]",
    LT_EnvMigration_Field_OnlineMigration_NA    : "Indisponible entre les régions sélectionnées",
    LT_EnvMigration_Warning_EnvDowntime         : "Les conteneurs vont être redémarrés et l'environnement ne sera pas disponible pendant la migration",
    LT_EnvMigration_Warning_IpChanged           : "Les adresses IP seront changées",

    LT_EnvMigration_Info_OnlineNotAvailable     : "Live migration indisponible entre les régions actuelles",
    LT_EnvMigration_Field_TargetRegion_Pricing  : "<a action=\"pricing\">Les prix</a> peuvent être différents dans la région cible",

    LT_Action_LoadDockerManifest                : "charger données image",
    LT_Use_ZDTModule                            : "Empêche[link-docs]tout temps d’arrêt pendant le déploiement[/link-docs]",
    LT_ExportEnv_Settings_ErrorDetailsTips      : "Cette fonctionnalité n’est pas encore disponible pour les conteneurs Windows et Docker. Consultez cette [link-docs]documentation[/link-docs] pour obtenir plus de détails sur l'exportation de vos environnements.",

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Release: 4.0
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    LT_BillingHistory_GroupByNode_Label         : "Trier par nœud ",
    LT_Statistics_ShortName_RAM                 : "RAM",
    LT_Statistics_ShortName_CPU                 : "CPU",
    LT_Statistics_ShortName_Network             : "Réseau",
    LT_Statistics_ShortName_HDD                 : "Disque",
    LT_Statistics_ShortName_IOPS                : "IOPS",
    LT_Statistics_ShortName_NetInInt            : "Entrée Interne",
    LT_Statistics_ShortName_NetOutInt           : "Sortie interne",
    LT_Statistics_ShortName_NetInExt            : "Entrée externe",
    LT_Statistics_ShortName_NetOutExt           : "Sortie externe",
    LT_Units_K                                  : "K",
    LT_Units_M                                  : "M",


    LT_NodeMission_Default                      : "Extra",

    //LT_EnvWizard_Balancer                       : "Equilibrage",
    LT_EnvWizard_ChangeDockerImg                : "Changer image",
    LT_EnvWizard_ChangeDockerTag                : "Changer balise",
    LT_EnvWizard_Confirm_DockerImgReplace       : "Veuillez confirmer le remplacement de l'image <b>%(current)</b>.",
    LT_EnvWizard_Info_UnusedExtra               : "Veuillez d’abord utiliser le bloc supplémentaire ajouté précédemment.",


    LT_EnvWizard_CustomSLL_EntryPoint           : "App. Serveur ou équilibreur",

    LT_DockerSelector_Title                     : "Sélectionner conteneur",
    LT_DockerSelector_Button_Next               : "Suivant",

    LT_DockerSettings_Item_More                 : "Plus",
    LT_DockerSettings_Item_Volumes              : "Volumes",
    LT_DockerSettings_Item_RunArgs              : "Exécuter configuration",
    LT_DockerSettings_Field_EntryPoint          : "Point d’entrée",
    LT_DockerSettings_Field_RunArgs             : "Exécuter commande",
    LT_DockerSettings_Field_EmptyText           : "(non défini par défaut)",
    LT_DockerSettings_Tip_ResetToDefault        : "Réinitialiser",
    LT_DockerSettings_Vols_HelpTip              : "Consultez la [link]documentation[/link] pour en savoir plus sur les volumes de conteneurs Docker.",
    LT_DockerSettings_Vols_W_Empty              : "Il n’y a pas de volumes liés prédéfinis. <br>Cliquez sur le bouton \Ajouter\ pour définir de nouveaux volumes.",
    LT_DockerSettings_RunArgs_HelpTip           : "Consultez la [link]documentation[/link] pour en savoir plus sur les options d’exécution des conteneurs Docker.",

    LT_DockerSettings_Vols_Column_Path          : "Chemin local",
    //LT_DockerSettings_Vols_Column_StoragePath   : "Chemin de destination",
    //LT_DockerSettings_Vols_EmptyPath            : "(à calculer)",
    LT_DockerSettings_Vols_W_PathExists         : "Un volume avec ce chemin d’accès existe déjà !",

    LT_DockersPanel_QuickStart_W_Empty          : "Aucun élément à afficher",
    LT_DockersPanel_Item_Search                 : "Rechercher",
    LT_DockersPanel_Search_Label_Hub            : "Hub Docker",
    LT_DockersPanel_Search_HelpTip              : "<p>Utilisez les tutos ci-dessous pour savoir comment gérer les conteneurs Docker dans Jelastic:</p> <ul><li>[link-manage]ajouter conteneur[/link-manage]à un environnement</li><li>configurer [link-config]paramètres[/link-config]de base</li><li>[link-ssh]accéder au conteneur[/link-ssh] via SSH</li><li>[link-redeploy]mettre à jour l’image déployée[/link-redeploy] avec une autre balise</li></ul>",
    LT_DockersPanel_Custom_HelpTip              : "Vous pouvez stocker ici vos images Docker personnalisées, soit dans un registre privé, soit dans un registre Hub pour qu’elles soient accessibles facilement. [link]Plus d’informations[/link]",
    LT_DockerSettings_Ports_HelpTip             : "Grâce à la technologie avancée de virtualisation conteneur exploitée par Jelastic, il n’est pas nécessaire d’exposer les ports sur les conteneurs Docker - le port nécessaire peut être lié directement à l’adresse IP interne ou externe de configuration de votre conteneur.<br><br>Vous pouvez mapper le port requis via  [link-endpoints]un point d’arrivée|/link-endpoints] (pour être accessible sur Shared LB) ou attacher[link-docs-pubip] une adresse IP externe[/link-docs-pubip] au conteneur concerné. Ensuite, selon la méthode choisie, liez votre service (app listener) à l’adresse interne ou externe reçue. <br><br>Consultez la [link-docs]documentation[/link-docs] pour en savoir plus sur la gestion des ports des conteneurs Docker.",

    LT_AppStore_Auth_Label_Name                 : "Identifiant",

    LT_AppStore_Field_Tag                       : "Balise",
    LT_AppStore_Label_More                      : "Détails supplémentaires",
    LT_AppStore_Text_CustomItemDesc             : "Registre: %(registry)",
    LT_AppStore_Text_CustomItemDefaultDesc      : "Registre Hub",

    LT_Menu_RedeployContainer                   : "Redéployer conteneur",
    LT_Menu_RedeployContainers                  : "Redéployer conteneurs",

    LT_Environments_Status_12                   : "Redéploiement...",

    LT_RedeployContainer_Title                  : "Redéployer les conteneurs %(nodeName)",
    LT_RedeployContainer_Column_Node            : "nœud ",
    LT_RedeployContainer_Column_Tag             : "Balise",
    LT_RedeployContainer_Field_DeployType       : "Déploiement séquentiel",
    LT_RedeployContainer_Field_DeployType_Tip   : "Si cette option est activée, les conteneurs seront redéployés un par un pour garantir la disponibilité du service. Dans le cas contraire, ils seront mis à jour simultanément, ce qui entrainera des interruptions de service temporaires.",
    LT_RedeployContainer_Button_Submit          : "Redéployer",

    LT_RedeployContainer_Confirm_Redeploy       : "Veuillez confirmer votre demande de transfert des conteneurs <b>%(nodeName)</b> vers la balise <b>%(tag)</b>.",
    LT_RedeployContainer_Info_Success           : "Les conteneurs de l’environnement  <b>%(envName)</b> ont été déployés avec succès vers la balise <b>%(tag)</b>.",
    LT_RedeployContainer_Error_Failed           : "Une erreur est survenue lors du déploiement des conteneurs de l’environnement <b>%(envName)</b>vers la balise <b>%(tag)</b>.",
    LT_RedeployContainer_Logs_Title             : "%(sAppName) : redéployer",

    LT_Task_Name_92                                : "Redémarrage des nœuds %(name) de %(env)",
    LT_Task_Name_93                                : "Réinitialisation du mot de passe pour %(name) dans %(env)",
    LT_Task_Name_94                             : "Redéploiement du nœud  %(name) ID %(nodeid) de %(env) vers la balise %(tag)",
    LT_Task_Name_95                             : "Redéploiement des conteneurs %(name) de %(env) vers la balise %(tag)",
    LT_Task_Name_96                                : "Liaison des nœud s %(targetnodename) ID %(targetnodeid) et %(sourcenodename) ID %(sourcenodeid) avec l’alias %(alias) dans %(env)",
    LT_Task_Name_97                                : "Suppression de la liaison des nœud s %(targetnodename) ID %(targetnodeid) et %(sourcenodename) ID %(sourcenodeid) avec l’alias %(alias) dans %(env)",
    LT_Task_Name_98                                : "Réglage des variables du nœud %(name) ID %(nodeid) dans %(env)",
    LT_Task_Name_99                                : "Réglage de la commande d’exécution du nœud %(name) ID %(nodeid) dans %(env)",
    LT_Task_Name_100                            : "Réglage du point d’entrée du nœud %(name) ID %(nodeid) dans %(env)",
    LT_Task_Name_101                            : "Réglage du nombre de cloudlets pour %(name) dans %(env)",

    LT_Common_Text_EmptyList                    : "Aucun élément à afficher",
    LT_Common_Button_ShowLogs                   : "Voir journal",

    LT_Error_AddVCSProject_InvalidPath          : "URL de projet invalide. Veuillez vérifier l'URL et réessayez",
    LT_AppStoreCat_ManagementAndMonitoring      : "Gestion et contrôle",

    LT_Common_Text_Reinstall                    : "Réinstaller",
    LT_Addon_Confirm_Reinstall                  : "Votre add-on sera réinstallé, continuer ?",
    LT_Addon_Env_Install_Not_Allowed            : "L'environnement sélectionné n'a aucun nœud compatible avec l'installation de l'add-on",
    LT_Addon_Disabled_Node_Qtip                 : "Ce nœud ne permet pas l'installation de l'add-on",
    LT_Addon_EnvNodes_Name_Field                : "nœuds",
    LT_Addon_Disabled_Env_Qtip                  : "Cet environnement ne permet pas l'installation de l'add-on",

    LT_ManifestImp_EmptyURL                     : "http://...",
    LT_ManifestImp_BtnImport                    : "Importation",
    LT_ManifestImp_DialogTitle                  : "Importation",
    LT_ManifestImp_SelectFile                   : "Sélectionner un fichier",
    LT_ManifestImp_TabURL                       : "URL",
    LT_ManifestImp_TabFile                      : "Fichier local",
    LT_ManifestImp_ManifestDesc                 : "Télécharger ici le fichier .json décrivant l’environnement cloud requis et les détails sur sa topologie, ses paramètres et sur l’application à déployer",
    LT_ManifestImp_MoreInfo                     : "Plus d'infos à <a target='_blank' href='%(href)'>%(href)</a>",

    LT_Process_Label_CheckAuthentication        : "Authentification...",
    LT_Process_Label_ConnectingToCloud          : "Connexion au cloud...",

    LT_AppStoreCat_Applications                 : "Apps",
    LT_AppStoreCat_Addons                       : "Add-ons",
    LT_AppStoreCat_Dockers                      : "Conteneurs",
    LT_AppStore_SearchField_AddonEmptyTx        : "Saisir le nom de l'add-on",


    LT_Task_Name_102                            : "Ajout du volume %(path) pour le nœud %(name) ID %(nodeid) dans %(env)",
    LT_Task_Name_103                            : "Suppression du volume %(path) pour le nœud  %(name) ID %(nodeid) dans %(env)",
    LT_DockerSettings_Vols_ConfirmDelete        : "Suppression du volume %(path) ?",
    LT_DockerSettings_Vols_LockedFiles_Title    : "%(name) : fichiers verrouillés",
    //LT_DockerSettings_Vols_W_PathRestricted     : "Il est interdit d’ajouter un volume avec ce chemin d’accès !",

    LT_Menu_Toolbar_CLI                            : "CLI Jelastic",

    LT_Log_NoSelected                           : "Veuillez sélectionner un élément dans le panneau de gauche pour voir le journal.",
    LT_EnvSettings_Item_History                 : "Historique des événements",
    LT_Log_Archive_CannotBeRead                 : "Impossible d'afficher le fichier archivé. Pour voir son contenu, entrez votre conteneur via SSH et téléchargez ce fichier.",

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Release: 4.1
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    LT_Notify_FileRenameNotPermitted            : "Cet élément ne peut être renommé",
    LT_Notify_ContainerIsNotRunning             : "La commande ne peut être exécutée. Le conteneur ne fonctionne pas",
    LT_Notify_FileDeleteNotPermitted            : "Cet élément ne peut être supprimé",

    LT_Notify_CommandCantBeExecuted             : "Cette opération n'a pas pu être effectuée. Un des répertoires systèmes a sûrement été supprimé ou renommé. Veuillez contacter le support technique pour obtenir de l'assistance.",

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Release: 4.5
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    LT_AppStoreCat_Favorites                    : "Favoris",
    LT_AppStoreCat_DevAdminTools                : "Outils Dév et Admin",
    LT_AppStoreCat_Clusters                     : "Clusters",
    LT_AppStoreCat_ContentManagement            : "Gestion du contenu",
    LT_AppStoreCat_SalesMarketing               : "Ventes et Marketing",
    LT_AppStoreCat_FileManager                  : "Gestion des fichiers",
    LT_AppStoreCat_Entertainment                : "Divertissement",
    LT_AppStoreCat_Other                        : "Autres",

    LT_DockersPanel_Item_Favorites              : "Favoris",
    LT_AppStore_Action_Add2Favorites            : "Ajouter aux favoris",
    LT_AppStore_Action_RemoveFavorites          : "Supprimer des favoris",

    LT_AppStore_Favorites_Text_EmptyList        : "Marquer les solutions les plus utilisées en favori pour y accéder facilement dans cet onglet.",

    LT_TutorSlider_Text_Welcome                 : "Bienvenue sur %(logo) PaaS",
    LT_TutorSlider_Text_PrAdvantages            : "Avantages tarifaires du Coud Public Jelastic",
    LT_TutorSlider_Text_OtherVendors            : "Autres vendeurs cloud",
    LT_TutorSlider_Label_Time                   : "Temps",
    LT_TutorSlider_Label_Resources              : "Ressources",
    LT_TutorSlider_Label_Server                 : "Votre serveur",
    LT_TutorSlider_Text_VS                      : "VS",

    LT_TutorSlider_Text_Containers              : "CONTENEURS",
    LT_TutorSlider_Text_LB                      : "Equilibreur de charge",
    LT_TutorSlider_Text_CP                      : "Serveur application",
    LT_TutorSlider_Text_DB                      : "Serveur base de données",
    LT_TutorSlider_Ballons_Reserved             : "Réservés",
    LT_TutorSlider_Ballons_Limited              : "Limite de scalabilité",
    LT_TutorSlider_Label_UpTo                   : "jusqu'à ",
    LT_TutorSlider_Label_Cloudlets                   : "cloudlet(s)",
    LT_TutorSlider_Month                           : "mois",
    LT_TutorSlider_Day                             : "jour",
    LT_TutorSlider_Hour                             : "heure",
    LT_TutorSlider_Descr_Other                       : "La limite de scalabilité est toujours payante dans les autres clouds",
    LT_TutorSlider_Title_Limit                  : "Limite",

    LT_TutorSlider_Title_Benefits                   : "Les avantages d'une plateforme DevOps",
    LT_TutorSlider_Title_SaveMoney                   : "Faire des économies avec le Smart Pricing",
    LT_TutorSlider_Label_Reserve                     : "Coudlets réservés",
    LT_TutorSlider_Label_ScaleLimit                 : "Limite de scalabilité",

    LT_TutorSlider_Feature_LANGS                    : "Plateforme multilingue avec prise en charge Docker",
    LT_TutorSlider_Feature_SCALING                    : "Scalabilité horizontale et verticale automatique",
    LT_TutorSlider_Feature_BALANCER                : "Haute disponibilité et équilibrage de charge",
    LT_TutorSlider_Feature_SSH                        : "Accès SSH et API ouvertes",
    LT_TutorSlider_Feature_COLLABORATION            : "Collaboration de plusieurs comptes avec différents niveaux d'accès",
    LT_TutorSlider_Feature_CLOUD                    : "Cloud hybride contenu dans plusieurs centres de données",
    LT_TutorSlider_Feature_CICD                    : "Intégration et mises à jour permanentes",
    LT_TutorSlider_Feature_MARKETPLACE                : "Store avec applications et add-ons",

    LT_Balloons_Wizard_Text                     : "Sélectionnez les piles requises et cliquez sur <b>Créer</b> environnement.",
    LT_Balloons_TasksPanel_Text                 : "L'environnement est en cours de création. Voir la progression dans le <b>Panneau des tâches</b>.",
    LT_Balloons_EnvCreated_Text                 : "<b>Félicitations !</b> Votre environnement est prêt ! Passons maintenant au déploiement d’une application. Cliquez sur <b>Déployer</b> et sélectionnez votre environnement dans la liste déroulante.",
    LT_Balloons_DeployDialog_Text               : "Cliquez sur <b>Déployer</b> pour lancer votre application.",
    LT_Balloons_Deploying_Text                  : "Le déploiement sera achevé dans quelques secondes.",

    LT_EnvWizard_Pricing_MaxLimit_Descr         : "Le coût maximal pour la période choisie (ex si tous les nœud s de l’environnement consomment toutes les ressources, allouées à chaque serveur via la Limite de scalabilité).",

    LT_EnvScaling_Label_Net                     : "Réseau",
    LT_EnvScaling_Label_DiskIO                  : "Disque I/O",
    LT_EnvScaling_Label_DiskIOPS                : "Disque I/OPS",
    LT_EnvAlerts_Label_Type_DiskIO              : "Disque I/O",
    LT_EnvAlerts_Label_Type_DiskIOPS            : "Disque I/OPS",
    LT_EnvAlerts_Text_Type_DiskIO               : "Disque I/O",
    LT_EnvAlerts_Text_Type_DiskIOPS             : "Disque I/OPS",
    LT_Statistics_Label_ExtNet                  : "Trafic externe",

    LT_EnvScaling_Field_UpCondition_Text        : "Dès que la charge est supérieure à",
    LT_EnvScaling_Field_DownCondition_Text      : "Dès que la charge est inférieure à",
    LT_Units_kBps                               : "Ko/s",
    LT_Units_Hz                                 : "Hz",
    LT_Statistics_Label_IoLimit                 : "Limite I/O",
    LT_Statistics_Label_Io                      : "I/O",

    LT_EnvScaling_Tip_DiskIOPS                  : "Le taux d’entrées/sorties du disque (en opérations par seconde)",
    LT_EnvScaling_Tip_DiskIO                    : "Le taux d’entrées/sorties du disque (en octets)",
    LT_EnvScaling_Tip_NetExt                    : "Usage du trafic réseau externe (entrant/sortant, en octets)",
    LT_EnvScaling_Tip_CPU                       : "Utilisation CPU (en Hz)",
    LT_EnvScaling_Tip_RAM                       : "Utilisation RAM (en octets",
    LT_EnvScaling_Label_Operations              : "Opérations",
    LT_EnvScaling_Label_Bytes                   : "Octets",

    LT_EnvAlerts_Field_Group                    : "nœuds",
    LT_EnvAlerts_Column_Node                    : "nœuds",
    LT_EnvTrHistory_Column_Node                 : "nœuds",

    LT_EnvAlerts_Label_Notification_Frequency   : "Fréquence des notifications",
    LT_EnvAlerts_Hours                          : "heure(s)",

    //LT_EnvWizard_Warning_UpgradeAccount         : "Vous avez atteint les valeurs maximales autorisées pour vos environnements. Veuillez nous contacter pour augmenter les plafonds.",
    LT_EnvWizard_Warning_HA_Off                 : "La fonction de haute disponibilité va être désactivée car son ajout nécessite un nœud  équilibreur de charge NGINX pour que l'environnement fonctionne correctement.",
    LT_EnvWizard_Warning_OwnerLimits            : "Le propriétaire a atteint les restrictions par défaut du compte.",
    LT_EnvWizard_Warning_Cloudlets              : "Le nombre recommandé de cloudlets minimums pour <b>%(node)</b> est de <b><i>%(count)</b></i>.",
    LT_EnvWizard_Warning_HA_Usage               : "Un nœud  équilibreur de charge NGINX doit être ajouté à votre environnement pour permettre le fonctionnement du clustering haute disponibilité.",
    LT_EnvWizard_Warning_FTP_Off                : "Vous avez besoin d'une IP Publique pour accéder au nœud via FTP.",
    //LT_EnvWizard_Warning_On_ExternalIP_Off      : "Le SSL personnalisé ne sera plus disponible.",
    //LT_EnvWizard_Warning_CreateOff              : "Les restrictions de votre compte ne vous permettent pas de créer plus d'environnements.[TEXT_INCREASE_LIMITS_SUPPORT/]",
    //LT_EnvWizard_Warning_MaxResources           : "Le solde de votre compte Jelastic est épuisé. Veuillez recharger votre compte pour créer un environnement.",
    //LT_EnvWizard_Warning_MinBalance             : "Votre compte Jelastic a actuellement un solde négatif. Veuillez recharger votre compte pour créer un environnement.", Contactez-nous si vous pensez qu'il s'agit d'une erreur.",
    //LT_EnvWizard_Warning_MaxEnvsCount           : "Vous avez atteint le nombre maximal d'environnements autorisés par défaut. Veuillez nous contacter pour modifier les limites de votre compte.",

    LT_EnvWizard_W_HA_SingleBalancer            : "Votre environnement doit contenir un nœud  équilibreur pour permettre le fonctionnement du clustering haute disponibilité.",
    LT_EnvWizard_W_NodeNotValid                 : "<b>%(node)</b> ne peut être créé. Veuillez nous contacter si le problème persiste.",
    LT_EnvWizard_W_TariffMinCld                 : "Selon votre plan tarifaire, la taille minimale de serveur est de %(count) cloudlet(s).",
    LT_EnvWizard_Warning_Demo_LockedCompute     : "Nous avons ajouté une instance de serveur d’application à votre environnement dans le but de cette démonstration.",
    //LT_Menu_CloneEnvironment_Disabled           : "Vous avez atteint le nombre maximal d'environnements autorisés. Veuillez nous contacter pour modifier les limites de votre compte.",
    //LT_EnvWizard_Warning_EditOff                : "La configuration d'environnement demandée dépasse les limites de votre compte. Veuillez nous contacter si vous souhaitez modifier les limites de votre compte.",
    LT_EnvWizard_Warning_CustomSSL_Off          : "Le SSL personnalisé ne sera plus disponible.",
    LT_EnvWizard_Hint_HA                        : "Le nombre maximal d'instances s'élève à %(nTotal) (%(nGroupsCount)x2HA).",

    //LT_EnvWizard_Warning_MaxResources_Trial     : "La configuration demandée excède les limites du compte d'essai. Veuillez mettre à niveau dès maintenant pour supprimer cette <a action='limits'>limitation</a>.",
    //LT_EnvWizard_Warning_MinBalance_Trial       : "Le solde de votre compte d'essai est épuisé. Veuillez mettre à niveau maintenant pour créditer le compte et continuer à utiliser Jelastic.",
    //LT_EnvWizard_Warning_MaxEnvsCount_Trial     : "Vous avez atteint le nombre maximal d'environnements autorisés pour un compte d'essai. Veuillez mettre à niveau dès maintenant pour supprimer cette <a action='limits'>limitation</a>.",
    //LT_EnvWizard_Warning_UpgradeAccount_Trial   : "La configuration demandée excède les limites du compte d'essai. Veuillez mettre à niveau dès maintenant pour supprimer cette <a action='limits'>limitation</a>.",
    //LT_EnvWizard_W_MaxCloudlets_Trial           : "La taille du serveur est limitée à %(counts) pour les comptes d'essai. Mettre à jour maintenant pour augmenter ce plafond.",
    //LT_EnvWizard_W_ExtIp_Trial                  : "Les adresses IP publiques ne sont pas disponibles pour les comptes d'essai. Mettre à niveau dès maintenant pour supprimer cette <a action='limits'>limitation</a>.",
    //LT_EnvWizard_W_HA_Trial                     : "Le clustering haute disponibilité n’est pas disponible pour les comptes d’essai. Mettre à niveau dès maintenant pour supprimer cette <a action='limits'>limitation</a>.",
    //LT_EnvWizard_W_Enabled_Trial                : "Les serveurs dédiés virtuels dynamiques ne sont disponibles que pour les comptes payants. Veuillez mettre à niveau dès maintenant pour supprimer cette <a action='limits'>limitation</a>.",
    //LT_EnvWizard_W_MaxEnvNodes_Trial            : "Les environnements d'essai sont limités à %(count) instances de serveur au total. "Mettre à niveau maintenant pour supprimer ce plafond.",
    //LT_EnvWizard_W_MaxSameNodes_Trial           : "Le nombre de nœuds dans une couche d’environnement est limité à %(count) pour les comptes d’essai. "Mettre à niveau maintenant pour supprimer ce plafond.",

    //LT_EnvWizard_W_MaxResources_TrialRegistered : "La configuration demandée excède les limites du compte d'essai. Veuillez recharger votre solde pour supprimer cette <a action='limits'>limitation</a>.",
    //LT_EnvWizard_W_MaxEnvsCount_TrialRegistered : "Vous avez atteint le nombre maximal d'environnements autorisés pour votre compte. Veuillez recharger votre solde pour supprimer cette <a action='limits'>limitation</a>.",
    //LT_EnvWizard_W_MaxCloudlets_TrialRegistered : "La taille du serveur est limitée à %(count) cloudlets. Veuillez recharger votre solde pour supprimer cette <a action='limits'>limitation</a>.",
    //LT_EnvWizard_W_Enabled_TrialRegistered      : "Les serveurs dédiés virtuels ne sont pas disponibles pour votre compte. Veuillez recharger votre solde pour supprimer cette <a action='limits'>limitation</a>.",
    //LT_EnvWizard_W_FillAcc_TrialRegistered      : "La configuration demandée excède les limites du compte d'essai. Veuillez recharger votre solde pour supprimer cette <a action='limits'>limitation</a>.",
    //LT_EnvWizard_W_HA_TrialRegistered           : "Le clustering haute disponibilité n’est pas disponible pour votre compte. Veuillez recharger votre solde pour supprimer cette <a action='limits'>limitation</a>.",
    //LT_EnvWizard_W_ExtIp_TrialRegistered        : "Les adresses IP publiques ne sont pas disponibles pour votre compte. Veuillez recharger votre solde pour supprimer cette <a action='limits'>limitation</a>.",
    //LT_EnvWizard_W_MinBalance_TrialRegistered   : "Le solde de votre compte est épuisé. Veuillez recharger votre solde pour continuer à utiliser Jelastic.",
    //LT_EnvWizard_W_MaxEnvNodes_TrialRegistered  : "Votre compte est limité à un total de %(count) instances de serveur par environnement. Veuillez recharger votre solde pour supprimer cette limitation.",
    //LT_EnvWizard_W_MaxSameNodes_TrialRegistered : "Le nombre de nœuds dans une couche d’environnement est limité à %(count) pour votre compte. Veuillez recharger votre solde pour supprimer cette limitation.",

    //LT_EnvWizard_Warning_Btn_ContactUs          : "Nous contacter",
    //LT_EnvWizard_Warning_Btn_Refill             : "Recharger",
    //LT_EnvWizard_Warning_Btn_Upgrade            : "Mettre à niveau",

    LT_EnvWizard_Status_FetchingTags            : "Récupération des balises",

    LT_E_Platform_4095                          : "Échec de l’autorisation lors de la récupération de l’image dans le registre des données  (image)</b>. Veuillez vérifier les données indiquées et réessayez.",

    LT_AppStore_Field_Tag_W_TagNotExist         : "La balise <b>%(tag)</b>  n'existe pas. Veuillez sélectionner une autre balise.",

    LT_Task_Name_108                            : "Démarrage de %(name) dans le conteneur ID %(nodeid) de %(env)",

    LT_W_DockerImagesNotFound                   : "Le référentiel %(repository) ne contient pas d'images. Veuillez vérifier vos saisies.",

    LT_EnvAlerts_Label_Type_Cloudlets           : "Cloudlets",
    LT_EnvAlerts_Label_Type_Memory              : "Mémoire",
    LT_EnvAlerts_Label_Type_CPU                 : "CPU",
    LT_EnvAlerts_Label_Type_Disk                : "Espace disque",
    LT_EnvAlerts_Label_Type_INodes              : "nœud s d'index",

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Release: 4.6
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    LT_Notify_Label_ItemExists                  : "L’élément <b>%(name)</b> existe déjà.",

    LT_EnvWizard_Pricing_Cloudlet               : "cloudlet",
    LT_EnvWizard_PriceSlider_Cloudlets_Total    : "Total",
    LT_EnvWizard_PriceSlider_Cloudlets_From     : "De",
    LT_EnvWizard_PriceSlider_Cloudlets_To       : "À",
    LT_EnvWizard_PriceSlider_ScalingLimit       : "Limite de scalabilité",
    LT_EnvWizard_PriceSlider_Discount           : "Réduction:",

    LT_EnvWizard_Period_Hour                    : "heure",
    LT_EnvWizard_Period_Month                   : "mois",
    LT_EnvWizard_Period_Day                     : "jour",

    LT_Billing_Column_Storage                   : "Stockage facturé",
    LT_Billing_Column_ExtTraffic                : "Trafic facturé",
    LT_SolutionWizard_Error_Cant_Download_File  : "Impossible de télécharger le fichier avec l'URL donnée. Vérifiez l'URL et réessayez.",

    LT_TutorSlider_Text_PayForUse               : "Payer pour l'utilisation",
    LT_TutorSlider_Text_UsePaid                 : "Payer pour les limites",

    LT_UserMng_Warning_UserInviteNotAllowed     : "Le compte <b>%(email)</b> ne peut pas être invité à collaborer",
    LT_EnvTransfer_Error_UserTransferNotAllowed : "Le transfert de l’environnement <b>%(envName)</b>  vers le compte <b>%(email)</b> n’est pas autorisé.",

    LT_TutorSlider_EstimatedCost                : "Coût estimé:",

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Release: 4.6.1
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    LT_EnvWizard_Pricing_TotalCost              : "total",

    LT_EnvWizard_Pricing_Cloudlet_Sum           : "1 {0} = {1} + {2}",
    LT_EnvWizard_Pricing_RAMTip                 : "RAM",
    LT_EnvWizard_Pricing_CPUTip                 : "CPU",
    LT_Quotas_Cloudlet_Sum                      : "1 {0} = {1} RAM + {2} CPU",

    LT_EnvWizard_PriceSlider_Dynamic            : "Limite de scalabilité:",
    LT_EnvWizard_PriceSlider_Reserved           : "Cloudlets réservés:",

    LT_EnvWizard_PriceSlider_EstimatedCost      : "Coût estimé",

    LT_EnvWizard_Label_MonthlyCost                : "par mois",
    LT_EnvWizard_Label_DailyCost                : "par jour",
    LT_EnvWizard_Label_Hourly                    : "par heure",

    LT_EnvWizard_Descr_Total                       : "Coût total à <span class=\"marked\">100%</span> de charge sur <span class=\"marked\">TOUS</span> les conteneurs",
    LT_EnvWizard_Descr_UsagePay                     : "Vous ne payez pas pour les ressources non utilisées",
    LT_EnvWizard_Descr_TotalReserved               : "Vous payez le prix fixe pour les ressources réservées",

    LT_EnvWizard_PriceBalloon_From              : "DE",
    LT_EnvWizard_PriceBalloon_To                : "À",
    LT_EnvWizard_PriceBalloon_Fixed             : "PRIX FIXE",

    LT_EnvWizard_Hint_ReservedCloudlets            : "<div class='dfn'>Cloudlets réservés</div>" +
        "<p>Réservez les cloudlets pour payer un prix fixe. Plus vous réservez, plus la réduction est importante !</p>%(illustration)",

    LT_EnvWizard_Hint_DynamicCloudlets            : "<div class='dfn'>Limite de scalabilité</div>" +
        "<p>Définit la quantité maximale de ressources pour la scalabilité verticale automatique basée sur les variations de trafic</p>%(illustration)",

    LT_EnvWizard_Scaling_VerticalPerNode        : "Scalabilité verticale par nœud ",
    LT_EnvWizard_Scaling_Horizontal             : "Scalabilité horizontale",
    LT_EnvWizard_HA                             : "Haute disponibilité",

    LT_EnvWizard_Price_Quotas                   : "Quotas et tarifs",

    LT_EnvWizard_Label_EnvName                  : "Environnement",
    LT_Marketplace_Label_EnvName                : "Environnement",

    LT_DetailsHint_Label_FreeRes                : "Ressources gratuites",
    LT_DetailsHint_Label_FreeResPrice           : "GRATUIT",
    LT_EnvWizard_Pricing_PricingDocs            : "Comment fonctionne la tarification",
    LT_EnvWizard_Pricing_DisabledClds           : "Désactivé",

    LT_EnvWizard_Hint_PricingDoc                : "Plus de détails sur les tarifs sont disponibles dans la documentation",

    LT_EnvWizard_PricingDetails_ReservedClds    : "Coudlets réservés",
    LT_EnvWizard_PricingDetails_ScalingLimit    : "Limite de scalabilité",
    LT_EnvWizard_PricingDetails_Clds            : "Cloudlets",

    LT_EnvWizard_PricingFixed_Resources         :  "{0} RAM + {1} CPU",

    LT_EnvWizard_PricingDetails_Price           : "Prix",
    LT_EnvWizard_PricingDetails_Save            : "Sauvegarder",
    LT_EnvWizard_PricingDetails_PayHourly       : "Payer toutes les heures",
    LT_EnvWizard_PricingDetails_PayDaily        : "Payer chaque jour",
    LT_EnvWizard_PricingDetails_PayMonthly      : "Payer chaque mois",
    LT_EnvWizard_PricingDetails_Discount        : "Réduction",
    LT_EnvWizard_PricingDetails_Total           : "Total",

    LT_EnvWizard_PricingDetails_RestRes         : "[link-storage]L’espace disque[/link-storage] et le [link-traffic]Trafic[/link-traffic] sont facturés selon la consommation.",
    LT_EnvWizard_Text_TrialPrices               : "*Gratuit pendant la période d'essai",
    LT_EnvWizard_Text_BetaPrices                : "*Gratuit pendant la période de bêta test",

    LT_EnvWizard_Link_PricingVideo              : "Comment suivre vos dépenses ?",

    LT_TutorSlider_Descr_Total                       : "Coût total à <span class=\"red\">100%</span> de charge sur <span class=\"red\">TOUS</span> les conteneurs",
    LT_TutorSlider_Label_From                         : "De",
    LT_TutorSlider_Label_To                         : "À",

    LT_TutorSlider_Cloudlet                           : "1 {0} = {1} + {2}",

    LT_EnvWizard_Hint_Pricing                   : "Cliquez pour obtenir plus d'informations sur les quotas et les tarifs",
    LT_EnvironmentWizard_Label_Databases        : "Bases de données",

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Release: 4.7
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    LT_Common_Button_ContactUs                  : "Nous contacter",
    LT_Common_Button_Refill                     : "Recharger",
    LT_Common_Button_Upgrade                    : "Mettre à niveau",
    LT_Common_Button_LearnMore                  : "En savoir plus",
    LT_Common_Button_EnvSettings                : "Paramètres de l’environnement",
    LT_Common_Button_IncreaseLimits             : "Augmenter plafonds",
    LT_SolutionDlg_Docker_PleaseWait            : "Le conteneur Docker est en cours d'installation.<br>Merci de patienter...",

    TEXT_CONTACT_SUPPORT                        : "[ACTION_HOSTER_SUPPORT]Contactez-nous[/ACTION_HOSTER_SUPPORT] si vous avez besoin d’aide.",

    // system detects the required increase limit method and returns one of the placeholders [TEXT_INCREASE_LIMITS_SUPPORT, TEXT_INCREASE_LIMITS_UPGRADE, TEXT_INCREASE_LIMITS_REFILL]
    //TEXT_INCREASE_LIMITS                      : "",

    TEXT_INCREASE_LIMITS_SUPPORT                : "[ACTION_HOSTER_SUPPORT]Contactez-nous[/ACTION_HOSTER_SUPPORT] pour augmenter les [ACTION_ACCOUNT_LIMITS]plafonds[/ACTION_ACCOUNT_LIMITS].",
    TEXT_INCREASE_LIMITS_UPGRADE                : "[ACTION_UPGRADE_ACCOUNT]Mettre à niveau maintenant[/ACTION_UPGRADE_ACCOUNT] pour augmenter les [ACTION_ACCOUNT_LIMITS]plafonds[/ACTION_ACCOUNT_LIMITS].",
    TEXT_INCREASE_LIMITS_REFILL                 : "[ACTION_REFILL_ACCOUNT]Recharger votre compte[/ACTION_REFILL_ACCOUNT]pour augmenter les [ACTION_ACCOUNT_LIMITS]plafonds[/ACTION_ACCOUNT_LIMITS].",

    LT_EnvWizard_Warning_CreateOff              : "Les restrictions de votre compte ne vous permettent pas de créer plus d'environnements.[TEXT_INCREASE_LIMITS_SUPPORT/]",
    LT_Notify_Label_VPSQuotaMismatch            : "Les restrictions de votre compte ne vous permettent pas de créer un nœud Elastic VPS avec ces paramètres. [TEXT_INCREASE_LIMITS_SUPPORT/]",

    // ENVIRONMENT_QUOTA_LIMIT_REACHED
    LT_E_Platform_2338                          : "La configuration demandée dépasse les limites de votre compte.[TEXT_INCREASE_LIMITS/]",

    // ENVIRONMENT_MAX_ENVS_REACHED
    LT_E_Platform_2360                          : "Le nombre d’environnements est limité à <b>(%(USER_QUOTA_ENV_COUNT))</b> par compte.<br> [TEXT_INCREASE_LIMITS/]",

    // ENVIRONMENT_OVER_CHUNKS
    LT_E_Platform_2361                          : "La taille du serveur est limitée à <b>%(USER_QUOTA_ENV_CLOUDLETS)</b> cloudlets. [TEXT_INCREASE_LIMITS/]",

    // ENVIRONMENT_HA_NOT_ALLOWED
    LT_E_Platform_2362                          : "Le clustering haute disponibilité n’est pas disponible pour votre compte. [TEXT_INCREASE_LIMITS/]",

    // ENVIRONMENT_EXT_IP_NOT_ALLOWED
    LT_E_Platform_2363                          : "Les adresses IP externes ne sont pas disponibles pour votre compte. [TEXT_INCREASE_LIMITS/]",

    //ENVIRONMENT_VDS_NOT_ALLOWED
    LT_E_Platform_2364                          : "Le VPS Elastic (serveur dédié virtuel) n'est pas disponible pour votre compte. [TEXT_INCREASE_LIMITS/]",

    //ENVIRONMENT_MAX_NODES_REACHED
    LT_E_Platform_2365                          : "Votre compte limite à <b>%(USER_QUOTA_ENV_NODES)</b> le nombre d’instances de serveurs par environnement.  [TEXT_INCREASE_LIMITS/]",

    // ENVIRONMENT_MAX_SAME_NODES_REACHED
    LT_E_Platform_2366                          : "Votre compte limite à <b>%(USER_QUOTA_ENV_NODEGROUP_NODES)</b> le nombre de nœuds par couche d’environnement.  [TEXT_INCREASE_LIMITS/]",

    // ENVIRONMENT_EXPORT_IMPORT_NOT_ALLOWED
    LT_E_Platform_2369                          : "Votre compte ne permet pas l’export d’environnements. _INCREASE_LIMITS/]",

    // ENVIRONMENT_NODE_TYPE_NOT_ALLOWED, ENVIRONMENT_TYPE_NOT_SUPPORTED
    LT_E_Platform_2372                          : "Le type de nœud requis n’est pas pris en charge par la plateforme actuelle ou n’est pas disponible pour votre compte. [TEXT_CONTACT_SUPPORT/]",

    // ENVIRONMENT_MIGRATION_NOT_ALLOWED
    LT_E_Platform_2373                          : "Votre compte n’offre pas l’option de migration d’environnement.[TEXT_INCREASE_LIMITS/]",

    // ENVIRONMENT_ENDPOINT_NOT_ALLOWED
    LT_E_Platform_2378                          : "Votre compte ne permet pas d’ajouter des points d’arrivée aux nœuds. [TEXT_INCREASE_LIMITS/]",

    LT_EnvProgress_Create_Title_Success         : "L'environnement <b>%(name)</b> a été créé avec succès. Des informations détaillées vous ont été envoyées par e-mail.",
    LT_EnvProgress_Create_Title_Failed          : "Echec de la création de l'environnement  <b>%(name)</b>.",
    LT_EnvProgress_Create_SuccessText           : "<b>Et ensuite ?</b>" +
    "<ul>" +
    "   <li>[URL_DOCS_DEPLOYMENT_GUIDE]Guide de déploiement[/URL_DOCS_DEPLOYMENT_GUIDE]</li>" +
    "   <li>[URL_DOCS_APP_CONFIGURATION] Configuration de l’application[/URL_DOCS_APP_CONFIGURATION]</li>" +
    "   <li>[URL_DOCS_ENV_ALERTS]Contrôle de l’application [/URL_DOCS_ENV_ALERTS]</li>" +
    "   <li>[URL_DOCS_AUTO_HORIZONTAL_SCALING]Scalabilité horizontale automatique[/URL_DOCS_AUTO_HORIZONTAL_SCALING]</li>" +
    "</ul>",

    LT_EnvProgress_Create_SuccessText_Docker    : "<b>Et ensuite ?</b>" +
    "<ul>" +
    "   <li>[URL_DOCS_DOCKER_CONFIG] Configuration du conteneur Docker[/URL_DOCS_DOCKER_CONFIG]</li>" +
    "   <li>[URL_DOCS_DOCKER_SSH_ACCESS]Accès SSH conteneur Docker[/URL_DOCS_DOCKER_SSH_ACCESS]</li>" +
    "   <li>[URL_DOCS_DOCKER_REDEPLOY]Redéployer conteneur Docker[/URL_DOCS_DOCKER_REDEPLOY]</li>" +
    "   <li>[URL_DOCS_ENV_ENDPOINTS]Points d’arrivée[/URL_DOCS_ENV_ENDPOINTS]</li>" +
    "   <li>[URL_DOCS_AUTO_HORIZONTAL_SCALING]Scalabilité horizontale automatique[/URL_DOCS_AUTO_HORIZONTAL_SCALING]</li>" +
    "</ul>",

    LT_EnvProgress_Edit_Title_Success           :  "La configuration de l'environnement <b>%(name)</b> a été modifié avec succès.",
    LT_EnvProgress_Edit_Title_Failed            : "La reconfiguration de l'environnement  <b>%(name)</b> a échoué.",

    LT_Notify_Label_RegionNoFreeHardware        : "Aucun matériel n’est actuellement disponible dans la région <b>%(region)</b>. Veuillez sélectionner une autre région ou réessayer dans quelques heures.",

    LT_EnvWizard_Confirm_CloseAndIgnoreChanges  : "Le dialogue concernant la topologie de l’environnement <b>%(envName)</b> sera fermé et tous les changements seront ignorés, continuer ?",

    LT_EnvironmentWizard_Label_TotalHourly        : "Coût total par heure",
    LT_EnvironmentWizard_Label_TotalMonthly        : "Coût total par mois",
    LT_EnvironmentWizard_Label_TotalDaily        : "Coût total par jour",

    LT_Quotas_Text_Network_Limit                : "Bande passante du réseau externe",
    LT_Units_Mbps                               : "Mops",

    LT_Task_Name_111                            : "Ajout de la clé SSH privée %(title)",
    LT_Task_Name_112                            : "Ajout de la clé SSH publique %(title)",

    LT_EnvWizard_PricingDetails_Count           : "Compte",
    LT_EnvWizard_PricingDetails_Containers      : "Conteneurs",

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Shared Storage
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    LT_Task_Name_84                                : "Montage du répertoire %(path) vers le nœud  %(name) ID %(nodeId) de l’environnement %(env)",
    LT_Task_Name_85                                : "Démontage du répertoire %(path) vers le nœud  %(name) ID %(nodeId) de l’environnement %(env)",
    LT_Task_Name_86                                : "Montage du répertoire %(path) vers le conteneur %(name) de %(env)",
    LT_Task_Name_87                                : "Démontage du répertoire %(path) vers le conteneur %(name) de %(env)",
    LT_Task_Name_88                                : "Configuration des volumes pour le conteneur %(name) de %(env)",
    LT_Task_Name_89                                : "Ajout du nœud %(name) à l’environnement %(env)",
    LT_Task_Name_90                                : "Démontage du répertoire %(name) %(path) dans l’environnement %(env) depuis le répertoire %(clientPath) du nœud ID %(clientNodeId)",
    LT_Task_Name_91                                : "Configuration des points de montage pour le nœud %(name) ID %(nodeId) de %(env)",
    LT_Task_Name_113                            : "Ajout du volume %(path) au nœud %(name) dans %(env)",
    LT_Task_Name_114                            : "Suppression du volume %(path) du nœud %(name) dans %(env)",

    LT_E_Platform_2030                          : "Le chemin %(path) est déjà monté.",
    LT_E_Platform_FOLDER_MOUNT_FAILED           : "Échec de la création du point de montage à %(path). Veuillez vérifier la disponibilité du serveur concerné, la conformité des permissions et les paramètres du firewall.",
    LT_E_Platform_NFS_SERVER_NOT_SUPPORTED      : "Le conteneur <b>%(node)</b> choisi n’offre pas la possibilité d’être traité comme un serveur NFS pour le stockage des données. Essayez plutôt le modèle Jelastic Storage par défaut.",
    LT_E_Platform_FILE_MANAGER_PERMISSION_DENIDED : "Accès refusé ! Veuillez revérifier les permissions pour le répertoire concerné.",
    LT_E_Platform_FILE_EXPORT_OF_MOUNTED_DIRECTORY : "Il est interdit d’exporter le répertoire  <b>%(path)</b> déjà monté.",
    LT_E_Platform_FILE_MOUNT_OF_EXPORTED_DIRECTORY : "Il est interdit d’ajouter un point de montage au répertoire exporté.",
    LT_E_Platform_NFS_SERVER_INCORRECT_CONFIG_FILE : "Le fichier de configuration du serveur NFS <b>%(path)</b> n’est pas valide. Veuillez vérifier à nouveau la configuration.",

    LT_W_MaxFileNameLength                      : "La longeur maximale des noms de fichiers/dossiers est de %(length)",

    LT_Action_MountDirectory                    : "monter répertoire",
    LT_Action_UnmountDirectory                  : "démonter répertoire",

    LT_Units_Bytes                              : "O",
    LT_Units_Tb                                 : "TO",

    // FILE_CROSS_MOUNT_IS_FORBIDDEN
    LT_E_Platform_2032                          : "Les montages transverses sont interdits !",

    LT_Warning_RestrictedPathNames              : "Le nom de chemin d'accès ne peut pas être [%(names)]",
    LT_Warning_RestrictedPaths                  : "Le chemin ne peut pas commencer par  [%(startsWith)]  et être égal à [%(equals)]",
    LT_Warning_RestrictedPath                   : "L'utilisation de ce chemin d'accès n'est pas autorisée",
    LT_Common_Confirm_ReloadNotSaved            : "Le contenu n'a pas été sauvegardé, recharger ?",
    LT_Process_Label_CheckingDependencies       : "Vérification des dépendances...",

    LT_Environments_Confirm_StartEnv            : "Démarrage de l'environnement %(sName)",
    LT_Environments_Confirm_StopEnv             : "Arrêt de l'environnement %(sName)",

    LT_EnvDependencies_Title_Details            : "Détails",
    LT_EnvDependencies_Title                    : "dépendances de %(env)",
    LT_EnvDependencies_Text_EnvDepend           : "Les neuds de l'environnement dépendent des éléments suivants:",
    LT_EnvDependencies_Text_CmpDepend           : "Les éléments suivant dépendent actuellement des nœuds de l'environnement:",
    LT_EnvDependencies_Column_Component         : "Elément",
    LT_EnvDependencies_Column_EnvNode           : "nœud",
    LT_EnvDependencies_Column_Server            : "Serveur",
    LT_EnvDependencies_EmptyText                : "Aucune dépendance identifiée",

    LT_Confirm_IgnoreDependenciesCheck          : "Impossible de vérifier les dépendances de l'environnement. Continuer quand même ?",
    LT_Common_Text_AffectDependentCmp           : "Les paramètres appliqués pourraient affecter le fonctionnement correct des composants, qui dépendent des nœuds de l’environnement actuel.",
    LT_Common_Text_EnvDependOn                  : "Les nœuds de l’environnement actuel dépendent de certains composants externes et pourraient ne pas fonctionner correctement s’ils ne sont pas en cours d’exécution.",

    // uses like 'action' placeholder in LT_Common_Text_AffectDependentCmp
    LT_Confirm_ApplyChanges                     : "Appliquer les modifications ?",

    LT_EnvMigration_Warning_HasDependencies     : "Le processus de migration pourrait affecter [ACTION_SHOW_DEPENDENCIES]la disponibilité des composants[/ACTION_SHOW_DEPENDENCIES] qui dépendent des nœuds de l’environnement actuel.",

    LT_EnvClone_Field_KeepMounts                : "Conserver les montages externes",
    LT_EnvClone_Field_KeepMounts_Tip            : "Si cette option est activée, tous les points de montage vers des serveurs dans d’autres environnements seront conservés dans les conteneurs dupliqués.",

    LT_RedeployContainer_Field_KeepVols         : "Conserver les données des volumes",
    LT_RedeployContainer_Field_KeepVols_Tip     : "Si cette option est activée, toutes les données contenues dans des volumes de conteneurs seront sauvegardées et resteront disponibles après le redéploiement.",
    //TODO: нужно адаптировать в связи с добавлением новой опции "Keep volumes data"
    LT_RedeployContainer_HelpTip                : "Vous pouvez ici mettre à jour le(s) conteneur(s) Docker choisi(s)  vers un autre modèle de balise sans perdre vos données et paramètres personnalisés. [URL_DOCS_DOCKER_REDEPLOY]%(LT_Common_Button_LearnMore)[/URL_DOCS_DOCKER_REDEPLOY]",

    LT_UploadFiles_Title_Dialog                 : "Charger fichiers",
    LT_UploadFiles_Label_Empty_Text                : "Sélectionner fichier(s)",

    LT_NodeMission_Storage                      : "Conteneur de stockage",

    //LT_EnvWizard_Storage                        : "Espace disque",
    LT_EnvWizard_Field_StorageLimits            : "Limite d'espace disque",
    LT_EnvWizard_Field_StorageLimits_Tip        : "Afficher les limites",
    LT_EnvWizard_Hint_Storage                   : "Type de conteneur dédié au stockage des données.",

    //TODO: нужно адаптировать - квота применяется на нод группу, старый текст: "Nombre maximal de nœud s identiques par environnement.",
    LT_Quotas_Text_MaxSameNodesCount            : "Nombre maximal de nœuds par groupe de nœuds (couche).",
    LT_Quotas_Text_MaxCloudlets                 : "Taille maximale du serveur en cloudlets.",
    LT_Quotas_Text_MaxDiskSpacePerNode          : "Espace disque maximal par nœud.",
    LT_Quotas_Text_MaxDiskSpacePerStorageNode   : "Espace disque maximal par nœud  de stockage.",

    //LT_DockerSettings_Text_PredefinedValue      : "Élément prédéfini dans l’image.",
    //LT_DockerSettings_Text_UserValue            : "",

    LT_DockerSettings_Vols_Column_Server        : "Emplacement des données",
    LT_DockerSettings_Vols_Column_ServerPath    : "Chemin d'accès distant",
    LT_DockerSettings_Vols_Column_Permission    : "Permission",
    LT_DockerSettings_Vols_Label_UmountPath     : "Démonter chemin",
    LT_DockerSettings_Vols_Label_VolFrom        : "Volumes de",
    LT_DockerSettings_Vols_Label_NoVolumes      : "Pas de volumes",
    LT_DockerSettings_Vols_Label_From           : "de:",
    LT_DockerSettings_Vols_W_AlreadyMounted     : "Le volume %(path) est déjà monté.",
    LT_DockerSettings_Vols_W_Predefined         : "Les volumes prédéfinis ne peuvent pas être supprimés.",
    LT_DockerSettings_Vols_W_AddDublicate       : "Un volume ayant ce chemin d’accès est déjà <br> présent dans la liste !",
    LT_DockerSettings_Vols_W_AddAlreadyMounted  : "Le volume est déjà monté et sera remonté <br> vers le conteneur de données sélectionné.",

    LT_Common_Label_Right_ReadWrite             : "rw",
    LT_Common_Label_Right_ReadWrite_Tip         : "Autorisation de lecture/écriture",
    LT_Common_Label_Right_ReadOnly              : "ro",
    LT_Common_Label_Right_ReadOnly_Tip          : "Autorisation en lecture seule",


    LT_VolFrom_Field_SourceNode                 : "nœud ",
    LT_VolFrom_Field_SourceNode_EmptyText       : "Veuillez sélectionner un conteneur",
    LT_VolFrom_Field_Volumes                    : "Volumes",

    LT_EnvNodesCombo_Label_CurrentEnv           : "%(envName) (actuel)",
    LT_EnvNodesCombo_EmptyStoreText             : "Pas de nœud s",

    // LT_Common_Text_MoreDetails                  : "Détails supplémentaires...",

    //TODO: VK - %(LT_Common_Button_LearnMore)
    LT_EnvMounts_Editor_HelpTip                 : "Vous pouvez ici [URL_DOCS_ENV_MOUNTS]ajouter un point de montage[/URL_DOCS_ENV_MOUNTS] - répertoire dans le fichier système du conteneur, qui est connecté au serveur de stockage à distance pour utiliser ses données.",
    //LT_EnvMounts_Editor_HelpTip                 : "Lire la [link]documentation[/link] pour obtenir plus de d’information sur les points de montage.",

    LT_EnvMounts_Editor_Title                   : "Ajouter point de montage",
    LT_EnvMounts_Editor_Field_Server            : "Serveur NFS",
    LT_EnvMounts_Editor_Field_Server_EmptyText  : "Domaine ou IP du serveur",
    LT_EnvMounts_Editor_Field_Path              : "Chemin d'accès distant",
    LT_EnvMounts_Editor_Field_MountPoint        : "Point de montage",
    //LT_EnvMounts_Editor_Field_MountPoint_Tip    : "Le point de montage est le répertoire dans le fichier système du conteneur avec le stockage de données supplémentaire monté depuis un emplacement à distance.",
    LT_EnvMounts_Editor_Field_MountType         : "Source",
    LT_EnvMounts_Editor_Field_AllNodes          : "Monter sur tous les nœuds",
    LT_EnvMounts_Editor_Field_AllNodes_Tip      : "En cas d’activation, le nouveau point de montage sera ajouté à tous les conteneurs du groupe de nœuds actuel (couche).",
    LT_EnvMounts_Editor_Field_ReadOnly          : "Lecture seule",

    LT_EnvMounts_Type_LocalFS                   : "Fichier système local",
    LT_EnvMounts_Type_DataContainer             : "Conteneur de données",
    LT_EnvMounts_Type_MasterContainer           : "Conteneur maître",
    LT_EnvMounts_Type_External                  : "Serveur externe",

    LT_EnvMounts_Type_LocalFS_HelpTip           : "Toutes les données seront stockées dans [URL_DOCS_MOUNT_TYPE_NO_MOUNT]le fichier système local[/URL_DOCS_MOUNT_TYPE_NO_MOUNT] du conteneur actuel et resteront présentes après son redémarrage ou son redéploiement.",
    LT_EnvMounts_Type_DataContainer_HelpTip     : "Choisissez un[URL_DOCS_MOUNT_TYPE_CONTAINER]conteneur distinct [/URL_DOCS_MOUNT_TYPE_CONTAINER] dans un de vos environnements pour y stocker vos données.",
    LT_EnvMounts_Type_MasterContainer_HelpTip   : "Tous les nœuds de cette couche, y compris ceux ajoutés ultérieurement, seront montés dans le [URL_DOCS_MOUNT_TYPE_MASTER]conteneur maître[/URL_DOCS_MOUNT_TYPE_MASTER] (c.à.d le nœud d’une couche créé initialement.",
    LT_EnvMounts_Type_External_HelpTip          : "Tous les nœuds de cette couche seront montés sur [URL_DOCS_MOUNT_TYPE_EXTERNAL]un serveur externe[/URL_DOCS_MOUNT_TYPE_EXTERNAL]destiné à stocker les données. Remarque: dans cette situation, il est fortement recommandé d’utilisé des adresses IP externes pour vos nœuds pour éviter tout problème lié à la sécurité.",
    // LT_EnvMounts_Type_VolumesFrom_HelpTip       : "Choisissez le nœud depuis lequel vous souhaitez copier les paramètres de volume afin de les monter dans le conteneur actuel.",

    // volume editor
    // LT_Volume_Editor_Field_Mount                : "Monter NFS",
    // LT_Volume_Editor_Field_Mount_Tip            : "Connecter le répertoire de stockage à distance à un emplacement particulier dans le fichier système du conteneur.[URL_DOCS_ENV_MOUNTS]%(LT_Common_Button_LearnMore)[/URL_DOCS_ENV_MOUNTS]",
    LT_Volume_Editor_Field_Path                 : "Chemin local",
    LT_Volume_Editor_Confirm_KeepMount          : "Le chemin %(path) a déjà été monté. Conserver le chemin actuel ?",

    LT_EnvMounts_Editor_W_EnvNotRunning         : "L'environnement ne fonctionne pas.",
    LT_EnvMounts_Info_MountSuccess              : "Le chemin %(path) a été monté avec succès.",

    // file manager
    LT_ConfigManager_Item_Root                  : "Racine",
    LT_ConfigManager_Item_Favorite              : "Favoris",
    LT_ConfigManager_Item_Mounted               : "Points de montage",
    LT_ConfigManager_Item_Exported              : "Exports",
    LT_ConfigManager_Label_Directories          : "Répertoires",

    LT_ConfigManager_Column_Name                : "Nom",
    LT_ConfigManager_Column_Server              : "Serveur",
    LT_ConfigManager_Column_ServerPath          : "Chemin d'accès distant",
    LT_ConfigManager_Column_Size                : "Taille",
    LT_ConfigManager_Column_Modified            : "Dernière modification",
    LT_ConfigManager_Column_FileType            : "Type",
    LT_ConfigManager_Column_ClientPath          : "Chemin client",
    LT_ConfigManager_Column_Permission          : "Permission",

    LT_ConfigManager_Button_OpenDirectory       : "Accéder au répertoire",
    LT_ConfigManager_Button_Mount               : "Monter",
    LT_ConfigManager_Button_UnMount             : "Démonter",
    LT_ConfigManager_Button_EditExportsConfig   : "Configuration",

    LT_ConfigManager_Button_Add2Favorites       : "Ajouter aux favoris",
    LT_ConfigManager_Button_RemoveFavorites     : "Supprimer des favoris",
    LT_ConfigManager_Button_Add2Volumes         : "Ajouter aux volumes",
    LT_ConfigManager_Button_RemoveVolumes       : "Supprimer des volumes",
    LT_ConfigManager_Button_DirectoryActions    : "Actions pour le répertoire actuel",
    LT_ConfigManager_Button_Open                : "Ouvrir",

    LT_ConfigManager_Field_Path_Tip             : "Cliquez pour saisir le chemin d'accès",
    LT_ConfigManager_Label_SaveForAll           : "Sauvegarder pour toutes les instances",
    LT_ConfigManager_Label_UnMountFromAll       : "Démonter de toutes les instances",

    LT_ConfigManager_Confirm_Unmount            : "Démonter le répertoire <b>%(name)</b> ?",
    LT_ConfigManager_Confirm_UnmountFromClient  : "Démonter le répertoire <b>%(name) depuis le nœud  <b>%(client)</b> ?",
    LT_ConfigManager_Confirm_RenameMountExport  : "Renommer le dossier monté / exporté pourrait affecter le fonctionnement correct des conteneurs dépendants. Renommer quand même <b>%(path)</b> en <b>%(newPath)</b> ?",
    LT_ConfigManager_Confirm_DeleteMountExport  : "La suppression du dossier monté / exporté pourrait affecter le fonctionnement correct des conteneurs dépendants. %(action)",

    LT_ConfigManager_Exports_EmptyText          : "Les dossiers seront automatiquement ajoutés à cette liste après avoir été montés sur d’autres conteneurs. [URL_DOCS_ENV_EXPORTS]%(LT_Common_Button_LearnMore)[/URL_DOCS_ENV_EXPORTS]",
    LT_ConfigManager_Favorites_EmptyList        : "Marquer les fichiers et répertoires les plus utilisés en favori pour y accéder facilement dans cet onglet.",

    LT_ConfigManager_FileType_File              : "fichier régulier",
    LT_ConfigManager_FileType_Directory         : "répertoire",
    LT_ConfigManager_FileType_Pipe              : "tube nommé",
    LT_ConfigManager_FileType_Socket            : "socket",
    LT_ConfigManager_FileType_CharacterDevice   : "périphérique caractères",
    LT_ConfigManager_FileType_BlockDevice       : "bloquer appareil",

    LT_Units_Kbit                               : "Ko",
    LT_Units_Mbit                               : "Mo",
    LT_Units_Gbit                               : "Go",
    LT_Units_Kbps                               : "ko/s",
    LT_EnvScaling_Label_Bits                    : "Octets",
    LT_EnvScaling_Tip_NetExtOut                 : "Usage du trafic externe du réseau (sortant uniquement, en octets)",
    LT_EnvAlerts_Text_Type_NetExt               : "Réseau (sorties ext + entrées ext)",
    LT_EnvAlerts_Label_Type_NetExt              : "Réseau (sorties ext + entrées ext)",
    LT_EnvAlerts_Label_Type_NetExtOut           : "Réseau (sorties ext)",
    LT_EnvAlerts_Text_Type_NetExtOut            : "Réseau (sorties ext)",


    LT_Task_Name_104                            : "Ajout du déclencheur %(triggerName) à %(env)",
    LT_Task_Name_105                            : "Édition des paramètres du déclencheur %(triggerName) pour %(env)",
    LT_Task_Name_106                            : "Changement de l’état du déclencheur %(triggerName) pour %(env)",
    LT_Task_Name_107                            : "Suppression du déclencheur %(triggerName) de %(env)",
    LT_Task_Name_109                            : "Exécution de la commande dans le conteneur %(name) ID %(nodeid) de %(env)",

    LT_Common_Button_Search                        : "Rechercher",

    LT_CodeEditor_Previous                      : "Résultat précédent",
    LT_CodeEditor_Next                          : "Résultat suivant",
    LT_CodeEditor_MatchCase                     : "Respecter la casse",
    LT_CodeEditor_Regex                         : "Regex",
    LT_CodeEditor_Search_Mathces                : "%(count) résultat(s)",
    LT_CodeEditor_Search_NoMathces              : "Pas de résultats",

    LT_Log_Button_Tail                          : "Fin de fichier",
    LT_Log_Button_Pages                         : "Pages",
    LT_Log_File_Truncated                       : "Le fichier %(file) a été tronqué",

    LT_Settings_Label_EnterDomain                  : "1. Entrez votre nom de domaine externe personnalisé (ex mondomaine.com) dans le champ ci-dessous pour le lier à l’environnement",
    LT_Settings_Label_CName                          : "2. Dans le panneau DNS, ajoutez un enregistrement CNAME au domaine concerné pour pointer vers l’adresse <b>%(sDomain)</b> (<u><a href='%(sDocUrl)' target='_blank'>comment faire</a></u>)",

    LT_Units_KiB                                : "KiB",
    LT_Units_MiB                                : "MiB",
    LT_Units_GiB                                : "GiB",
    LT_Units_TiB                                : "TiB",

    LT_EnvEndpoints_Settings_DetailsTips        : "Vous pouvez ici [link]ajouter et gérer les points d’arrivée[/link], qui peuvent être utilisés par d’autres ressources pour communiquer avec vos conteneurs",

    LT_Environments_Status_13                   : "Arrêt...",
    LT_Environments_Status_14                   : "Mise en veille...",

    LT_Process_Label_WaitFewMinutes             : "Le processus peut prendre plusieurs minutes...",

    LT_E_Platform_DOCKER_DAEMON_FAILED          : "L’image <b>%(image)</b> ne peut pas être récupérée en raison de problèmes techniques temporaires. Veuillez réessayer ultérieurement ou [ACTION_HOSTER_SUPPORT]contacter l'assistance[/ACTION_HOSTER_SUPPORT].",
    LT_E_Platform_COULD_NOT_DETECT_OS           : "L’image <b>%(image)</b> dépend d’un modèle non supporté par le système d’exploitation. [TEXT_CONTACT_SUPPORT/]",
    LT_E_Platform_COULD_NOT_FIND_DOCKER_IMAGE   : "L'image <b>%(image)</b> est introuvable. Veuillez vérifier vos saisies.",

    LT_Common_Button_Docs                         : "Docs",

    LT_ExportEnv_Dlg_Warning_WhatNotExported    : "Remarque: actuellement, les conteneurs  Docker et les nœuds Windows ne peuvent pas être exportés. Par ailleurs, les conteneurs Storage, Elastic VPS et Maven sont exportés sans données; vous devrez les reconfigurer manuellement par la suite.",
    LT_ExportEnv_Settings_Error_EmptyNodesList  : "Aucun conteneur ne peut être exporté.[URL_DOCS_ENV_EXPORT]%(LT_Common_Button_LearnMore)[/URL_DOCS_ENV_EXPORT]",

    LT_Environments_Column_Usage_QTip           : "CPU: %(cpu)<br /> Mém: %(mem)<br /> HDD: %(disk)<br /> Net: %(net_in)/%(net_out) Mo",
    LT_RestartContainer_Info_Success            : "Les conteneurs dans l’environnement <b>%(envName)</b> ont été redémarrés avec succès.",

    LT_DockerSettings_Title                     : "Paramètres de couche du Docker %(name)",

    LT_EnvScaling_ThresholdDiff_Tip             : "La différence minimum autorisée entre <br>les seuils de déclencheurs est de %(diff)%",

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Release: 4.8
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    LT_ManifestImp_TabJSON                      : "JSON",
    LT_ManifestImp_TabJSON_Beautify_Tip         : "Appliquer formatage JSON avec indentations et sauts de ligne",
    LT_ManifestImp_TabJSON_WordWrap_Tip         : "Formater lignes",
    LT_EnvWizard_Info_AvailableForBillingAcc    : "Ce support machine est fourni uniquement aux comptes payants. [ACTION_UPGRADE_ACCOUNT]Mettez votre compte à niveau/ACTION_UPGRADE_ACCOUNT] ou [ACTION_HOSTER_SUPPORT]contactez-nous [/ACTION_HOSTER_SUPPORT] pour supprimer cette limitation.",

    LT_AppStore_Error_ManifestIsCorrupted       : "Une erreur est survenue lors de la récupération des données d'application. Assurez-vous d'avoir choisi le bon fichier JSON",

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Disabled price
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    LT_EnvMounts_Editor_Title_Export            : "Exporter chemin d'accès depuis",
    LT_EnvMounts_Editor_Tab_Title_Export        : "Exporter répertoire",
    LT_EnvMounts_Editor_Field_SourceServer      : "Depuis NFS",
    LT_ConfigManager_Button_Export              : "Export",
    LT_EnvMounts_Editor_Field_TargetServer      : "Vers conteneur(s)",
    LT_EnvMounts_Type_Export_HelpTip            : "Choisir la source et les conteneurs cibles pour le partage des données.",

    LT_EnvWizard_Baloon_CPU_Resources           : "%(cpu) CPU",
    LT_EnvWizard_Baloon_RAM_Resources           : "%(ram) RAM",
    LT_EnvWizard_Pricing_Label_StorageLimit     : "Limite de stockage par nœud ",
    LT_EnvWizard_Pricing_Label_TrafficLimit     : "Limite de trafic par nœud ",
    LT_EnvWizard_Pricing_ViewLimits_Tip         : "Afficher les limites",
    LT_Menu_OpenExtBillingPanel                 : "Portail de facturation",
    LT_EnvWizard_PriceSlider_TotalResources     : "Total des ressources",
    LT_QuotasWindow_Title                       : "Quotas",
    LT_EnvMigration_Text_TargetRegion_Pricing   : "Les prix peuvent différer dans la région cible",

    LT_RedeployContainer_Field_RedeployDelay    : "Délai de redéploiement",
    LT_RedeployContainer_Field_Delay_Unit       : "secondes",
    LT_RedeployContainer_Field_Delay_Hint       : "Délai entre le redéploiement de chaque nœud dans un cluster. Peut être utilisé si vous avez besoin d’éviter les temps d’arrêt ou de synchronisation entre les nœuds",

    LT_Common_Text_Id                           : "ID",

    LT_Environments_Validation_InvalidName      : "Le nom est invalide. Veuillez utiliser un autre nom.",
    LT_Environments_Validation_ForbiddenSymbols : "Le nom contient des caractères spéciaux, qui ne sont pas autorisés dans les noms de domaines. Veuillez utiliser un autre nom.",

    LT_Upload_FileExists                        : "Le dossier %(folder) contient déjà ce(s) fichier(s): %(files). Ecraser ?",
    LT_Task_Name_43                                : "Création du fichier %(fileName) dans %(env)",
    LT_Task_Name_44                                : "Suppression du fichier %(fileName) de %(env)",
    LT_Task_Name_45                                : "Le fichier %(oldFileName) est renommé %(newFileName) dans %(env)",
    LT_Task_Name_47                                : "Lecture du fichier %(fileName) sur %(env)",
    LT_Task_Name_48                                : "Sauvegarde du fichier %(fileName) sur %(env)",

    LT_Error_Solution_Max_Nodes                 : "Vous avez atteint le nombre maximal de nœuds par environnements pour votre type de compte. Contactez l'assistance pour supprimer cette limite.",
    LT_Error_Solution_Docker_Enable             : "Les limites de votre compte ne vous permettent pas d'utiliser des conteneurs Docker. Veuillez contacter l'assistance pour activer cette option.",

    LT_W_ContainBeginEndSpaces                  : "Le nom du fichier ne peut commencer ou se terminer par un espace",
    LT_E_Platform_FILE_MOUNT_NO_INTERNAL_ROUTE  : "Le montage entre les nœuds sélectionnés n’est pas disponible en raison de l’absence d’une adresse IP interne pour l’un d’entre eux.",
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Release: 4.9
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    LT_Common_Text_Unit_Seconds                 : "secondes",
    LT_Common_Button_Restart                    : "Redémarrer",
    LT_RestartNodes_Field_SequentialRestartDelay: "Délai de redémarrage séquentiel",
    LT_RestartNodes_Field_Delay_Hint            : "Temps (en secondes) entre le redémarrage de deux conteneurs dans une couche applicative",
    LT_RestartNodes_Info                        : "Tous les conteneurs de la couche seront redémarrés un par un. Utilisez le bouton rotatif ci-dessous pour définir le délai entre ces opérations de redémarrage afin d'éviter le temps d'arrêt du service.",
    LT_Context_Sequential_Deploy_Hint           : "Écart entre le redéploiement de deux nœuds (conteneurs) dans un groupe de nœuds (couche)",
    LT_Context_Sequential_Delay                 : "Délai de déploiement séquentiel",
    LT_Upload_FtpLoginFailed                    : "Échec de la connexion FTP! Veuillez vérifier les informations d'identification FTP spécifiées et réessayer.",

    LT_Quotas_Days                              : "% (count) jour (s)",

    LT_Common_Button_ViewLogs                   : "Voir logs",
    LT_Import_ViewLogs_Tip                      : "Voir logs",

    LT_ManifestImp_ManifestDesc                 : "Spécifiez le manifeste JSON pour déployer automatiquement le package JPS approprié dans l'environnement avec une topologie et des configurations prédéfinies. <br> Utilisez <a target='_blank' href='%(href)'> Jelastic JPS Collection </a> pour trouver le ready-to-go dont vous avez besoin.",


    LT_Quotas_Text_SSL                          : "Hidora SSL",
    LT_Quotas_Error_SSL                         : "Hidora SSL n'est pas disponible pour votre compte. [TEXT_INCREASE_LIMITS/]",

    LT_EnvScaling_Field_ScaleUpTo               : "Augmenter jusqu'à",
    LT_EnvScaling_Field_ScaleDownTo             : "Réduire jusqu'à",
    LT_EnvScaling_Column_Nodes                  : "Noeuds",
    LT_EnvScaling_Column_AddCondition           : "Augmenter",
    LT_EnvScaling_Column_RemoveCondition        : "Réduire",
    LT_EnvScaling_W_TriggerExist                : "Le déclencheur de ce type de ressource existe déjà",
    LT_EnvScaling_W_NodeMaxTriggerCountReached  : "Vous avez atteint le nombre maximal de déclencheurs disponibles.",
    LT_EnvScaling_W_BuildNode                   : "Cette fonctionnalité n'est pas disponible pour la couche d'environnement de noeud de construction.",
    // LT_EnvScaling_W_CPRequired                  : "Within non-Docker environments, this option is available for web/application nodes only.",
    // LT_EnvScaling_HelpTip_CPRequired            : "You need to have a web/application node for this feature to work properly. [link]Click here to configure your environment[/link].",
    LT_EnvScaling_HelpTip                       : "Configurez les déclencheurs ci-dessous pour ajouter et supprimer automatiquement des nœuds de votre environnement en fonction de la consommation des ressources. Les paramètres de Cloudlet pour chaque nœud ajouté seront copiés à partir des instances existantes. Lisez cette [link] documentation [/link] pour en savoir plus.",
    LT_Docs_ZDTModule                           : "En savoir plus sur l'option de déploiement [link-docs]zero-downtime deployment[/link-docs] .",
    LT_Wizard_Warning_Restart_Group             : "Le conteneur(s) dans cette couche sera redémarré dans une séquence avec un délai prédéfini.",
    LT_ExtDomains_Error_Quota                   : "La liaison de domaine personnalisé n'est pas disponible pour votre compte. [TEXT_INCREASE_LIMITS/]",
    LT_Quotas_Text_ExtDomains                   : "Domaines",
    LT_Context_Sequential_Deploy_VCS_Hint       : "Temps (en secondes) entre le redéploiement de deux noeuds dans un groupe de noeuds (couche)",
    LT_SequentialMavenDeploy_Info               : "Tous les conteneurs du groupe de noeuds (couche) seront redéployés un par un. Utilisez la roulette ci-dessous pour définir le délai entre ces opérations de déploiement afin d'éviter les temps d'arrêt de service.",

    LT_Error_Solution_Max_Nodes_Upgrade         : "La configuration d'environnement demandée dépasse les limites de votre compte. Veuillez mettre à jour votre compte pour supprimer cette limitation.",
    LT_Error_Solution_Docker_Enable_Upgrade     : "Vous ne pouvez pas utiliser les conteneurs basés sur Docker en raison de vos restrictions de compte. Veuillez mettre à jour votre compte pour activer cette possibilité.",

    LT_Context_Sequential_Update_Delay          : "Délai de mise à jour séquentielle",
    LT_SequentialVcsUpdate_Info                 : "Tous les contenants de la couche seront mis à jour un par un. Utilisez le compteur ci-dessous pour définir le délai entre ces opérations de mise à jour afin d'éviter le temps d'arrêt du service.",
    LT_Common_Button_SequentialUpdate           : "Mise à jour",

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Release: 4.9.5
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    LT_TaskManager_Status_NoTasks               : "Aucune tâche active",
    LT_TaskManager_Status_ActiveTasks           : "%(count) tâche(s) active(s)",
    LT_Import_Link_Examples                     : "Exemples",
    LT_Tasks_Column_Performer                   : "Utilisateur",
    LT_Notify_Label_NoFreeInternalIps           : "Il n'y a pas d'adresses IP gratuites pour le moment. Veuillez [ACTION_HOSTER_SUPPORT] contacter le support [/ACTION_HOSTER_SUPPORT] pour négocier leur ajout.",
    LT_EnvMigration_Error_NoFreeInternalIps     : "Il n'y a pas d'adresses IP libres dans la région matérielle <b>% (region) </b> pour le moment. Veuillez sélectionner une autre région ou [ACTION_HOSTER_SUPPORT] contacter le support [/ACTION_HOSTER_SUPPORT].",
    LT_ExportEnv_Dlg_Warning_WhatNotExported    : "Notez que les nœuds Windows, les conteneurs Storage, Elastic VPS, Maven et Docker sont exportés sans aucune données à l'intérieur. Vous devrez les reconfigurer manuellement par la suite.",

    LT_E_Platform_4060                          : "Le déploiement a échoué. Veuillez vérifier les logs pour en savoir plus.",
    LT_BuildUpload_Failed_Warning               : "Une erreur s'est produite lors de la tentative de construction du projet",

    LT_TrialToPaid_WelcomeDlg_Title             : "Bienvenue!",
    LT_TrialToPaid_WelcomeDlg_Text              : "Nous vous remercions de l'intérêt que vous portez à notre produit. Vous êtes juste un pas loin pour créer votre compte et obtenir l'accès complet à la plate-forme.",
    LT_TrialToPaid_WelcomeDlg_Button_Continue   : "Continue",

    LT_Process_Label_Waiting4Conversion         : "En attente de conversion ...",

    LT_Error_SuspendedAccount_Trial             : "Votre période d'essai est expirée et votre compte a été désactivé. Veuillez [ACTION_UPGRADE_ACCOUNT] mettre à niveau votre compte [/ACTION_UPGRADE_ACCOUNT] si vous souhaitez continuer à utiliser le service.",
    LT_Error_Account_Destroyed                  : "Votre compte a été détruit. [TEXT_CONTACT_SUPPORT/]",

    LT_CustomSSL_Text_NotImplemented            : "Le certificat SSL personnalisé pour% (nodeName) n'est pas pris en charge. Envisagez d'utiliser le noeud de l'équilibreur de charge en tant que proxy SSL.",

    LT_ConfigManager_Button_CopyPath            : "Chemin de copie",
    LT_ConfigManager_OldBrowser_Info            : "Pressez Cmd/Ctrl+C pour copier",

    LT_Task_Name_110                            : "Exécution de la commande pour %(name) en %(env)",
    AutoRefill_ConfirmEdit                      : "Changer la somme du paiement de recharge automatique de%(currentAmount) à %(pureAmount)?",

    LT_Error_EnvironmentClone_Timeout           : "Une erreur s'est produite lors de la tentative de clonage du nœud",
    LT_AppStoreCat_Dockers                      : "Conteneurs Dockers",

    // FILE_MANAGER_DOWNLOAD_NOT_EXISTS
    LT_E_Platform_2050                          : "Ficher non existant",

    // FILE_MANAGER_DOWNLOAD_FILE_SIZE_LIMIT
    LT_Error_MaximumFileSize                    : "Fichier trop volumineux. La taille maximale du fichier est de %(size)",

    LT_Action_DownloadFile                      : "télécharger le fichier",

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Release: 4.10
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    LT_Units_sec                                : "sec",
    LT_NodeMission_Storage                      : "Conteneurs de stockage ",
    LT_EnvWizard_Field_StorageLimits            : "Limite de la taille de disque",
    LT_EnvWizard_Pricing_Label_StorageLimit     : "Limite de la taille de disque par noeud",

    LT_EnvWizard_PricingFixed_Resources         : "{0} RAM + {1} CPU",
    LT_EnvWizard_PricingDetails_Clds            : "Cloudlets (RAM, CPU)",
    LT_EnvWizard_PricingDetails_Reserved        : "Réservé",
    LT_EnvWizard_PricingDetails_Disk            : "Espace disque",
    LT_EnvWizard_Link_PricingVideo              : "[URL_VIDEO_PRICING_MODEL]Comment suivre vos dépenses?[/URL_VIDEO_PRICING_MODEL]",
    LT_EnvWizard_PricingDetails_RestRes         : "[link-storage]L’espace disque[/link-storage] et le [link-traffic]Trafic[/link-traffic] sont facturés selon la consommation.",

    LT_Task_Name_115                            : "Définition de la taille du disque pour le %(name) ID %(nodeid) noeud de %(env)",
    LT_Task_Name_116                            : "Définition de la taille du disque pour le %(name) noeud de %(env)",

    LT_EnvWizard_Warning_Cloudlets              : "Le nombre minimum de cloudlet pour <b>%(node)</b> est <b><i>%(count)</b></i>.",
    LT_E_Platform_ENV_NODE_DISK_MIN_LIMIT       : "La taille de disque minimale autorisée est <b>%(USER_QUOTA_NODE_DISK_MIN_LIMIT)</b>.",
    LT_E_Platform_ENV_NODE_DISK_MAX_LIMIT       : "La taille maximale du disque disponible par serveur est <b>%(USER_QUOTA_NODE_DISK_MAX_LIMIT)</b>. [TEXT_INCREASE_LIMITS/]",
    LT_E_Platform_ENV_STORAGE_NODE_DISK_MAX_LIMIT : "La taille maximale du disque disponible par serveur de stockage est <b>%(USER_QUOTA_STORAGE_NODE_DISK_MAX_LIMIT)</b>. [TEXT_INCREASE_LIMITS/]",

    LT_Window_Title                             : "%(HOSTER_NAME) Dashboard",

    LT_Error_Install_Support                    : "Veuillez contacter le support pour activer cette fonctionnalité.",
    LT_Error_Install_Upgrade                    : "Veuillez mettre à jour votre compte pour permettre cette fonctionnalité.",
    LT_Error_Solution_Docker_Enable             : "Les conteneurs Docker personnalisés ne sont pas activés pour votre compte. [TEXT_INCREASE_LIMITS/]",
    LT_Error_Vds_Int_Ip_Disabled                : "L'adresse IP privée pour VPS n'est pas activée pour votre compte. [TEXT_INCREASE_LIMITS/]",
    LT_EnvEndpoints_NameNoInternalIpText        : "Non disponible pour les nœuds sans adresse IP privée",

    LT_Menu_Toolbar_Tutorial                    : "Tutoriel",
    LT_Menu_Toolbar_Api_Docs                    : "API",

    LT_Common_Text_Manage                       : "Gérer",

    LT_Menu_CreateEnvironment                   : "Nouvel environnement",
    LT_Environments_Column_Tags                 : "Tags",
    LT_Environments_Owner_HelpTip               : "Propriétaire: %(email)",
    LT_Environments_EnvGroupsBtn_Edit_HelpTip   : "Editer Env Groups",
    LT_Environments_EnvGroupsBtn_Add_Text       : "+ Ajouter aux Env Group",

    LT_Environments_NavItem_Root                : "Env Groups",
    LT_Environments_NavItem_Region              : "Region",
    LT_Environments_NavItem_SharedEnvs          : "Partager avec Moi",

    LT_Common_Button_CreateNew                  : "Créer Nouveau",
    // LT_Environments_NavItem_EditGroup           : "Edit",
    // LT_Environments_NavItem_RemoveGroup         : "Remove",
    LT_Environments_NavItem_CreateSubGroup      : "Ajouter Enfants",
    // LT_Environments_NavItem_ManageGroups        : "Manage...",

    // actions: ACTION_SHOW_ENV_WIZARD, ACTION_SHOW_COLLABORATION_PANEL, ACTION_SHOW_MARKETPLACE
    LT_Environments_EmptyText                   : "<p>Prêt à exécuter votre application dans le Cloud? Commencez par la première étape:</p><ul><li>[ACTION_SHOW_ENV_WIZARD]Créez votre propre environnement[/ACTION_SHOW_ENV_WIZARD]</li><li>[ACTION_SHOW_COLLABORATION_PANEL]Collaborer sur l'environnement partagé[/ACTION_SHOW_COLLABORATION_PANEL]</li><li>[ACTION_SHOW_MARKETPLACE]Déployez la solution One-Clic de Marketplace[/ACTION_SHOW_MARKETPLACE]</li></ul>",
    // actions: ACTION_SHOW_ENV_WIZARD, ACTION_ATTACH_ENVS_TO_GROUP
    LT_Environments_EnvGroup_EmptyText          : "<p>Le groupe d'environnement actuel est vide. Vous pouvez:</p><ul><li>[ACTION_SHOW_ENV_WIZARD]Créez votre nouvel environnement ici[/ACTION_SHOW_ENV_WIZARD]</li><li>[ACTION_ATTACH_ENVS_TO_GROUP]Ajouter un (des) environnement (s) existant à ce groupe[/ACTION_ATTACH_ENVS_TO_GROUP]</li><li>[ACTION_SHOW_MARKETPLACE]Déployez la solution One-Clic de Marketplace[/ACTION_SHOW_MARKETPLACE]</li></ul>",

    LT_EnvGroups_Panel_Title                    :  "Groupe d'environnement",
    LT_EnvGroups_Dlg_Title_Add                  :  "Ajouter un Groupe",
    LT_EnvGroups_Dlg_Title_Edit                 :  "Editer Groupe: %(name)",
    LT_EnvGroups_Dlg_Field_Parent               :  "Groupe parent",
    LT_EnvGroups_Dlg_Field_Parent_EmptyText     :  "Tapez un nouveau nom ou sélectionnez l'élément existant",
    LT_EnvGroups_Dlg_Field_Environments         :  "Environnements",
    LT_EnvGroups_Dlg_Field_Groups               :  "Groupes",
    LT_EnvGroups_Selector_Title                 :  "Groupes d'environnements: %(name)",
    LT_EnvGroups_W_NestingCharacter             :  "Le caractère \"%(separator)\" ne doit être utilisé que pour définir l'imbrication des groupes d'env.",

    LT_CustomSSL_Label_UpTo                     : "Jusqu'à",
    LT_CustomSSL_Label_Certificates             : "Valide",

    LT_Import_Code_Mode_Json                    : "JSON",
    LT_Import_Code_Mode_Yaml                    : "YAML",
    LT_ManifestImp_TabManifest                  : "JPS",
    LT_ManifestImp_TabManifest_Editor_EmptyText : "Entrez votre code JSON ou YAML ici ...",

    LT_E_Platform_DOWNLOAD_COUNT_LIMIT_REACHED  : "Le nombre maximum de téléchargements simultanés a été atteint. Veuillez attendre que les téléchargements actuels soient terminés pour en ajouter de nouveaux.",
    LT_E_Platform_SERVICE_INTERNAL_ERROR        : "Une erreur de service interne s'est produite. [TEXT_CONTACT_SUPPORT/]",

    LT_ManifestImp_ManifestDesc                 : "Spécifiez le manifeste JSON ou YAML pour déployer automatiquement le paquet JPS approprié dans un environnement avec une topologie et des configurations prédéfinies.<br>Use <a target='_blank' href='%(href)'>%(PLATFORM_VENDOR_NAME) JPS Collection</a> pour trouver la solution prête à l'emploi dont vous avez besoin.",


    LT_EnvAlerts_Text_Type_OOMKiller            : "Une suppression de Out of memory (OOM) se produit",
    LT_EnvAlerts_Text_Type_OOMKillerCondition   : "Suppression de OOM",
    LT_EnvTrHistory_Field_NodeGroup             : "Groupe de noeud",
    LT_EnvTrHistory_Field_ResourceType          : "Déclencheur",
    LT_EnvTrHistory_Condition_OOM               : "Tué",
    LT_EnvTrHistory_OOM_Condition               : "OOM tué",
    LT_EnvTrHistory_Header_ProcessName          : "Nom du process",
    LT_EnvTrHistory_Header_ProcessId            : "ID du process",
    LT_EnvTrHistory_Header_ProcessNodeId        : "ID du noeud",
    LT_EnvTrHistory_Details_Table_Title         : "Process tués:",
    LT_EnvTrHistory_Filters_Title               : "Filtres",
    LT_EnvAlerts_Notify_Immediately             : "Immediatement",
    LT_EnvTrHistory_Column_Result               : "Info",

    LT_EnvMigration_TargetRegion_Validation     :  "La région sélectionnée n'est pas disponible pour la migration",

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Release: 5.0.5
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    LT_Task_Name_117                            : "Permuter de moteur pour %(name) node(s) de %(env)",
    LT_ManifestImp_TabURL_UntrustedSource       : "Assurez-vous que la source manifeste est de confiance pour éviter l'impact des malfaiteurs",

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Release: 5.0.6
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    LT_EnvWizard_Tip_ChangeVersion              : "Version changée",

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Release: 5.2
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    LT_Task_Name_122                            : "Définir des variables pour le noeud %(name) dans l'environnement %(env)",
    LT_Menu_Toolbar_ConvertAccount              : "Mise à jour de votre compte",

     ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Release: 5.3
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    LT_Log_Button_Download                      : "Télécharger",
    LT_Log_Archive_CannotBeRead                 : "Les fichiers d'archives ne peuvent pas être visualisés. Pour voir le contenu, téléchargez-le ou ouvrez-le via SSH.",
    LT_Deploy_VCS_Panel_Title                   : "Git / SVN",
    LT_Deploy_VCS_Panel_Archive                 : "Archive",
    LT_Deploy_VCS_Column_Name                   : "Nom",
    LT_Deploy_VCS_Column_Url                    : "URL",
    LT_Deploy_VCS_Btn_Add_Project               : "Ajouter un projet",
    LT_Title_Git                                : "Git",
    LT_Title_SVN                                : "SVN",
    LT_Deploy_VCS_SSH_Empty_Text                : "Sélectionner...",
    LT_Deploy_VCS_Dlg_Deploy_Title              : "Deployer %(name)",
    LT_Common_Button_Deploy                     : "Deployer",
    LT_Common_Button_AddDeploy                  : "Ajouter and Deployer",
    LT_AddBuild_Option_Existing                 : "Utiliser le noeud existent",
    LT_AddBuild_Option_New                      : "Ajouter un nouveau noeud",
    LT_AddBuild_Option_New_Tip                  : "Un nouveau noeud sera ajouté à l'environnement sélectionné",
    LT_Deploy_VCS_Add_Dlg_Success               : "Le projet %(name) a été ajouté avec succès.<br> Maintenant vous pouvez le déployer",
    LT_Deploy_Grid_Empty_Text                   : "Il n'y a aucun projet à afficher",
    LT_Common_Button_BuildDeploy                : "Construire et déployer",
    LT_Deploy_Require_Maven_Text                : "Un noeud Maven est requis pour construire et déployer votre projet",
    LT_Deploy_Maven_AutoAdd_Text                : "Un noeud Maven est requis pour construire et déployer votre projet. Il sera automatiquement ajouté à l'environnement sélectionné.",
    LT_Deploy_Title                             : "Gestionnaire de déploiement",
    LT_Deploy_VCS_Title_AddProject              : "Ajouter un projet Git / SVN",
    LT_Deploy_VCS_Title_EditProject             : "Editer un projet Git / SVN",
    LT_Deploy_VCS_Title_DeployProject           : "Déployer à partir de Git / SVN",
    LT_Deploy_Archive_Title_DeployProject       : "Déployer à partir d'une archive",
    LT_Deploy_URL_Title_DeployProject           : "Déployer à partir d'une URL",
    LT_Deploy_VCS_Post_Deploy_Hook              : "Post-Deploy Hook",
    LT_Deploy_VCS_Post_Deploy_Hook_Empty_Text   : "Entrez votre script",
    LT_Deploy_VCS_Confirm_Delete                : "Supprimer le project <b>%(name)</b>?",
    LT_Deploy_VCS_Remove_Project_Error          : "Une erreur s'est produite lors de la tentative de suppression du projet",
    LT_Deploy_VCS_Add_Project_Error             : "Une erreur s'est produite lors de la tentative d'ajout du projet",
    LT_Deploy_VCS_Edit_Project_Error            : "Une erreur s'est produite lors de la tentative de modification du projett",
    LT_Deploy_VCS_Deploy_Project_Error          : "Une erreur s'est produite lors de la tentative de déploiement du projet",
    LT_Task_Name_128                            : "Deployer le project %(projectName) sur %(env)",
    LT_Process_Label_Removing_Item              : "Suppression...",
    LT_Deploy_Tip_AddProject                    : "Ajouter un projet",
    LT_Deploy_Tip_AddDeployProject              : "Ajouter et déployer un projet",
    LT_Deploy_Tip_ApplyDeployProject            : "Appliquer les modifications et Déployer le projet",
    LT_Deploy_Tip_ApplyProject                  : "Appliquer les paramètres du projet modifié",
    LT_Common_Button_Back                       : "Retour",
    LT_Environments_Label_Deployments           : "Déploiements",
    LT_Common_Title_Deploy                      : "Deployer",
    LT_Common_Text_Project                        : "Projet",
    LT_Common_Combo_SelectOrAdd_Text            : "Sélectionner un existant ou en ajouter un nouveau",
    LT_Deploy_AddNewProject_Rec                 : "Ajouter un nouveau projet",
    LT_Common_Label_SelectOrTypeNew             : "Sélectionnez un existant ou tapez un nouveau",
    LT_UpdateProject_Interval                   : "Vérifier et déployer automatiquement les mises à jour",

    // LT_Common_Text_Action_Unavailable           : "Cette action n'est pas disponible pour le moment. Veuillez attendre que les actions en cours soient terminées.",

    LT_Pricing_Column_UnitHourPrice             : "%(sUnit) / hour",
    LT_Pricing_Column_UnitMonthPrice            : "%(sUnit) / month*",

    LT_Quotas_Text_ExternalIP                   : "Adresses IPv4 publiques.",
    LT_Quotas_Text_ExternalIPv6                 : "Adresses IPv4 publiques.",

    LT_Quotas_Text_ExtIPv4MaxCount              : "Nombre maximal d'adresses IPv4 publiques par environnement.",
    LT_Quotas_Text_ExtIPv6MaxCount              : "Nombre maximal d'adresses IPv6 publiques par environnement.",

    LT_Quotas_Text_ExtIPv4MaxCountPerNode       : "Nombre maximal d'adresses IPv4 publiques par noeud.",
    LT_Quotas_Text_ExtIPv6MaxCountPerNode       : "Nombre maximal d'adresses IPv6 publiques par noeud.",

    LT_OptionsCost_Text_IPv6_Desc               : "C'est une adresse IPv6 externe directement accessible depuis l'extérieur du cluster. Elles sont prises en charge toutes les heures.",

    LT_Common_Text_ExtIP                        : "IP Publique",
    LT_Common_Text_ExtIPv4                      : "IPv4 Publique ",
    LT_Common_Text_ExtIPv6                      : "IPv6 Publique",

    LT_EnvNodeSettings_Label_ExtIPv4            : "Nombre d'adresses IPv4 publiques attachées",
    LT_EnvNodeSettings_Label_ExtIPv6            : "Nombre d'adresses IPv6 publiques attachées",

    LT_Menu_AttachDetachIP                      : "Attacher/Détacher IP(s)",
    LT_Menu_DetachIP                            : "Détacher IP",
    LT_Menu_DetachPrimaryIPRestricted           : "L'IP primaire devra être détachée en dernier",

    LT_Confirm_DetachIP                         : "Détacher l'IP <b>%(ip)</b>?",
    LT_Confirm_DetachIPs                        : "Détacher toutes les adresses IP publiques du nœud actuel?",

    LT_Common_Title_NodeSettings                : "Paramètre du noeud %(nodeId)",

    LT_Common_Label_Copy2Clipboard              : "Copier dans le presse-papier",
    LT_Common_Label_Copied                      : "Copié!",
    LT_Common_Label_Copy4OldBrowser             : "%(LT_ConfigManager_OldBrowser_Info)",

    LT_Task_Name_31                                : "Attachement de l'adresse IP publique de %(name) à %(env)",
    LT_Task_Name_52                                : "Détachement de l'adresse IP publique %(ip) de %(name) sur %(env)",
    LT_Task_Name_127                            : "Paramètre de la quantité d'adresses IP publiques [FORMAT_IP_TYPE]%(type)[/FORMAT_IP_TYPE] sur %(count) pour le noeud %(name) avec l'ID %(nodeid) dans %(env)",

    LT_Info_ExtIPCountUpdated                   : "L'IP publique [FORMAT_IP_TYPE]%(type)[/FORMAT_IP_TYPE] pour le noeud <b>%(node)</b> a été mis à jour avec succès.",
    LT_Info_ExtIPDetached                       : "L'IP publique %(ip) a été détaché avec succès sur le noeud <b>%(node)</b>.",
    LT_Info_ExtIPsDetached                      : "L'IP publique [FORMAT_IP_TYPE]%(type)[/FORMAT_IP_TYPE] a été détaché avec succès sur le noeud <b>%(node)</b>.",

    LT_Action_DetachIP                          : "détacher l'IP %(ip) du noeud %(node)",
    LT_Action_DetachIPs                         : "detacher les IPs du noeud %(node) ",
    LT_Action_SetExtIPCount                     : "mise à jour des adresses [FORMAT_IP_TYPE]%(type)[/FORMAT_IP_TYPE] publiques pour le noeud %(node)",

    LT_AddonWarning_ConvertAcc                  : "Les adresses IP publiques sont disponibles uniquement pour les utilisateurs de facturation. Veuillez mettre à jour votre compte pour utiliser l'adresse IP publique.",
    LT_AddonWarning_ContactSupport              : "Vous n'êtes pas autorisé à utiliser les adresses IPs publiques en raison des restrictions de votre compte. Veuillez contacter notre équipe de support pour supprimer cette limitation.",
    LT_AddonWarning_externalip                  : "L'adresse IP publique sera automatiquement ajoutée à votre environnement.",

    LT_E_Platform_ENV_EXT_IP_REQUIRED           : "IP publique est obligatoire pour le noeud <b>%(node)</b>.",

    LT_Common_Text_ExtIPNotAllowed              : "L'utilisation d'adresse [FORMAT_IP_TYPE]%(type)[/FORMAT_IP_TYPE] publique n'est pas autorisé pour votre compte.",
    LT_E_Platform_ENV_EXT_IPV4_NOT_ALLOWED      : "[TPL]LT_Common_Text_ExtIPNotAllowed, {type: 'EXT_IP_TYPE_V4'}[/TPL]",
    LT_E_Platform_ENV_EXT_IPV6_NOT_ALLOWED      : "[TPL]LT_Common_Text_ExtIPNotAllowed, {type: 'EXT_IP_TYPE_V6'}[/TPL]",

    LT_Common_Text_MaxExtIPPerEnv               : "Le nombre maximale d'adresse publique [FORMAT_IP_TYPE]%(type)[/FORMAT_IP_TYPE] par environnement est de <b>%(maxcount)</b>. [TEXT_INCREASE_LIMITS/].",
    LT_E_Platform_ENV_EXT_IPV4_MAXCOUNT         : "[TPL]LT_Common_Text_MaxExtIPPerEnv, {type: 'EXT_IP_TYPE_V4', maxcount: 'QUOTA_ENV_EXT_IPV4_MAXCOUNT'}[/TPL]",
    LT_E_Platform_ENV_EXT_IPV6_MAXCOUNT         : "[TPL]LT_Common_Text_MaxExtIPPerEnv, {type: 'EXT_IP_TYPE_V6', maxcount: 'QUOTA_ENV_EXT_IPV6_MAXCOUNT'}[/TPL]",

    LT_Common_Text_MaxExtIPPerNode              : "Le nombre maximal d'adresse publique [FORMAT_IP_TYPE]%(type)[/FORMAT_IP_TYPE] par serveur est de <b>%(maxcount)</b>. [TEXT_INCREASE_LIMITS/].",
    LT_E_Platform_ENV_NODE_EXT_IPV4_MAXCOUNT    : "[TPL]LT_Common_Text_MaxExtIPPerNode, {type: 'EXT_IP_TYPE_V4', maxcount: 'QUOTA_ENV_NODE_EXT_IPV4_MAXCOUNT'}[/TPL]",
    LT_E_Platform_ENV_NODE_EXT_IPV6_MAXCOUNT    : "[TPL]LT_Common_Text_MaxExtIPPerNode, {type: 'EXT_IP_TYPE_V6', maxcount: 'QUOTA_ENV_NODE_EXT_IPV6_MAXCOUNT'}[/TPL]",

    LT_EnvMigration_Error_Title                 : "Migration de l'environnement %(envName)",

    TEXT_ENV_NODE_IP_CONTACT_SUPPORT            : "De nouvelles adresses IP seront bientôt disponibles. Veuillez réessayer plus tard ou [ACTION_HOSTER_SUPPORT] contactez le support [/ACTION_HOSTER_SUPPORT].",
    TEXT_ENV_MIGRATION_CONTACT_SUPPORT          : "Veuillez sélectionner une autre région ou [ACTION_HOSTER_SUPPORT] contacter le support [/ACTION_HOSTER_SUPPORT].",

    LT_Common_Text_NoFreeIntIP                  : "Il n'y a pas d'adresses IP libre dans la région <b>%(region)</b> pour le moment.",
    LT_E_Platform_ENV_NO_FREE_INTERNAL_IP       : "%(LT_Common_Text_NoFreeIntIP) [TEXT_ENV_NODE_IP_CONTACT_SUPPORT/]",
    LT_E_EnvMigration_ENV_NO_FREE_INTERNAL_IP   : "%(LT_Common_Text_NoFreeIntIP) [TEXT_ENV_MIGRATION_CONTACT_SUPPORT/]",

    LT_Common_Text_NoFreeExtIP                  : "Il n'y a plus d'adresse [FORMAT_IP_TYPE]%(type)[/FORMAT_IP_TYPE] publique libre dans la <b>%(region)</b> pour le moment.",
    LT_E_Platform_ENV_NO_FREE_EXT_IPV4          : "[TPL]LT_Common_Text_NoFreeExtIP, {type: 'EXT_IP_TYPE_V4'}[/TPL] [TEXT_ENV_NODE_IP_CONTACT_SUPPORT/]",
    LT_E_Platform_ENV_NO_FREE_EXT_IPV6          : "[TPL]LT_Common_Text_NoFreeExtIP, {type: 'EXT_IP_TYPE_V6'}[/TPL] [TEXT_ENV_NODE_IP_CONTACT_SUPPORT/]",
    LT_E_EnvMigration_ENV_NO_FREE_EXT_IPV4      : "[TPL]LT_Common_Text_NoFreeExtIP, {type: 'EXT_IP_TYPE_V4'}[/TPL] [TEXT_ENV_MIGRATION_CONTACT_SUPPORT/]",
    LT_E_EnvMigration_ENV_NO_FREE_EXT_IPV6      : "[TPL]LT_Common_Text_NoFreeExtIP, {type: 'EXT_IP_TYPE_V6'}[/TPL] [TEXT_ENV_MIGRATION_CONTACT_SUPPORT/]",

    LT_E_Platform_ENV_EXT_IP_PRIMARY_DETACH_RESTRICTED : "L'IP primaire devra être détachée en dernier",

    LT_EnvProgress_Clone_Title_Failed            : "Le clonage de l'environnement<b>%(name)</b> a echoué.",

    LT_DockerSettings_EnvVars_HelpTip           : "Lire [URL_DOCS_DOCKER_ENV_VARS]documentation[/URL_DOCS_DOCKER_ENV_VARS] pour en savoir plus sur les variables d'environnement du conteneur Docker.",
    LT_DockerSettings_Links_HelpTip             : "Lire [URL_DOCS_DOCKER_LINKS]documentation[/URL_DOCS_DOCKER_LINKS] pour en savoir plus sur les liens des conteneurs Docker.",
    LT_DockerSettings_Vols_HelpTip              : "Lire [URL_DOCS_DOCKER_VOLUMES]documentation[/URL_DOCS_DOCKER_VOLUMES] pour en savoir plus sur les volumes de conteneurs Docker.",
    LT_DockerSettings_RunArgs_HelpTip           : "Lire [URL_DOCS_DOCKER_RUN_ARGS]documentation[/URL_DOCS_DOCKER_RUN_ARGS] pour en savoir plus sur les options d'exécution du conteneur Docker.",

    LT_TutorSlider_Text_PrAdvantages            : "Profitez des avantages de prix",

    LT_TutorSlider_Title_Benefits                   : "Les avantages de %(PLATFORM_VENDOR_NAME)",
    LT_TutorSlider_Title_SaveMoney                   : "Réglez votre consommation de ressources",
    LT_TutorSlider_Title_Build                       : "Construisez votre topologie d'application",

    LT_TutorSlider_Build_Left_Container            : "Conteneur",
    LT_TutorSlider_Build_Left_Layer                : "Couche",
    LT_TutorSlider_Build_Left_Environment            : "Environnement",
    LT_TutorSlider_Build_Left_Application            : "Application",

    LT_TutorSlider_Build_Right_Balancer            : "Répartiteur de charge(BL)",
    LT_TutorSlider_Build_Right_Compute                : "Serveur d'application(CP)",
    LT_TutorSlider_Build_Right_Database            : "Base de données (DB)",
    LT_TutorSlider_Build_Right_Storage                : "Stockage (ST)",

    LT_E_Platform_ENV_EXT_DOMAIN_NOT_ALLOWED    : "%(LT_ExtDomains_Error_Quota)",

    LT_Menu_Billing_Btn_Billing                 : "Facturation",

    LT_EnvWizard_PricingDetails_RestRes         : "[link-storage]Espace disque [/link-storage] et[link-traffic]Trafic[/link-traffic]sont facturés en fonction de la consommation.",

    LT_Task_Name_133                            : "Échanger d'IPv4 publique entre le nœud %(name) avec l'ID %(nodeid) dans %(env) et %(targetNodeid))",

    LT_Pricing_Text_MonthHours                  : "* Basé sur un %(count)-heure par mois.",

    LT_Warning_Install_Note                     : "<b>Note:</b> L'environnement sera créé avec moins de ressources que prévu en raison de vos limites de compte, ainsi son fonctionnement correct ne peut pas être garanti.",
    
    LT_ConfigManager_FileAlreadyExists          : "Le chemin <b>%(path)</b> existe déjà sur l'environnement %(env).La structure du répertoire sera mise à jour.",

    LT_Config_Text_LoadingError_402             : "Le fichier binaire ne peut pas être visualisé. Pour voir le contenu, téléchargez-le ou ouvrez-le via SSH.",

    LT_Process_Label_AttachingIPs               : "Attachement d'IP...",
    LT_Process_Label_DetachingIPs               : "Detachement d'IP...",
    LT_Process_Label_UpdatingIPs                : "Mise à jour du montant...",

    LT_Task_Name_118_NodeGroup                    : "Redémarrage du/des node(s) %(name) de %(env)",
    LT_Task_Name_118_NodeId                        : "Redémarrage de %(name) du noeud ID %(nodeid) de %(env)",
    LT_Task_Name_119_NodeGroup                    : "Réinitialiser le mot de passe de %(name) de %(env)",
    LT_Task_Name_119_NodeId                        : "Réinitialiser le mot de passe de %(name) du noeud ID %(nodeid) sur %(env)",
    LT_Task_Name_120_NodeGroup                    : "Réinitialiser le mot de passe de %(name) de %(env)",
    LT_Task_Name_120_NodeId                        : "Réinitialiser le mot de passe de %(name) du noeud ID %(nodeid) sur %(env)",
    LT_Task_Name_121_NodeGroup                    : "Redémarrage du/des node(s) %(name) de %(env)",
    LT_Task_Name_121_NodeId                        : "Redémarrage de %(name) du noeud ID %(nodeid) de %(env)",
    LT_Task_Name_123_NodeGroup                  : "Ajout de variables pour le(s) noeud(s) %(name) dans %(env)",
    LT_Task_Name_123_NodeId                     : "Ajout de variables pour le(s) noeud(s) %(name), ayant pour ID %(nodeid) dans %(env)",
    LT_Task_Name_124_NodeGroup                  : "Suppresion de variables pour le(s) noeud(s) %(name) dans %(env",
    LT_Task_Name_124_NodeId                     : "Suppresion de variables pour le(s) noeud(s) %(name), ayant pour ID %(nodeid) dans %(env)",

    LT_Task_Name_129                            : "Création d'une tâche planifiée à l'aide du script %(script)",
    LT_Task_Name_130                            : "Création d'une tâche planifiée pour l'environnement %(env) utilisant le script %(script)",
    LT_Task_Name_131                            : "Suppresion de tâche(s) planifiée",
    LT_Task_Name_132                            : "Modification de tâche(s) planifiée",

    LT_Process_Label_WaitingAnotherProcess      : "En attente d'un autre processus à compléter ...",

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Release: 5.3.2
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    LT_Common_Text_Registry					    : "Registry",
    LT_Common_Text_DockerHub                    : "Docker Hub",
    LT_Common_Button_UpdateCredentials          : "Mise a jour d'identifiants",

    LT_DockerSettings_Item_RepoCredentials      : "Repo Credentials",
    LT_DockerRepoCredentials_Title              : "Container Repository Credentials",
    LT_DockerRepoCredentials_HelpTip            : "De nouveau identifiants vont être automatiquement ajouté aux noeuds, deployé à partir de ce dossier, dans tout les environnements de votre compte.",
    LT_DockerRepoCredentials_Confirm_Update     : "SVP confirmez le changement d'identifiant pour le répertoire <b>%(repository)</b>.",

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Release: 5.4
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    LT_Statistics_Text_IntervalMonth            : "mois",
    LT_Confirm_DeleteMultipleFiles              : "Supprimer les %(count) fichiers choisis?",
    LT_Context_Sequential_Deploy                : "Deployement sequentiel avec délaie",
    LT_Context_Simultaneous_Deploy              : "Déployement simultané",

    LT_RedeployContainer_Field_SequentialDeploy : "Deployement sequentiel avec délaie",
    LT_RedeployContainer_Field_SimultaneousDeploy : "Déployement simultané",
    LT_RedeployContainer_Field_DeployType_Tip   : "Si activé, les containers vont être redeployés un par un avec un délai, afin d'assurer la fonctionalité du service. Sinon, ils seront redeployés en même temps pouvant engendrer un temps d'arrêt.",

    LT_Deploy_VCS_Btn_Add_Project               : "Ajouter un répertoire",
    LT_Deploy_VCS_Title_AddProject              : "Ajouter un répertoire",
    LT_Deploy_VCS_Title_EditProject             : "Modifier un répertoire",
    LT_Deploy_VCS_Confirm_Delete                : "Supprimer le répertoire  <b>%(name)</b>?",

    LT_BuildNode_WorkingDirectory               : "Dossier de travail",
    LT_BuildNode_WorkingDirectory_Tip           : "Relative path to the repository subdirectory with application source code (optional)",

    LT_Deploy_Tip_ApplyAndRunAction             : "Appliquer les changements et %(action) sur le project",
    LT_Deploy_Tip_ApplyAndBuild                 : "[TPL]LT_Deploy_Tip_ApplyAndRunAction, {action: 'LT_BuildNode_Label_Build'}[/TPL]",
    LT_Deploy_Tip_ApplyAndDeploy                : "[TPL]LT_Deploy_Tip_ApplyAndRunAction, {action: 'LT_Common_Button_Deploy'}[/TPL]",
    LT_Deploy_Tip_AddProject                    : "Ajouter un répertoire",
    LT_Deploy_Tip_AddDeployProject              : "Ajouter et déployer un répertoire",
    LT_Deploy_AddNewProject_Rec                 : "Ajouter un nouveau répertoire",
    LT_Deploy_Field_DeployStrategy              : "Stratégie de déploiement",
    LT_Deploy_Confirm_RefreshRepoSettings       : "Les paramètres du répertoire ont été mise à jour. Appliquer ces changements sur votre project?",
    LT_Deploy_Confirm_ReloadHooks               : "Recharger hooks pour le <b>%(context)</b> en rapport avec le déploiement de ces dernières version ?",
    LT_Deploy_Error_NeedNewSSHKey               : "Besoin de spécifier une nouvelle clé SSH.",

    LT_Hook_Title_Pre                           : "Pre",
    LT_Hook_Title_Post                          : "Post",
    LT_Hook_Action_Build                        : "Build",
    LT_Hook_Action_Deploy                       : "Deploy",
    LT_Hook_Action_Update                       : "Update",
    LT_Hook_Code_Placeholder                    : "Mettre votre code ici",
    LT_Dialog_EditHook_Title                    : "Modifier le hook %(title) ",
    LT_Title_Hooks                              : "Hooks",
    LT_Title_Hook_Code                          : "Code",
    // LT_RestartNodes_Info                        : "<p>Select one of the options below to define whether containers within a layer should be restarted:</p><p><i> - simultanély</i> (i.e. all together, at once), causing short unavailability of your service </p><p><i> - sequentially</i> (i.e. one by one) with predefined delay before each next container restart to avoid service downtime</p>",
    // LT_SequentialMavenDeploy_Info               : "<p>Select one of the options below to define whether containers within a layer should be redeployed:</p><p><i> - simultaneously</i> (i.e. all together, at once), causing short unavailability of your service</p><p><i> - sequentially</i> (i.e. one by one) with predefined delay before each next container redeploy to avoid service downtime</p>",
    // LT_SequentialVcsUpdate_Info                 : "<p>Select one of the options below to define whether containers within a layer should be updated:</p><p><i> - simultaneously</i> (i.e. all together, at once), causing short unavailability of your service</p><p><i> - sequentially</i> (i.e. one by one) with predefined delay before each next container update to avoid service downtime</p>",

    LT_Context_Confirm_UpdateProject_AllNodes   : "Mise à jour du project \"%(sName)\" sur tout les noeuds?",
    LT_BuildNode_Confirm_BuildAndProject_AllNodes : "Build et deploy projet \"%(sName)\" sur tout les noeuds?",
    LT_BuildNode_Label_UploadFiles              : "Télécharger builds de %(LT_Deploy_Title)",
    LT_Context_Sequential_Deploy_Desc           : "Déploiement séquentiel avec delay (i.e. un par un) avec délai",
    LT_Context_Simultaneous_Deploy_Desc         : "Déploiement simultané(ex: tous en même temps)",
    LT_RestartNodes_Field_SequentialRestart     : "Redémarrage simultané (ex; un par un) avec délai",
    LT_RestartNodes_Field_SimultaneousRestart   : "Redémarrage simultané(ex: tous en même temps)"
    LT_Context_Sequential_SequentialUpdate      : "Mise à jour senquentielle (ex: un par un) avec délai",
    LT_Context_Sequential_SimultaneousUpdate    : "Mise à jour simultanée (ex: tous en même temps)"

    LT_Docs_ZDTModule                           : "[URL_DOCS_BLUE_GREEN_DEPLOY]Comment activé un déploiement sans arrêt[/URL_DOCS_BLUE_GREEN_DEPLOY]",

    LT_Context_Confirm_ReplaceContext           : "Context %(context) est déjà utilisé. Redéployer le contexte?",
    LT_Notify_Label_WaitDeploying               : "SVP attendez jusqu'à ce que le déploiement de <b>%(context)</b> soit terminé.",
    LT_DeployArchive_Warning_EnvIsBusy          : "L'environnement est occupé avec un autre processus. SVP attendez que les tâches soient terminées.",

    LT_BuildNode_AutoUpdate_Tip                 : "Déploiement automatique de tous les répertoires.",
    LT_BuildNode_Warning_HasNotCompute          : "Le projet %(name) a été mal deployé.",
    LT_DeployArchive_Warning_ArchiveContext     : " Ce context est déja utilisé par une Archive.",

    LT_Error_EnvNotRunning                      : "L'Environnement de tourne pas.",

    LT_Common_Button_ActionLog                  : "Action Log",
    LT_Common_Button_RunLog                     : "Run Log",
    LT_Common_Text_Archive                      : "Archive",
    LT_Common_Button_ShowRepositories           : "Show Repos",
    LT_Action_LoadHooks                         : "charger le hooks",

    LT_E_Platform_VCS_PROJECT_NOT_EXIST         : "%(LT_Error_UpdateVCSProject_NotExist)",
    LT_E_Platform_VCS_PROJECT_ALREADY_EXIST     : "%(LT_Error_EditProject_Exist)",
    LT_E_Platform_VCS_TYPE_NOT_SUPPORT          : "%(LT_Error_EditProject_UnknownType)",
    LT_E_Platform_VCS_WRONG_URL                 : "%(LT_Error_AddVCSProject_InvalidPath)",
    LT_E_Platform_JEM_URL_NOT_VALID             : "%(LT_Error_UrlNotValid)",
    LT_E_Platform_VCS_AUTH_OR_URL_INCORRECT     : "%(LT_Error_UpdateVCSProject_AuthFailed)",
    LT_E_Platform_VCS_ERROR_READ_CONFIG         : "%(LT_Error_UpdateVCSProject_WrongConfig)",

    LT_E_Platform_FILE_IS_INCORRECT 	        : "Les fichiers avec les extensions suivantes sont autorisés: [FORMAT_FILE_EXTENSIONS]%(extensions)[/FORMAT_FILE_EXTENSIONS]",
    LT_E_Platform_LOADING_FILE_FROM_URL_ERROR   : "%(LT_Error_Platform_4078)",

    LT_Common_Error_HookExecFailed              : "L' exécution du hook %(type)-%(action) a échoué.",
    LT_E_Platform_HOOK_EXEC_FAILED_PRE_DEPLOY   : "[TPL]LT_Common_Error_HookExecFailed, {type: 'LT_Hook_Title_Pre', action: 'LT_Hook_Action_Deploy'}[/TPL]",
    LT_E_Platform_HOOK_EXEC_FAILED_POST_DEPLOY  : "[TPL]LT_Common_Error_HookExecFailed, {type: 'LT_Hook_Title_Post', action: 'LT_Hook_Action_Deploy'}[/TPL]",
    LT_E_Platform_HOOK_EXEC_FAILED_PRE_BUILD    : "[TPL]LT_Common_Error_HookExecFailed, {type: 'LT_Hook_Title_Pre', action: 'LT_Hook_Action_Build'}[/TPL]",
    LT_E_Platform_HOOK_EXEC_FAILED_POST_BUILD   : "[TPL]LT_Common_Error_HookExecFailed, {type: 'LT_Hook_Title_Post', action: 'LT_Hook_Action_Build'}[/TPL]",
    LT_E_Platform_VCS_WRONG_REPO                : "Mauvais dossier de configuration.",
    LT_E_Platform_SSH_KEY_IN_USE                : "Clé SSH est utilisé par les répertoires: %(dependencies)",
    LT_E_Platform_JEM_EXEC_TIMEOUT              : "L'opération a expiré.",
    LT_E_Platform_MAVEN_PROJECT_POM_NOT_EXIST   : "Il y'a pas de fichier <b>pom.xml</b> dans le project. Vérifiez la présence du fichier dans le répertoire et réessayer.",

    LT_EnvProgress_Deploy_Title                 : "Deploy de %(path) à %(env)",
    LT_EnvProgress_BuildProject_Title           : "Build projet: %(project)",

    LT_Common_Text_ProcessSuccess               : "Le processus s'est terminé avec succès.",

    LT_EnvGroups_Dlg_Field_Isolation            : "Isolation du réseau",
    LT_EnvGroups_Dlg_Field_Isolation_Tip        : " Toutes les communications entre les environnements interne sont restreintes selon les groupes approprié seulement. Ici, l'isolation du réseau est disponible seulement pour le propriétaire des environnements.",
    LT_EnvGroups_W_GroupExists                  : "Le groupe d'environnement <b>%(name)</b> existe déjà, ses paramètres vont donc être mis à jour.",

    LT_Upload_Validation_URL                    : "Le format de l'URL ne correspond pas à l'exemple suivante:<br/>%(examples)",
    LT_Upload_Validation_URL_Example_http       : "http://www.example.com/",
    LT_Upload_Validation_URL_Example_ftp        : ["ftp://www.example.com/", "ftp://login:pass@www.example.com/"],
    LT_Upload_Validation_URL_Example_file       : "file:///tmp/archive.zip",
    LT_Upload_Validation_URL_Example_Separator  : "<br/>",

    LT_Auto_Resolve_Conflict                    : "Auto-résolution de conflit",
    LT_Auto_Resolve_Conflict_Tip                : "To prevent the merge conflict occurrence, the <i>git reset --hard</i> command will be called during each subsequent project update. This implies that contradictory files will be updated according to its repository version, discarding the locally made changes.",
    LT_WebSSH_Client                            : "Web SSH",

    LT_Settings_Label_Accounts				  	: "Collaboration",
    LT_UserSettings_Item_UserManagement         : "Partagé avec moi",
    LT_EnvSettings_Item_Firewall                : "Firewall",

    LT_Firewall_Title_Overview                  : "Aperçu",
    LT_Firewall_Title_InboundRules              : "Règles entrante",
    LT_Firewall_Title_OutboundRules             : "Règles sortante",
    LT_Firewall_Label_IsolatedNetworks          : "Isoler les groupes d'environnement",
    LT_Firewall_Networks_EmptyText              : "Ne pas isoler les groupes d'environnement",
    LT_Firewall_Schema_Label_Network1           : "Isoler groupe d'environnement 1",
    LT_Firewall_Schema_Label_Network2           : "Isoler groupe d'environnement 2",
    LT_Firewall_Schema_Label_Firewall           : "Firewall",
    LT_Firewall_Schema_Label_Wan                : "WAN Connection",
    LT_Firewall_Schema_Label_Lan                : "LAN Connection",
    LT_Firewall_Field_Name                      : "Nom",
    LT_Firewall_Field_Protocol                  : "Protocole",
    LT_Firewall_Field_PortRange                 : "Plage de ports",
    LT_Firewall_Field_Source                    : "Source",
    LT_Firewall_Field_Destination               : "Destination",
    LT_Firewall_Field_IPRange                   : "Plage d'adresse IP",
    LT_Firewall_Field_RelatedNodes              : "Noeuds associe",
    LT_Firewall_Field_Priority                  : "Priorité",
    LT_Firewall_Field_Action                    : "Action",
    LT_Firewall_Field_LastModified              : "Dernière modification",
    LT_Firewall_Tip_PortRange                   : "Un seul port (ex: 80) ou plage de port (ex: 1024-2048). <br/> Les ports doivent être entre 1 et 65535. <br/> Laissez ce champs vide si vous voulez l'appliquer à tout les ports.",
    LT_Firewall_Tip_Priority                    : "Les règles mise en place dépendront de leurs priorités, qui sont définis part un numéro (où la plus petite valeur implique la plus grande priorité).C'est recommandé de laisser des écarts (ex: 10, 20, 30) pour être capable d'ajouter de nouvelles règles sans avoir à modifier les règles existente.",
    LT_Firewall_Tip_IPRange                     : "Spécifier l'adresse IPv4/IPV6 cible comme ceci:<br><b>IPv4:</b><ul> <li>&nbsp;&nbsp;&nbsp;&nbsp;<i>Une seule IP:</i> 10.0.0.1</li> <li>&nbsp;&nbsp;&nbsp;&nbsp;<i>CIDR Block:</i> 10.0.0.0/24</li></ul><b>IPv6:</b><ul> <li>&nbsp;&nbsp;&nbsp;&nbsp;<i>Une seule IP:</i> 2001:db8:0:0:0:0:0:0</li> <li>&nbsp;&nbsp;&nbsp;&nbsp;<i>CIDR Block:</i> 2001:db8::/64</li></ul><br> Pour appliquer cette règle à plusieurs noeuds, énumerez leur adresse IP ou block CIDR.",
    LT_Firewall_Tip_RelatedNodes                : " Désignez une paire de noeud interconnecté avec leurs environnements). Les règles de firewall vont être automatiquement ajusté selon le nombre de noeud et d'adresse IP choisis.",
    LT_Firewall_Tip_LastModified                : "Modifier l'email  %(email)",
    LT_Firewall_Disabled_Node_Qtip              : "Le Firewall n'est pas supporté par ce noeud",
    LT_Firewall_Warning_InvalidPort             : "Port invalide",
    LT_Firewall_Warning_InvalidPortRange        : "Plage de port invalide",
    LT_Firewall_Warning_InvalidRelation         : "Relation de paramètre entre le mmême noeud n'est pas possible",
    LT_Firewall_Editor_Inbound_Title            : "Ajouter une règle entrante",
    LT_Firewall_Editor_Inbound_Title_Edit       : "Modifier une règle entrantee",
    LT_Firewall_Editor_Outbound_Title           : "Ajouter une règle entrante",
    LT_Firewall_Editor_Outbound_Title_Edit      : "Modifier une règle entrante",
    LT_Firewall_Editor_Label_DenyPublicAccess   : "Interdire la connection à Internet",
    LT_Firewall_Editor_Label_DynamicPorts       : "Ports dynamique",
    LT_Firewall_Field_Group                     : "Noeuds",
    LT_Firewall_Inbound_Empty_Text              : "Il n'y a pas de règle entrante à afficher",
    LT_Firewall_Outbound_Empty_Text             : "Il n'y a pas de règle sortante à afficher",
    LT_Firewall_Protocol_TCP                    : "TCP",
    LT_Firewall_Protocol_UDP                    : "UDP",
    LT_Firewall_Protocol_All                    : "TCP/UDP",
    LT_Firewall_Action_Allow                    : "Allow",
    LT_Firewall_Action_Deny                     : "Deny",
    LT_Firewall_Target_Custom                   : "Customiser adresse(s) IP(s))",
    LT_Firewall_Target_All                      : "All",
    LT_Firewall_Target_All_IPv4                 : "All IPv4",
    LT_Firewall_Target_All_IPv6                 : "All IPv6",
    LT_Firewall_Target_Infra                    : "Platforme d'infrastructure",
    LT_Firewall_Target_PublicAccess             : "Internet (Accès publique)",
    LT_Firewall_Target_Local                    : "Réseau local",
    LT_Firewall_Target_NodeGroup                : "Neuds d'environnement",
    LT_Firewall_All_Ports                       : "AlL ports",
    LT_Firewall_HelpTip                         : "Lire la [link]documentation[/link] pour trouver plus de détails sur le management des règles du firewall.",
    LT_Firewall_Confirm_Enable                  : "Activer Firewall pour <b>%(envName)</b>?",
    LT_Firewall_Confirm_Disable                 : "Désactiver Firewall pour <b>%(envName)</b>?",
    LT_Firewall_Text_InactiveState              : "Le Firewall est actuellement désactivé. [ACTION_ENABLE_FIREWALL]Clickez ici pour activer le Firewall[/ACTION_ENABLE_FIREWALL]",
    LT_Process_Label_FirewallEnabling           : "Activation du firewall...",
    LT_Process_Label_FirewallDisabling          : "Désactivation du firewall...",
    LT_Common_NameEmptyText                     : "Entrez ou selectionnez un nom...",
    CT_Warning_InvalidCIDR                      : "CIDR Block invalide",
    CT_Warning_InvalidIP                        : "IP invalide",


    //TODO: VK - EXTRA move to JCA !
    LT_Task_Name_29	                            : "Déploiement du projet %(project) à partir de %(env)",
    LT_Task_Name_128                            : "Déploiement de %(reponame) du projet %(env)",
    LT_Task_Name_134                            : "Ajout du noeud %(name) à l'environnement %(env)",
    LT_Task_Name_135                            : "Mise à jour du context %(context) dans %(env)",
    LT_Task_Name_136	                        : "Ajout de donnée à la fin du fichier %(fileName) avec  %(name) dans %(env)",
    LT_Task_Name_137                            : "Suppresion des %(count) règles du firewall à partir de %(env)",
    LT_Task_Name_138                            : "Modification des règles du firewall %(name) pour %(env)",
    LT_Task_Name_139                            : "Modification des %(count) règles du  firewall pour %(env)",
    LT_Task_Name_140                            : "Changement du status des règles %(name) du firewall pour %(env)",
    LT_Task_Name_141                            : "Ajout de nouvelles règles %(name) du firewall pour %(env)",
    LT_Task_Name_142                            : "Suppresion de la règle %(name) du firewall de %(env)",
    LT_Task_Name_143                            : "Ajout des règles %(count) du firewall pour %(env)",
    LT_Task_Name_144	                        : "Ajustement des règles du firewall pour %(env)",
    LT_Task_Name_145                            : "Déploiement du contexte %(context) pour %(env)",
    LT_Task_Name_146	                        : "Suppression du contexte  %(context) de %(env)",
    LT_Task_Name_147                            : "Changement de nom, de %(oldcontext) à %(newcontext) pour l'environnement %(env)",
    LT_Task_Name_148                            : "Modification du projet %(context)dans %(env)",

    LT_Settings_Label_Domains				  	: "Customiser domaine",

    LT_ActionsLog_Title                         : "%(sType) : actions",
    LT_Addons_Title                             : "%(sType) : add-ons",
    LT_Config_Tab_Title                         : "%(sType) : configs",
    LT_Log_Tab_Title							: "%(sType) : log",
    LT_Statistics_Tab_Title                     : "%(sType) : statistiques",

    LT_NodeMission_Extra                        : "Extra Services",
    LT_NodeMission_Docker                       : "Docker Image",

    LT_NodeType_docker                          : "Docker Image",
    LT_EnvWizard_NodeTypeCombo_Item_docker      : "%(LT_NodeType_docker)...",
    LT_EnvWizard_Label_LayerNameTpl             : "%(name) %(index)",
    LT_EnvWizard_Label_Topology_Docker          : "Docker",
    LT_EnvWizard_Button_SelectDocker            : "Selectionnez une Image",

    LT_EnvWizard_BalancerRequired               : "Balancer Certifié",
    LT_EnvWizard_CustomSLL_EntryPoint           : "Certifié App. Serveur ou Balancer",

    LT_EnvWizard_Confirm_ReplaceBalancingTpl    : "Replacer l'image <b>%(image)</b> de la couche Balancer avec un template certifié?",

    LT_EnvWizard_Tip_LayerDisplayName           : "Mettre un Alias",
    LT_EnvWizard_Warning_TemplateRegions        : "Le template <b>%(name)</b> peux être crée seulement dans la région <b>%(regions)</b>.",

    LT_SSH_Client_Tab_Title                     : "%(type) : Web SSH",
    LT_SSH_Client_ConnectionError               : "Une erreur s'est produite lorsque vous avez essayé de vous connecter au bureau à distance",
    LT_SSH_Access_Title_Overview                : "SSH Connexion",
    LT_SSH_Access_Gate_Title                    : "SSH Gate",
    LT_SSH_Access_WebSSH_Title                  : "Web SSH",
    //LT_SSH_Access_Title_PrivateKeys             : "Overview",
    LT_SSH_Access_Gate_Key_Text                 : "Pour établir une connexion à distance via SSH, assurez vous que vous ayez ajouté une clé pulique SSH à votre compte <b>Settings</b>, il faut que la clé privée assosié à cette clé publique soit sur votre ordinateur.",
    LT_SSH_Access_Gate_ManageKeys               : "Gestion de clé publique",
    LT_SSH_Access_Gate_Command_Text             : "Ensuite, copiez et lancez la commande sur votre console (Client SSH):",
    LT_SSH_Access_Gate_Command                  : "[link-ssh-uri]ssh %(sshLogin)@%(sshDomain) -p %(sshPort)[/link-ssh-uri]",
    LT_SSH_Access_WebSSH_Text                   : "Pour un accès rapide via SSH, utilisez Web SSH client:",
    LT_SSH_Access_WebSSH_Btn_Connect            : 'Connecté',
    LT_SSH_Access_Documentation                 : "Lire la [link-docs]documentation[/link-docs] pour trouver plus de détails concernant l'accès SSH.",
    LT_SSH_Access_PublicKeys                    : "Clés publique",
    LT_SSH_Access_PrivateKeys                   : "Clés privée",
    LT_DockerSettings_Item_RunArgs              : "CMD / Entry Point",
    LT_SSH_Keys_Title                           : "Clés SSH",

    LT_Log_Warning_FileNotExists                : "Le fichier de log <b>%(fileName)</b> n'existe pas.",

    LT_EnvTrHistory_Label_VerifyAuth            : "Vérificatation de l'authentification",
    LT_Common_Title_RepoVerification            : "Vérificatation du répertoire",

    LT_Environments_Status_1002                 : "Refreshing...",

    LT_Text_VdsInfoIntIp                        :
    "<p>Pour travailler avec le noeud Elastic VPS à partir de l'adresse <b>IP interne</b>, vous pouvez aussi:<ul>"+
    "<li>[LT_Text_Vds_WebSSH][/LT_Text_Vds_WebSSH]</li>"+
    "<li>Génnérer une pair de clés et ajoutez la clé publique dans votre compte[ACTION_ACCOUNT_SETTINGS]Settings[/ACTION_ACCOUNT_SETTINGS] pour établir une connexion à votre machine locale</li></ul></p>",

    LT_Text_VdsInfoExtIp                        :
    "<p>Pour entrer dans le noeud Elastic VPS avec une adresse <b>IP interne</b> vous pouvez aussi:<ul>"+
    "<li>[LT_Text_Vds_WebSSH][/LT_Text_Vds_WebSSH]</li>"+
    "<li>Connexion à travers votre machine locale via votre terminal utilisant votre login, password et adresse IP publiqueque vous avez reçu par mail</li></ul></p>",

    LT_Text_Vds_WebSSH                          : "use the embedded [ACTION_WEB_SSH]Web SSH[/ACTION_WEB_SSH] client with session-based authorization for quick access directly through your browser",

    LT_Task_Name_78                             : "Extraction du contenu de l'archive de %(nodetype) de l'environnement %(env)",

    LT_Environments_Tip_MasterNode              : "Master Node",

    // Overview Panel
    LT_Firewall_Description                     : "Les règles Firewall sont utilisés pour définir le traffic entrant/sortant qui sont autorisés.",
    LT_Firewall_Tip_IsolatedEnvGroups           : "To constrain internal communication between nodes of different environments at your account, place them within separate isolated environment groups.",
    LT_Firewall_AllowAll                        : "Autoriser toute les connexions",
    LT_Firewall_Enabled_Inbound                 : "Par défaut, les connexions entrante sont interdite (à l'exception de ceux qui ont été autorisé explicitement). <br>[ACTION_VIEW_RULES]Voir les règles du trafic enntrant[ACTION_VIEW_RULES]",
    LT_Firewall_Enabled_Outbound                : "Par défaut, les connexions entrante sont autorisé (à l'exception de ceux qui ont été interdite explicitement). <br>[ACTION_VIEW_RULES]Voir les règles du trafic sortant[/ACTION_VIEW_RULES]",
    LT_Firewall_Field_Inbound                   : "Connexion entrante",
    LT_Firewall_Field_Outbound                  : "Connexion sortante",
    LT_Firewall_Field_State                     : "Etat du firewall",
    LT_Firewall_ManageEnvGroups                 : "[ACTION_EDIT_ENV_GROUPS]Modfier Group Env[/ACTION_EDIT_ENV_GROUPS]",
    LT_EnvGroups_Disabled_Isolation_Qtip        : "Partage d'environnement par les autre utilisateurs ne peuvent pas être inclus dans votre isolation de groupe d'environnement",
    
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Release: 5.4.2
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    LT_AppStore_Restricted_Region_Qtip          : "L'installation de l'appliation n'est pas autorisé pour cette région",
    LT_Notify_Label_RegionAppNotAllowed         : "L'installation<b>%(name)</b> n'est pas supporté par la région.",

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // LT_EmptyItem field is used for internal system purposes. Please do not edit it and leave as is.
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    LT_EmptyItem     : ""
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

Ext.UpdateManager.defaults.indicatorText = '<div class="loading-indicator">Chargement...</div>';

if(Ext.data.Types){
    Ext.data.Types.stripRe = /[\$,%]/g;
}

if(Ext.DataView){
    Ext.DataView.prototype.emptyText = "";
}

if(Ext.grid.GridPanel){
    Ext.grid.GridPanel.prototype.ddText = "{0} ligne sélectionnée{1}";
}

if(Ext.LoadMask){
    Ext.LoadMask.prototype.msg = "Chargement...";
}

Date.monthNames = [
    "Janvier",
    "Février",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Août",
    "Septembre",
    "Octobre",
    "Novembre",
    "Décembre"
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
    "Dimanche",
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi"
];

Date.getShortDayName = function(day) {
    return Date.dayNames[day].substring(0, 3);
};

Date.parseCodes.S.s = "(?:st|nd|rd|th)";

if(Ext.MessageBox){
    Ext.MessageBox.buttonText = {
        ok     : "OK",
        cancel : "Annuler",
        yes    : "Oui",
        no     : "Non"
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
        todayText         : "Aujourd'hui",
        minText           : "Cette date est antérieure à la date minimale",
        maxText           : "Cette date est postérieure à la date maximale",
        disabledDaysText  : "",
        disabledDatesText : "",
        monthNames        : Date.monthNames,
        dayNames          : Date.dayNames,
        nextText          : 'Mois suivant (Contrôle+Droite)',
        prevText          : 'Mois précédent (Contrôle+gauche)',
        monthYearText     : 'Sélectionnez un mois (Contrôle + Haut/Bas pour changer les années)',
        todayTip          : "{0} (Barre espace)",
        format            : "m/d/y",
        okText            : "&#160;OK&#160;",
        cancelText        : "Annuler",
        startDay          : 0
    });
}

if(Ext.PagingToolbar){
    Ext.apply(Ext.PagingToolbar.prototype, {
        beforePageText : "Page",
        afterPageText  : "de {0}",
        firstText      : "Première page",
        prevText       : "Page précédente",
        nextText       : "Page suivante",
        lastText       : "Dernière page",
        refreshText    : "Actualiser",
        displayMsg     : "Affichage {0} - {1} of {2}",
        emptyMsg       : 'Aucune donnée à afficher'
    });
}

if(Ext.form.BasicForm){
    Ext.form.BasicForm.prototype.waitTitle = "Veuillez patienter..."
}

if(Ext.form.Field){
    Ext.form.Field.prototype.invalidText = "La valeur de ce champ est invalide";
}

if(Ext.form.TextField){
    Ext.apply(Ext.form.TextField.prototype, {
        minLengthText : "La longueur minimale pour ce champ est de {0}",
        maxLengthText : "La longueur maximale pour ce champ est de {0}",
        blankText     : "Ce champ est nécessaire",
        regexText     : "",
        emptyText     : null
    });
}

if(Ext.form.NumberField){
    Ext.apply(Ext.form.NumberField.prototype, {
        decimalSeparator : ".",
        decimalPrecision : 2,
        minText : "La valeur minimale pour ce champ est {0}",
        maxText : "La valeur maximale pour ce champ est {0}",
        nanText : "{0} n'est pas un nombre valide"
    });
}

if(Ext.form.DateField){
    Ext.apply(Ext.form.DateField.prototype, {
        disabledDaysText  : "Désactivé",
        disabledDatesText : "Désactivé",
        minText           : "La date dans ce champ doit être postérieure à {0}",
        maxText           : "La date dans ce champ doit être antérieure à {0}",
        invalidText       : "{0}est une date invalide - elle doit être au format {1}",
        format            : "m/d/y",
    altFormats        : "m/d/Y|m-d-y|m-d-Y|m/d|m-d|md|mdy|mdY|d|Y-m-d",
        startDay          : 0
    });
}

if(Ext.form.ComboBox){
    Ext.apply(Ext.form.ComboBox.prototype, {
        loadingText       : "Chargement...",
        valueNotFoundText : undefined
    });
}

if(Ext.form.VTypes){
    Ext.apply(Ext.form.VTypes, {
        emailText    : 'Ce champ doit être une adresse e-mail au format "utilisateur@exemple.com',
        urlText      : 'Ce champ doit être une URL au format "http:/'+'/www.exemple.com',
        alphaText    : 'Ce champ doit contenir uniquement des lettres et _',
        alphanumText : 'Ce champ doit contenir uniquement des lettres, des chiffres et _.',
    });
}

if(Ext.form.HtmlEditor){
    Ext.apply(Ext.form.HtmlEditor.prototype, {
        createLinkText : 'Veuillez saisir l`URL du lien:',
        buttonTips : {
            bold : {
                title: 'Gras(Ctrl+B)',
                text: 'Met le texte sélectionné en gras.',
                cls: 'x-html-editor-tip'
            },
            italic : {
                title: 'Italique (Ctrl+I)',
                text: 'Met le texte sélectionné en italique.',
                cls: 'x-html-editor-tip'
            },
            underline : {
                title: 'Souligner (Ctrl+U)',
                text: 'Souligne le texte sélectionné.',
                cls: 'x-html-editor-tip'
            },
            increasefontsize : {
                title: 'Agrandir texte',
                text: 'Augmente la taille de la police.',
                cls: 'x-html-editor-tip'
            },
            decreasefontsize : {
                title: 'Réduire texte',
                text: 'Diminue la taille de la police.',
                cls: 'x-html-editor-tip'
            },
            backcolor : {
                title: 'Couleur de surlignage du texte',
                text: 'Change la couleur d`arrière-plan du texte sélectionné',
                cls: 'x-html-editor-tip'
            },
            forecolor : {
                title: 'Couleur de police',
                text: 'Change la couleur du texte sélectionné.',
                cls: 'x-html-editor-tip'
            },
            justifyleft : {
                title: 'Aligner le texte à gauche',
                text: 'Aligne le texte à gauche.',
                cls: 'x-html-editor-tip'
            },
            justifycenter : {
                title: 'Centrer texte',
                text: 'Centre le texte dans l`éditeur.',
                cls: 'x-html-editor-tip'
            },
            justifyright : {
                title: 'Aligner le texte à droite',
                text: 'Aligne le texte à droite',
                cls: 'x-html-editor-tip'
            },
            insertunorderedlist : {
                title: 'Liste à puces',
                text: 'Crée une liste à puces.',
                cls: 'x-html-editor-tip'
            },
            insertorderedlist : {
                title: 'Liste numérotée',
                text: 'Crée une liste numérotée.',
                cls: 'x-html-editor-tip'
            },
            createlink : {
                title: 'Lien hypertexte',
                text: 'Transforme le texte sélectionné en lien hypertexte.',
                cls: 'x-html-editor-tip'
            },
            sourceedit : {
                title: 'Éditer source',
                text: 'Passe au mode source de l`éditeur.',
                cls: 'x-html-editor-tip'
            }
        }
    });
}

if(Ext.grid.GridView){
    Ext.apply(Ext.grid.GridView.prototype, {
        sortAscText  : "Tri croissant",
        sortDescText : "Tri décroissant",
        columnsText  : "Colonnes"
    });
}

if(Ext.grid.GroupingView){
    Ext.apply(Ext.grid.GroupingView.prototype, {
        emptyGroupText : '(None)',
        groupByText    : 'Grouper selon ce champ',
        showGroupsText : 'Afficher dans Groupes'
    });
}

if(Ext.grid.PropertyColumnModel){
    Ext.apply(Ext.grid.PropertyColumnModel.prototype, {
        nameText   : "Nom",
        valueText  : "Valeur",
        dateFormat : "m/j/Y",
        trueText: "vrai",
        falseText: "faux"
    });
}

if(Ext.grid.BooleanColumn){
    Ext.apply(Ext.grid.BooleanColumn.prototype, {
        trueText  : "vrai",
        falseText : "faux",
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
        splitTip            : "Faites glisser pour redimensionner.",
        collapsibleSplitTip : "Faites glisser pour redimensionner. Double-cliquez pour masquer."
    });
}

if(Ext.form.TimeField){
    Ext.apply(Ext.form.TimeField.prototype, {
        minText : "L'heure indiquée dans ce champ doit être égale ou postérieure à {0}",
        maxText : "L'heure indiquée dans ce champ doit être égale ou antérieure à {0}",
        invalidText : "{0} n'est pas une heure valide",
        format : "g:i A",
        altFormats : "g:ia|g:iA|g:i a|g:i A|h:i|g:i|H:i|ga|ha|gA|h a|g a|g A|gi|hi|gia|hia|g|H"
    });
}

if(Ext.form.CheckboxGroup){
    Ext.apply(Ext.form.CheckboxGroup.prototype, {
        blankText : "Vous devez sélectionner au moins un élément dans ce groupe"
    });
}

if(Ext.form.RadioGroup){
    Ext.apply(Ext.form.RadioGroup.prototype, {
        blankText : "Vous devez sélectionner un élément dans ce groupe"
    });
}
