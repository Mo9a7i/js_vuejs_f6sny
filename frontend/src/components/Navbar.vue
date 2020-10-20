<template>
  <b-container>
    <b-row no-gutters> 
      <b-col cols="12">
        <div>
          <b-navbar toggleable="lg" type="dark" variant="warning">
            <b-navbar-brand href="#">F6sny</b-navbar-brand>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
              <b-navbar-nav class="ml-auto">
                <b-nav-form>
                  <b-form-input
                    size="sm"
                    class="mr-sm-2"
                    placeholder="Search"
                  ></b-form-input>
                  <b-button size="sm" class="my-2 my-sm-0" type="submit"
                    >Search</b-button
                  >
                </b-nav-form>
                <b-nav-item-dropdown right>
                  <template v-slot:button-content>
                    <em>User</em>
                  </template>
                  <b-dropdown-item href="#">Profile</b-dropdown-item>
                  <b-dropdown-item href="#">Sign Out</b-dropdown-item>
                </b-nav-item-dropdown>
              </b-navbar-nav>
            </b-collapse>
          </b-navbar>
        </div>

        
        <b-alert variant="info" class="text-left my-3" show>
          <h4 class="alert-heading">Warning!</h4>
          <p>
            Do not think that this is all the fun that you will get.
          </p>
          <hr />
          <p class="mb-0">
            This is only a development version of the website.
          </p>
          </b-alert
        >
      </b-col>
    </b-row>
  </b-container>
</template>
<script></script>