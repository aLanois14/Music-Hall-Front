export const APICATALOG = {
	"refresh-token":{
        "url": "Authentication/RefreshToken"
    },
    //LOGIN
    "login" : {
        "url": "Authentication/Login"
    },
    "google-authenticate" : {
        "url": "Authentication/GoogleAuthenticate"
    },
    "google-register": {
        "url": "Authentication/GoogleRegister"
    },
    "google-login": {
        "url": "Authentication/GoogleLogin"
    },
    "google-calendar-connect": {
        "url": "Authentication/ConnectGoogleCalendar"
    },
    //REGISTER
    "validate-email-availability" : {
        "url": "Authentication/ValidateEmailAvailability/{{email}}"
    },  
    "register" : {
        "url": "Authentication/Register"
    },
    "confirm-email" : {
        "url": "Authentication/ConfirmEmail"
    },
    //DASHBOARD
    "get-daily": {
        "url": "Dashboard/MyDaily/{{day}}"
    },
    "update-daily": {
        "url": "Dashboard/UpdateDaily/{{day}}"
    },
    "get-team-daily": {
        "url": "Dashboard/TeamDaily/{{day}}/{{teamId}}"
    },
    "update-team-daily": {
        "url": "Dashboard/UpdateTeamDaily"
    },
    "get-team-settings": {
        "url": "Dashboard/MyTeamSettings/{{teamId}}"
    },
    //TEAM
    "get-user-invitation": {
        "url": "Team/UserInvitation"
    },
    "send-invitation-by-mail": {
        "url": "Team/SendInvitationByMail"
    },
    "create-invitation": {
        "url": "Team/CreateInvitation"
    },
    "accept-invitation-by-id": {
        "url": "Team/AcceptInvitationById/{{id}}"
    },
    "accept-invitation-by-guid": {
        "url": "Team/AcceptInvitationByGuid/{{guid}}"
    },
    "get-teams": {
        "url": "Team/GetTeams/{{workspace}}"
    },
    //CONTRIBUTION
    "get-contributions":{
        "url": "Contribution/GetContributions/{{type}}/{{workspace}}/{{label}}?searchedText={{searchedText}}"
    },
    "get-contributions-list":{
        "url": "Contribution/GetContributionsList/{{workspace}}"
    },
    "get-contribution-detail":{
        "url": "Contribution/GetContribution/{{id}}"
    },
    "get-contribution-detail-light":{
        "url": "Contribution/GetContributionLight/{{id}}"
    },
    "create-contribution":{
        "url": "Contribution/Create"
    },
    "update-contribution-description": {
        "url": "Contribution/UpdateDescription"
    },
    "update-contribution-properties": {
        "url": "Contribution/UpdateProperties"
    },
    "add-user-contribution": {
        "url": "Contribution/AddUserSharing/{{contributionId}}"
    },
    "remove-user-contribution": {
        "url": "Contribution/RemoveUserSharing/{{contributionId}}"
    },
    //EVENT
    "get-events":{
        "url": "Event/GetEvents/{{type}}/{{workspace}}/{{label}}?searchedText={{searchedText}}"
    },
    "get-event-detail":{
        "url": "Event/GetEvent/{{id}}"
    },
    "get-event-detail-light":{
        "url": "Event/GetEventLight/{{id}}"
    },
    "event-send-response":{
        "url": "Event/SendResponse/{{id}}/{{response}}"
    },
    "create-event": {
        "url": "Event/Create"
    },
    "update-event-properties": {
        "url": "Event/UpdateProperties"
    },
    "update-event-description": {
        "url": "Event/UpdateDescription"
    },
    "add-user-event": {
        "url": "Event/AddUserSharing/{{eventId}}"
    },
    "remove-user-event": {
        "url": "Event/RemoveUserSharing/{{eventId}}"
    },
    //JOB
    "get-jobs":{
        "url": "Job/GetJobs/{{type}}/{{workspace}}/{{label}}?searchedText={{searchedText}}"
    },
    "get-job-detail":{
        "url": "Job/GetJob/{{id}}"
    },
    "create-job":{
        "url": "Job/CreateJob"
    },
    "update-job":{
        "url": "Job/UpdateJob"
    },
    //BLOCK
    "add-block-contribution":{
        "url": "Block/AddBlockContribution"
    },
    "update-block-contribution":{
        "url": "Block/UpdateBlockContribution"
    },
    "update-block-contributions":{
        "url": "Block/UpdateBlockContributions"
    },
    "delete-block-contribution":{
        "url": "Block/DeleteBlockContribution"
    },
    "add-block-event":{
        "url": "Block/AddBlockEvent"
    },
    "update-block-event":{
        "url": "Block/UpdateBlockEvent"
    },
    "update-block-events":{
        "url": "Block/UpdateBlockEvents"
    },
    "delete-block-event":{
        "url": "Block/DeleteBlockEvent"
    },
    //WORKSPACE
    "get-workspaces":{
        "url": "Workspace/GetWorkspaces"
    },
    //USER
    "get-user-schedule":{
        "url": "User/GetSchedule"
    },
    "get-related-users":{
        "url": "User/GetRelatedUsers"
    },
    "get-user-video":{
        "url": "User/GetUserVideo"
    },
    "get-list-user-contribution":{
        "url": "User/GetListUserContribution"
    },
    "get-list-user-event":{
        "url": "User/GetListUserEvent"
    },
    //LABEL
    "get-labels":{
        "url": "Label/GetLabels/{{workspace}}/{{searchText}}"
    },
    //NOTIFICATION
    "get-received-notifications":{
        "url": "Notification/GetReceivedNotifications"
    },
    "update-notification":{
        "url": "Notification/UpdateNotification"
    },
    //PING
    "ping":{
        "url": "Ping"
    },
    //TEMPLATE
    "get-templates":{
        "url": "Template/GetAll"
    },
    "get-templates-contribution":{
        "url": "Template/GetTemplateContribution"
    },
    "get-templates-event":{
        "url": "Template/GetTemplateEvent"
    },
    "get-template":{
        "url": "Template/GetTemplate/{{id}}"
    }
}

export const ENVS = {
    "DEV" : "https://localhost:44374/api",
    "PREPROD" : "https://fairwai.sixmon.net/api",
    "PROD" : "https://fairwai.sixmon.net/api"
}

export const SIGNALR = {
    "DEV" : "https://localhost:44374/",
    "PREPROD" : "https://fairwai.sixmon.net/",
    "PROD" : "https://fairwai.sixmon.net/"
}

export const BASE = {
    "DEV" : "http://localhost:8100",
    "PREPROD" : "https://fairwai.sixmon.net",
    "PROD" : "https://fairwai.sixmon.net"
}