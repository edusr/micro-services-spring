package trup.de.maluco.authserver;

import org.springframework.boot.autoconfigure.security.SecurityProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.annotation.Order;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

@Configuration
@Order(SecurityProperties.ACCESS_OVERRIDE_ORDER)
@EnableWebSecurity
public class LoginConfig extends WebSecurityConfigurerAdapter {

	@Override
	protected void configure(HttpSecurity http) throws Exception {
		
		http.
        httpBasic().and()
        .requestMatchers()
        //specify urls handled
        .antMatchers("/login", "/oauth/authorize", "/oauth/confirm_access")
        .antMatchers("/fonts/**", "/js/**", "/css/**")
        .and()
        .authorizeRequests()
        .antMatchers(HttpMethod.OPTIONS, "/oauth/token").permitAll()
        .antMatchers("/fonts/**", "/js/**", "/css/**").permitAll()
        .anyRequest().authenticated()
        //.and().csrf().csrfTokenRepository(CookieCsrfTokenRepository.withHttpOnlyFalse())
        ;
		//.csrf().csrfTokenRepository(CookieCsrfTokenRepository.withHttpOnlyFalse());
		
	}
	
	@Bean
	public WebMvcConfigurer corsConfigurer() {
	    return new WebMvcConfigurerAdapter() {
	        @Override
	        public void addCorsMappings(CorsRegistry registry) {
	            //registry.addMapping("/**").allowedOrigins("http://localhost:4200");
	        	registry.addMapping("/**").allowedOrigins("*");
	        }
	    };
	}
	
//	@Override
//    public void configure(WebSecurity web) throws Exception {
//      web.ignoring()
//        .antMatchers(HttpMethod.OPTIONS);
//    }
	
	/*@Bean
	CorsConfigurationSource corsConfigurationSource() {
		CorsConfiguration configuration = new CorsConfiguration();
		configuration.setAllowedOrigins(Arrays.asList("*"));
		configuration.setAllowedMethods(Arrays.asList("GET","POST","OPTIONS","PUT"));
		configuration.setAllowedHeaders(ImmutableList.of("Authorization", "Cache-Control", "Content-Type"));
		UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
		source.registerCorsConfiguration("/**", configuration);
		return source;
	}*/
	
}