/* eslint-disable */
const taskCompact = {
  "gid": "12345",
  "resource_type": "task",
  "name": "Buy catnip",
  "approval_status": "pending",
  "assignee_status": "upcoming",
  "completed": false,
  "completed_at": "2012-02-22T02:06:58.147Z",
  "completed_by": {
    "gid": "12345",
    "resource_type": "user",
    "name": "Greg Sanchez"
  },
  "created_at": "2012-02-22T02:06:58.147Z",
  "dependencies": [
    {
      "gid": "12345",
      "resource_type": "task"
    }
  ],
  "dependents": [
    {
      "gid": "12345",
      "resource_type": "task"
    }
  ],
  "due_at": "2019-09-15T02:06:58.147Z",
  "due_on": "2019-09-15",
  "external": {
    "data": "A blob of information",
    "gid": "my_gid"
  },
  "hearted": true,
  "hearts": [
    {
      "gid": "12345",
      "user": {
        "gid": "12345",
        "resource_type": "user",
        "name": "Greg Sanchez"
      }
    }
  ],
  "html_notes": "<body>Mittens <em>really</em> likes the stuff from Humboldt.</body>",
  "is_rendered_as_separator": false,
  "liked": true,
  "likes": [
    {
      "gid": "12345",
      "user": {
        "gid": "12345",
        "resource_type": "user",
        "name": "Greg Sanchez"
      }
    }
  ],
  "memberships": [
    {
      "project": {
        "gid": "12345",
        "resource_type": "project",
        "name": "Stuff to buy"
      },
      "section": {
        "gid": "12345",
        "resource_type": "section",
        "name": "Next Actions"
      }
    }
  ],
  "modified_at": "2012-02-22T02:06:58.147Z",
  "notes": "Mittens really likes the stuff from Humboldt.",
  "num_hearts": 5,
  "num_likes": 5,
  "num_subtasks": 3,
  "resource_subtype": "default_task",
  "start_on": "2019-09-14",
  "assignee": {
    "gid": "12345",
    "resource_type": "user",
    "name": "Greg Sanchez"
  },
  "custom_fields": [
    {
      "gid": "12345",
      "resource_type": "custom_field",
      "currency_code": "EUR",
      "custom_label": "gold pieces",
      "custom_label_position": "suffix",
      "description": "Development team priority",
      "enabled": true,
      "enum_options": [
        {
          "gid": "12345",
          "resource_type": "enum_option",
          "color": "blue",
          "enabled": true,
          "name": "Low"
        }
      ],
      "enum_value": {
        "gid": "12345",
        "resource_type": "enum_option",
        "color": "blue",
        "enabled": true,
        "name": "Low"
      },
      "format": "custom",
      "has_notifications_enabled": true,
      "is_global_to_workspace": true,
      "name": "Status",
      "number_value": 5.2,
      "precision": 2,
      "resource_subtype": "text",
      "text_value": "Some Value",
      "type": "text"
    }
  ],
  "followers": [
    {
      "gid": "12345",
      "resource_type": "user",
      "name": "Greg Sanchez"
    }
  ],
  "parent": {
    "gid": "12345",
    "resource_type": "task",
    "name": "Bug Task"
  },
  "permalink_url": "https://app.asana.com/0/resource/123456789/list",
  "projects": [
    {
      "gid": "12345",
      "resource_type": "project",
      "name": "Stuff to buy"
    }
  ],
  "tags": [
    {
      "gid": "59746",
      "name": "Grade A"
    }
  ],
  "workspace": {
    "gid": "12345",
    "resource_type": "workspace",
    "name": "My Company Workspace"
  }
}